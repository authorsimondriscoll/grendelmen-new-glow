import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! Check your inbox for exclusive deals.");
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-semibold tracking-wider">EXCLUSIVE DEALS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold">
              Join Our Reader's Circle
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Subscribe for insider news, upcoming releases, and reader-only deals
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border-border"
              required
            />
            <Button type="submit" size="lg" className="bg-gradient-accent hover:shadow-warm transition-all">
              Sign Me Up!
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
