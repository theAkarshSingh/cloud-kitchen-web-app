import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          ? "bg-black/95 backdrop-blur-2xl shadow-2xl shadow-black/50 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-shadow duration-300">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Meals<span className="text-orange-400">Nest</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#how-it-works", label: "How It Works" },
            { href: "#menu", label: "Menu" },
            { href: "#plans", label: "Meal Plans" },
            { href: "#faq", label: "FAQ" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-white/50 hover:text-white transition-colors font-medium px-4 py-2"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="btn-primary !py-2.5 !px-6 !text-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`h-0.5 bg-white/70 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-white/70 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white/70 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/95 backdrop-blur-xl border-t border-white/5 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {[
            { href: "#how-it-works", label: "How It Works" },
            { href: "#menu", label: "Menu" },
            { href: "#plans", label: "Meal Plans" },
            { href: "#faq", label: "FAQ" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-white text-sm font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
            >
              {label}
            </a>
          ))}
          <div className="flex gap-3 pt-3 mt-1 border-t border-white/5">
            <Link to="/login" className="flex-1 text-center py-2.5 rounded-xl border border-white/15 text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
              Login
            </Link>
            <Link to="/register" className="flex-1 text-center py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition-all text-sm font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
