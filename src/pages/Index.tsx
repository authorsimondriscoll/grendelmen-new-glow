import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import DragonIslandSeries from "@/components/DragonIslandSeries";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <FeaturedBooks />
        <DragonIslandSeries />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
