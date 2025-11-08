import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const books = [
  {
    title: "Battle of the Breach",
    price: "$3.99 - $12.95",
    image: "https://grendelmen.com/wp-content/uploads/2025/09/Battle-of-the-Breach-Soon-324x486.jpg",
    badge: "Sale",
  },
  {
    title: "Conquest of Puji",
    price: "$5.95 - $17.95",
    image: "https://grendelmen.com/wp-content/uploads/2024/11/Conquest-of-Puji-Front-324x486.jpg",
  },
  {
    title: "Escape From Dragon Island",
    price: "$3.99 - $14.95",
    image: "https://grendelmen.com/wp-content/uploads/2024/10/Escape-Front-Cover-Web-324x486.jpg",
    badge: "Sale",
  },
  {
    title: "The Great Scarlet Reset",
    price: "$12.99 - $14.95",
    image: "https://grendelmen.com/wp-content/uploads/2021/12/The-Great-Scarlet-Reset-Front-Cover-web-324x486.jpg",
  },
];

const FeaturedBooks = () => {
  return (
    <section id="books" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold">
            Featured Books
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Embark on extraordinary journeys through our collection of epic tales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                {book.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {book.badge}
                  </div>
                )}
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button size="sm" className="gap-2 bg-gradient-accent">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-cinzel font-semibold group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-accent font-semibold">{book.price}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Books
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
