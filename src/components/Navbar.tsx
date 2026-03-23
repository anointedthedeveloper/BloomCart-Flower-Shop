import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-serif text-2xl font-bold text-primary tracking-tight">
          🌸 BloomCart
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Shop</Link>
          <Link to="/shop?category=wedding" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Wedding</Link>
          <Link to="/shop?category=gifts" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Gifts</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/shop" className="text-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </Link>
          <Link to="/cart" className="relative text-foreground hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                {totalItems}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-3 animate-fade-in">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground hover:text-primary">Home</Link>
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground hover:text-primary">Shop</Link>
          <Link to="/shop?category=wedding" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground hover:text-primary">Wedding</Link>
          <Link to="/shop?category=gifts" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground hover:text-primary">Gifts</Link>
        </div>
      )}
    </nav>
  );
}
