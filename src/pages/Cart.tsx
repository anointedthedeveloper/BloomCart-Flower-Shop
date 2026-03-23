import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Cart() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground/40" />
            <h2 className="font-serif text-2xl font-bold">Your cart is empty</h2>
            <p className="text-muted-foreground text-sm">Let's fill it with beautiful flowers!</p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Browse Flowers
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link to="/shop" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </Link>

        <h1 className="font-serif text-3xl font-bold mb-8">Your Cart ({totalItems} items)</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-4 bg-card rounded-lg border">
                <Link to={`/product/${item.product.id}`} className="w-24 h-24 rounded-md overflow-hidden shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-serif font-semibold text-foreground hover:text-primary transition-colors">{item.product.name}</h3>
                    </Link>
                    <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors shrink-0">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  {item.message && <p className="text-xs text-muted-foreground mt-1 truncate">Card: "{item.message}"</p>}
                  {item.wrapping && item.wrapping !== "standard" && (
                    <p className="text-xs text-muted-foreground capitalize">{item.wrapping} wrap</p>
                  )}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border rounded-full">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 hover:bg-accent rounded-l-full transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 hover:bg-accent rounded-r-full transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-bold text-primary">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-card rounded-lg border p-6 h-fit sticky top-24 space-y-4">
            <h3 className="font-serif text-lg font-bold">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPrice(totalPrice)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span>{totalPrice >= 20000 ? "Free" : formatPrice(2500)}</span></div>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">{formatPrice(totalPrice + (totalPrice >= 20000 ? 0 : 2500))}</span>
            </div>
            {totalPrice < 20000 && (
              <p className="text-xs text-muted-foreground">Add {formatPrice(20000 - totalPrice)} more for free delivery!</p>
            )}
            <button className="w-full py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
              Proceed to Checkout
            </button>
            <p className="text-xs text-center text-muted-foreground">Pay on delivery available • Secure checkout</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
