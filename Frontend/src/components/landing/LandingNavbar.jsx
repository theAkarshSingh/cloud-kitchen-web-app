import { useState } from "react";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-orange-400 tracking-tight">
          MealsNest
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
          <a href="#menu" className="hover:text-white transition">Menu</a>
          <a href="#plans" className="hover:text-white transition">Meal Plans</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-gray-300 hover:text-white transition px-4 py-2"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-sm bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition font-medium"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm text-gray-300">
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="hover:text-white">How It Works</a>
          <a href="#menu" onClick={() => setMenuOpen(false)} className="hover:text-white">Menu</a>
          <a href="#plans" onClick={() => setMenuOpen(false)} className="hover:text-white">Meal Plans</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-white">FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white">Contact</a>
          <div className="flex gap-3 pt-2 border-t border-white/10">
            <Link to="/login" className="flex-1 text-center border border-white/20 rounded-full py-2 hover:bg-white/10 transition">Login</Link>
            <Link to="/register" className="flex-1 text-center bg-orange-500 hover:bg-orange-600 rounded-full py-2 text-white transition">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
