import { Link } from "react-router-dom";
import { formatPrice, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </Link>
      <div className="p-4 space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button
            onClick={() => addItem(product)}
            className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
