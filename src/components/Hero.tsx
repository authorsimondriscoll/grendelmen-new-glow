import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-dragon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Epic fantasy dragon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <p className="text-primary text-sm font-semibold tracking-wider">EPIC FANTASY & SCI-FI</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold leading-tight">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Get Inked!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in worlds of adventure, mystery, and heroism. 
            Discover epic tales from the Dragon Island Chronicles and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="gap-2 text-lg px-8 bg-gradient-accent hover:shadow-warm transition-all">
              Explore Books
              <BookOpen className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Dragon Island Chronicles
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
