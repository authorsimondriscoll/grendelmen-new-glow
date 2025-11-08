import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";

const DragonIslandSeries = () => {
  return (
    <section id="series" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wider">FEATURED SERIES</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold leading-tight">
              The Dragon Island Chronicles
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dive into an epic saga of adventure, betrayal, and redemption. Follow heroes as they 
              navigate treacherous waters, face mythical beasts, and uncover ancient secrets that 
              will determine the fate of their world.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <p className="text-foreground">
                  <span className="font-semibold">Multiple interconnected stories</span> spanning across different timelines
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <p className="text-foreground">
                  <span className="font-semibold">Rich world-building</span> with complex characters and cultures
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <p className="text-foreground">
                  <span className="font-semibold">Epic battles and political intrigue</span> that will keep you turning pages
                </p>
              </div>
            </div>

            <Button size="lg" className="gap-2 bg-gradient-warm hover:shadow-warm transition-all">
              Explore the Series
              <BookOpen className="w-5 h-5" />
            </Button>
          </div>

          <div className="relative animate-float">
            <Card className="overflow-hidden border-2 border-primary/20 bg-card shadow-glow">
              <img
                src="https://grendelmen.com/wp-content/uploads/2024/10/Escape-Front-Cover-Web-324x486.jpg"
                alt="Dragon Island Chronicles"
                className="w-full h-auto"
              />
            </Card>
            <div className="absolute -z-10 top-8 left-8 w-full h-full border-2 border-accent/30 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DragonIslandSeries;
