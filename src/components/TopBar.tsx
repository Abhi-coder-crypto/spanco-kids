import { Truck, Phone, RotateCcw } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-foreground text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 text-xs font-body tracking-wide">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <RotateCcw className="h-3 w-3" />
            <span>Easy Returns</span>
          </a>
          <a href="#" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <Truck className="h-3 w-3" />
            <span>Track Order</span>
          </a>
        </div>
        <p className="hidden md:block text-xs opacity-70">
          Free Shipping on Orders Above ₹999
        </p>
        <a href="#" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
          <Phone className="h-3 w-3" />
          <span>Support</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
