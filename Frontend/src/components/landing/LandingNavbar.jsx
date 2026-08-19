import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const LandingNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "landing-glass-nav shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Meals Nest Logo" className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-shadow duration-300" />
          <span className="text-2xl font-bold text-[#F8F8F8] tracking-tight font-['Outfit']">
            Meals<span className="text-[#FF5722]">Nest</span>
          </span>
        </Link>

        {/* Center: Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-center px-8">
          <div className="landing-search-pill w-full max-w-md">
            <Search size={18} className="text-[#8E8E8E]" />
            <input 
              type="text" 
              placeholder="Search for delicious meals..." 
              className="landing-search-input"
            />
          </div>
        </div>

        {/* Desktop Links & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#menu" className="text-sm font-semibold text-[#A0A0A0] hover:text-[#FF5722] transition-colors">Menu</a>
          <a href="#how-it-works" className="text-sm font-semibold text-[#A0A0A0] hover:text-[#FF5722] transition-colors">How It Works</a>
          
          <div className="h-6 w-px bg-white/20 mx-2"></div>
          
          <div className="flex items-center gap-4">
            <button className="text-[#A0A0A0] hover:text-[#FF5722] transition-colors relative">
              <ShoppingCart size={22} />
            </button>
            <Link to="/login" className="text-[#A0A0A0] hover:text-[#FF5722] transition-colors">
              <User size={22} />
            </Link>
            <Link to="/register" className="landing-btn-primary !py-2 !px-5 !text-sm">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button className="text-[#A0A0A0] relative">
            <ShoppingCart size={22} />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#F8F8F8]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#080808]/95 backdrop-blur-xl border-t border-white/10 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          <div className="landing-search-pill !w-full">
            <Search size={18} className="text-[#8E8E8E]" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="landing-search-input"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <a href="#menu" onClick={() => setMenuOpen(false)} className="text-[#F8F8F8] font-medium py-2 border-b border-white/5">Menu</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-[#F8F8F8] font-medium py-2 border-b border-white/5">How It Works</a>
          </div>
          
          <div className="flex gap-3 pt-2">
            <Link to="/login" className="flex-1 text-center py-2.5 rounded-xl border border-white/10 text-[#F8F8F8] hover:bg-white/5 font-medium transition-colors">
              Login
            </Link>
            <Link to="/register" className="flex-1 text-center py-2.5 rounded-xl bg-[#FF5722] text-white font-medium hover:bg-[#f4511e] transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
