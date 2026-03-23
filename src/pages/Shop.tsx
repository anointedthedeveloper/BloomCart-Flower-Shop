import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, categories, occasions } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const activeCategory = searchParams.get("category") || "";
  const activeOccasion = searchParams.get("occasion") || "";

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (activeOccasion && !p.occasion.includes(activeOccasion)) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.description.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [activeCategory, activeOccasion, search]);

  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearch("");
  };

  const hasActiveFilters = activeCategory || activeOccasion || search;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">Our Collection</h1>
            <p className="text-muted-foreground mt-1">{filtered.length} beautiful arrangements</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search flowers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2.5 rounded-full border bg-card hover:bg-accent transition-colors md:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-56 shrink-0 space-y-6 ${showFilters ? "fixed inset-0 z-50 bg-background p-6 overflow-auto md:static md:p-0 md:z-auto" : ""}`}>
            {showFilters && (
              <div className="flex justify-between items-center md:hidden mb-4">
                <h3 className="font-serif text-lg font-bold">Filters</h3>
                <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" /></button>
              </div>
            )}

            <div>
              <h4 className="font-serif font-semibold text-sm mb-3 uppercase tracking-wider text-muted-foreground">Category</h4>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter("category", activeCategory === cat.id ? "" : cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${activeCategory === cat.id ? "bg-primary text-primary-foreground" : "hover:bg-accent text-foreground"}`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-sm mb-3 uppercase tracking-wider text-muted-foreground">Occasion</h4>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setFilter("occasion", activeOccasion === occ ? "" : occ)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors capitalize ${activeOccasion === occ ? "bg-primary text-primary-foreground border-primary" : "hover:border-primary text-foreground"}`}
                  >
                    {occ.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                Clear all filters
              </button>
            )}

            {showFilters && (
              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-3 bg-primary text-primary-foreground rounded-full font-semibold md:hidden"
              >
                Show {filtered.length} results
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <p className="text-4xl">🌻</p>
                <p className="font-serif text-xl font-semibold">No flowers found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters or search.</p>
                <button onClick={clearFilters} className="text-sm text-primary hover:underline">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
