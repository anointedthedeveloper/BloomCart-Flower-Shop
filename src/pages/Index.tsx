import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Flower } from "lucide-react";
import { products, categories, formatPrice } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bouquet.jpg";
import promoValentine from "@/assets/promo-valentine.jpg";
import promoBirthday from "@/assets/promo-birthday.jpg";

const Index = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Beautiful flower bouquet" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl space-y-6 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm">
              <Flower className="w-4 h-4 inline" /> Free delivery on orders above ₦20,000
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1]">
              Flowers That Speak Your Heart
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-md">
              Handcrafted bouquets made with love. Same-day delivery across Lagos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary-foreground/30 text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" /> Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-4xl">{cat.icon}</span>
                <span className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Handpicked for you</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-1">Featured Bouquets</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Promos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-10">Special Occasions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/shop?occasion=valentine" className="group relative rounded-lg overflow-hidden aspect-[2/1]">
              <img src={promoValentine} alt="Valentine's Day Special" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">Valentine's Day</h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">Express your love with our curated collection</p>
                </div>
              </div>
            </Link>
            <Link to="/shop?occasion=birthday" className="group relative rounded-lg overflow-hidden aspect-[2/1]">
              <img src={promoBirthday} alt="Birthday Special" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">Birthday Blooms</h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">Make their day extra special</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-sage text-secondary-foreground text-center">
        <div className="container mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Prefer to Order via WhatsApp?</h2>
          <p className="text-secondary-foreground/80 max-w-md mx-auto">
            Send us a message and we'll help you pick the perfect bouquet. Pay on delivery available!
          </p>
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
