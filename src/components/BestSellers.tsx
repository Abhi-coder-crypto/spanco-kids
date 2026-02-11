import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const BestSellers = () => {
  return (
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Best Sellers
            </h2>
            <p className="font-body text-muted-foreground">
              Most loved styles by parents everywhere
            </p>
          </div>
          <Link
            to="/category/best-seller"
            className="hidden md:inline-flex font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
