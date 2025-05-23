
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl">ARFed</div>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-cyan-300 transition-colors">Home</a>
            <a href="/features" className="text-white hover:text-cyan-300 transition-colors">Features</a>
            <a href="#pricing" className="text-white hover:text-cyan-300 transition-colors">Pricing</a>
            <a href="#" className="text-white hover:text-cyan-300 transition-colors">About Us</a>
            <a href="#" className="text-white hover:text-cyan-300 transition-colors">Contact Us</a>
            <a href="#" className="text-white hover:text-cyan-300 transition-colors">Book a Demo</a>
          </div>
          <Button variant="outline" className="hidden md:flex border border-white text-white hover:bg-white/10">
            Login
          </Button>
        </div>
        
        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-800/95 backdrop-blur-sm mt-4 py-4 px-2 rounded-lg">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-white hover:text-cyan-300 transition-colors px-3 py-2">Home</a>
              <a href="/features" className="text-white hover:text-cyan-300 transition-colors px-3 py-2">Features</a>
              <a href="#pricing" className="text-white hover:text-cyan-300 transition-colors px-3 py-2">Pricing</a>
              <a href="#" className="text-white hover:text-cyan-300 transition-colors px-3 py-2">About Us</a>
              <a href="#" className="text-white hover:text-cyan-300 transition-colors px-3 py-2">Contact Us</a>
              <a href="#" className="text-white hover:text-cyan-300 transition-colors px-3 py-2">Book a Demo</a>
              <Button variant="outline" className="border border-white text-white hover:bg-white/10 w-full">
                Login
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
