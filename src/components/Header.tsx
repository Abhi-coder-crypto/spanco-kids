import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import TopBar from "./TopBar";
import MegaMenu from "./MegaMenu";
import { navigationItems } from "@/data/navigation";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <TopBar />

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Search */}
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <Search className="h-5 w-5 text-foreground" />
          </button>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-display text-2xl md:text-3xl font-bold tracking-wider text-foreground">
              SPANCO
            </h1>
            <p className="text-[9px] tracking-[0.3em] text-muted-foreground text-center uppercase">
              Kids Fashion
            </p>
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <User className="h-5 w-5 text-foreground" />
            </button>
            <Link to="#" className="p-2 hover:bg-muted rounded-full transition-colors relative">
              <Heart className="h-5 w-5 text-foreground" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
            <Link to="#" className="p-2 hover:bg-muted rounded-full transition-colors relative">
              <ShoppingBag className="h-5 w-5 text-foreground" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-0">
            {navigationItems.map((item) => (
              <li
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1.5 px-4 py-3 text-sm font-body font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-primary text-primary-foreground rounded-full leading-none">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>

                {item.megaMenu && activeMenu === item.title && (
                  <MegaMenu groups={item.megaMenu} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
