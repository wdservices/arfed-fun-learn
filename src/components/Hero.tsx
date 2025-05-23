
import { Button } from "@/components/ui/button";
import { Play, Smartphone, Brain, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                Making Education Fun
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                <span className="font-semibold text-pink-300">ARFed is revolutionizing learning—one playful moment at a time.</span> Our browser-based platform combines stunning 3D AR visuals with an AI-powered chatbot, so students can <span className="text-yellow-300 font-medium">see</span>, <span className="text-green-300 font-medium">touch</span>, and <span className="text-cyan-300 font-medium">ask questions</span> about any topic—right from their device.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Brain className="text-pink-400" size={24} />
                <span className="text-sm font-medium">AI Chat Tutor</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Zap className="text-yellow-400" size={24} />
                <span className="text-sm font-medium">3D AR Models</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Smartphone className="text-cyan-400" size={24} />
                <span className="text-sm font-medium">Web & Mobile</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                <Play className="mr-2" size={20} />
                Download on Google Play
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-200">
                Subscribe for Web Access
              </Button>
            </div>
          </div>

          {/* Right Content - AR Visualization */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Student using AR education technology"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating AR elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                3D Biology Cell
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce delay-300">
                AI Tutor Ready
              </div>
            </div>
            
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
