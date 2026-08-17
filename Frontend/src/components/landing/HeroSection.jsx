import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, MapPin, ShieldCheck } from "lucide-react";

const badges = [
  { icon: <Star size={16} className="text-[#FF5722]" />, text: "4.8 / 5 Rating" },
  { icon: <Clock size={16} className="text-[#FF5722]" />, text: "30-min Delivery" },
  { icon: <MapPin size={16} className="text-[#FF5722]" />, text: "50+ Kitchens" },
  { icon: <ShieldCheck size={16} className="text-[#FF5722]" />, text: "Safe & Hygienic" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-transparent">
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF5722] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-[#E63946] rounded-full blur-[100px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-5 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse inline-block" />
            <span className="text-[#FF5722] text-xs font-bold tracking-widest uppercase">
              Fresh · Local · Delivered
            </span>
          </div>

          <h1 className="landing-heading text-5xl sm:text-6xl lg:text-7xl mb-6 animate-fade-in-up">
            Savor the Flavor,<br />
            Delivered to Your <span className="text-[#FF5722]">Nest</span>
          </h1>

          <p className="landing-text text-lg sm:text-xl mb-10 max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-100">
            Order from the best cloud kitchens in your city. Chef-crafted meals prepared fresh and delivered to your door in under{" "}
            <span className="font-semibold text-[#F8F8F8]">30 minutes</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up delay-200">
            <Link to="/kitchens" className="landing-btn-primary animate-pulse-btn">
              Order Now
              <ArrowRight size={18} />
            </Link>
            <a href="#how-it-works" className="landing-btn-ghost">
              How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-fade-in-up delay-300">
            {badges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 landing-glass px-4 py-2 rounded-full border border-white/10 hover:border-[#FF5722]/30 transition-colors duration-300 bg-[#080808]/60"
              >
                {b.icon}
                <span className="text-sm font-semibold text-[#A0A0A0]">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-xl mx-auto animate-fade-in delay-200">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/10 border-4 border-[#1A1A1A] animate-landing-float">
            <img 
              src="/images/landing/hero.jpg" 
              alt="Gourmet Meal" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Floating UI Element */}
          <div className="absolute -bottom-6 -left-6 landing-glass bg-[#1A1A1A]/90 p-4 rounded-2xl flex items-center gap-4 shadow-xl border border-white/10 animate-landing-float" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <div>
              <p className="text-xs text-[#8E8E8E] font-semibold uppercase">Fresh Ingredients</p>
              <p className="text-sm font-bold text-[#F8F8F8]">Farm to Table</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
