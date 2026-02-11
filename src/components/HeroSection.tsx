import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Spanco Kids Fashion Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-[70vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block text-sm font-body font-medium tracking-[0.2em] text-primary uppercase mb-4"
            >
              New Season Collection
            </motion.span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Dress Them
              <br />
              <span className="text-primary">In Love</span>
            </h1>

            <p className="font-body text-lg text-muted-foreground mb-8 max-w-md">
              Premium kids fashion crafted with care. Soft fabrics, elegant designs,
              and styles they'll love to wear.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/category/best-seller"
                className="inline-flex items-center justify-center gradient-cta text-primary-foreground font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                Shop Best Sellers
              </Link>
              <Link
                to="/category/festive"
                className="inline-flex items-center justify-center bg-card border border-border text-foreground font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-muted transition-all duration-300"
              >
                Festive Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
