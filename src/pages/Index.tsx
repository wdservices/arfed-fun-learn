
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import EducationAR from "@/components/EducationAR";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <EducationAR />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
