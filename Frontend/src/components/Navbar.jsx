import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../redux/slices/authSlice.js";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();
  const cartItemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-white/5"
          : "bg-black/70 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Meals Nest Logo" className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-shadow duration-300" />
          <span className="text-xl font-bold text-white tracking-tight">
            Meals<span className="text-orange-400">Nest</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/kitchens"
            className={`nav-link ${isActive("/kitchens") ? "!text-orange-400" : ""}`}
          >
            Kitchens
          </Link>
          {user && (
            <>
              <Link
                to="/my-orders"
                className={`nav-link ${isActive("/my-orders") ? "!text-orange-400" : ""}`}
              >
                My Orders
              </Link>
              <Link
                to="/profile"
                className={`nav-link ${isActive("/profile") ? "!text-orange-400" : ""}`}
              >
                Profile
              </Link>
            </>
          )}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              {/* Cart */}
              <Link
                to="/cart"
                className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/60 group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] font-bold w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40 animate-pulse-glow">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* User chip */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-xs font-bold">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm text-white/70 font-medium">{user.username}</span>
              </div>

              {user.role === "admin" && (
                <Link
                  to="/admin"
                  className="text-sm font-semibold text-orange-400 hover:text-orange-300 px-3 py-1.5 rounded-lg border border-orange-500/25 hover:border-orange-500/50 bg-orange-500/5 hover:bg-orange-500/10 transition-all duration-300"
                >
                  Admin
                </Link>
              )}

              <button
                onClick={() => dispatch(logout())}
                className="flex items-center gap-1.5 text-sm font-medium text-red-400/80 hover:text-red-400 px-3 py-1.5 rounded-lg border border-red-500/15 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-white/60 hover:text-white transition-colors px-4 py-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn-primary !py-2 !px-5 !text-sm"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`h-0.5 bg-white/70 rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-white/70 rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white/70 rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-2 border-t border-white/5 flex flex-col gap-1">
          <Link to="/kitchens" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
            🏪 Kitchens
          </Link>
          {user ? (
            <>
              <Link to="/my-orders" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
                📦 My Orders
              </Link>
              <Link to="/cart" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
                🛒 Cart {cartItemCount > 0 && <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">{cartItemCount}</span>}
              </Link>
              <Link to="/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
                👤 Profile
              </Link>
              {user.role === "admin" && (
                <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-orange-400 hover:bg-orange-500/10 transition-all text-sm font-medium">
                  ⚙️ Admin
                </Link>
              )}
              <div className="pt-2 mt-1 border-t border-white/5">
                <button
                  onClick={() => dispatch(logout())}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400/80 hover:text-red-400 hover:bg-red-500/5 transition-all text-sm font-medium"
                >
                  🚪 Logout
                </button>
              </div>
            </>
          ) : (
            <div className="flex gap-3 pt-2 mt-1 border-t border-white/5">
              <Link to="/login" className="flex-1 text-center py-2.5 rounded-xl border border-white/15 text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
                Login
              </Link>
              <Link to="/register" className="flex-1 text-center py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition-all text-sm font-medium">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;