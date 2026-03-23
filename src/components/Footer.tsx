import { Instagram, MessageCircle, Mail, MapPin, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
              <Flower2 className="w-5 h-5 text-primary" /> BloomCart
            </h3>
            <p className="text-sm opacity-75 leading-relaxed">
              Lagos' finest flower shop. Handcrafted bouquets delivered with love to your doorstep.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="opacity-75 hover:opacity-100 transition-opacity"><Instagram className="w-5 h-5" /></a>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity"><MessageCircle className="w-5 h-5" /></a>
              <a href="mailto:hello@bloomcart.ng" className="opacity-75 hover:opacity-100 transition-opacity"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block opacity-75 hover:opacity-100 transition-opacity">All Flowers</Link>
              <Link to="/shop?category=wedding" className="block opacity-75 hover:opacity-100 transition-opacity">Wedding Flowers</Link>
              <Link to="/shop?category=gifts" className="block opacity-75 hover:opacity-100 transition-opacity">Gift Bundles</Link>
            </div>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-75">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Lagos, Nigeria</p>
              <p className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> +234 800 000 0000</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@bloomcart.ng</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm opacity-50 space-y-1">
          <p>© 2026 BloomCart. All rights reserved.</p>
          <p>Developed by <span className="font-semibold opacity-75">Anointedthedeveloper</span></p>
        </div>
      </div>
    </footer>
  );
}