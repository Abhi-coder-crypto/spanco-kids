import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PromoBanner = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-cta rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-12 w-20 h-20 rounded-full border-2 border-primary-foreground" />
            <div className="absolute bottom-12 right-16 w-32 h-32 rounded-full border-2 border-primary-foreground" />
            <div className="absolute top-1/2 left-1/3 w-12 h-12 rounded-full border-2 border-primary-foreground" />
          </div>

          <div className="relative z-10">
            <span className="font-body text-sm tracking-[0.2em] text-primary-foreground/80 uppercase">
              Limited Time Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
              Festive Season Sale
            </h2>
            <p className="font-body text-primary-foreground/90 mb-8 max-w-md mx-auto">
              Up to 40% off on our festive collection. Dress your little ones in the finest ethnic wear.
            </p>
            <Link
              to="/category/sale"
              className="inline-flex items-center justify-center bg-card text-foreground font-body font-semibold text-sm px-10 py-3.5 rounded-full hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
            >
              Shop the Sale
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;
