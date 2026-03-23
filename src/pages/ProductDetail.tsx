import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ShoppingBag, Minus, Plus, MessageCircle } from "lucide-react";
import { products, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const wrappingOptions = [
  { id: "standard" as const, label: "Standard Wrap", extra: 0 },
  { id: "premium" as const, label: "Premium Gift Wrap", extra: 2000 },
  { id: "eco" as const, label: "Eco-Friendly Wrap", extra: 1000 },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [wrapping, setWrapping] = useState<"standard" | "premium" | "eco">("standard");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <p className="text-4xl">🌸</p>
            <p className="font-serif text-xl">Product not found</p>
            <Link to="/shop" className="text-primary hover:underline text-sm">Back to shop</Link>
          </div>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  const handleAddToCart = () => {
    addItem(product, quantity, message || undefined, wrapping);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-lg overflow-hidden aspect-square bg-muted">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider capitalize">{product.category}</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mt-1">{product.name}</h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Wrapping */}
            <div>
              <h3 className="font-serif font-semibold mb-3">Gift Wrapping</h3>
              <div className="space-y-2">
                {wrappingOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-center justify-between p-3 rounded-md border cursor-pointer transition-colors ${wrapping === opt.id ? "border-primary bg-rose-light" : "hover:border-primary/50"}`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="wrapping"
                        checked={wrapping === opt.id}
                        onChange={() => setWrapping(opt.id)}
                        className="accent-primary"
                      />
                      <span className="text-sm font-medium">{opt.label}</span>
                    </div>
                    {opt.extra > 0 && <span className="text-xs text-muted-foreground">+{formatPrice(opt.extra)}</span>}
                  </label>
                ))}
              </div>
            </div>

            {/* Message Card */}
            <div>
              <h3 className="font-serif font-semibold mb-3">Add a Message Card (Free)</h3>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your heartfelt message here..."
                className="w-full p-3 rounded-md border bg-card text-foreground text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-full">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-accent rounded-l-full transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-semibold text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-accent rounded-r-full transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>
            </div>

            <a
              href={`https://wa.me/2348000000000?text=Hi! I'd like to order: ${product.name} (${formatPrice(product.price)})`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 border border-sage text-sage rounded-full font-semibold hover:bg-sage-light transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" /> Order via WhatsApp
            </a>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
