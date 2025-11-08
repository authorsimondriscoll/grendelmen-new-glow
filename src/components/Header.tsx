import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-cinzel font-bold bg-gradient-accent bg-clip-text text-transparent">
            Grendelmen Publishing
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#books" className="text-foreground hover:text-primary transition-colors">
            Books
          </a>
          <a href="#series" className="text-foreground hover:text-primary transition-colors">
            Series
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <Button variant="outline" size="sm" className="gap-2">
            <ShoppingCart className="w-4 h-4" />
            Shop
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#books" className="text-foreground hover:text-primary transition-colors">
              Books
            </a>
            <a href="#series" className="text-foreground hover:text-primary transition-colors">
              Series
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button variant="outline" size="sm" className="gap-2 w-full">
              <ShoppingCart className="w-4 h-4" />
              Shop
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
