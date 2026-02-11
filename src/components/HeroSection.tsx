import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Dress Them",
    subtitle: "In Love",
    description: "Premium kids fashion crafted with care. Soft fabrics, elegant designs, and styles they'll love to wear.",
    ctaText: "Shop Best Sellers",
    ctaLink: "/category/best-seller",
    secondaryCtaText: "Festive Collection",
    secondaryCtaLink: "/category/festive"
  },
  {
    image: "/images/hero-2.jpg",
    title: "New Season",
    subtitle: "Playful Vibes",
    description: "Discover our latest collection designed for active kids. Style meets comfort in every stitch.",
    ctaText: "New Arrivals",
    ctaLink: "/category/new-arrivals",
    secondaryCtaText: "Explore More",
    secondaryCtaLink: "/category/all"
  },
  {
    image: "/images/hero-3.png",
    title: "Festive Joy",
    subtitle: "Celebrations",
    description: "Make every occasion special with our exclusive festive wear. Perfect for memories that last.",
    ctaText: "Shop Festive",
    ctaLink: "/category/festive",
    secondaryCtaText: "Sale Items",
    secondaryCtaLink: "/category/sale"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        {/* Text removed from hero image as requested */}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === i ? "bg-primary w-6" : "bg-primary/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
