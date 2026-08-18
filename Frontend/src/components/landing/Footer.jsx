import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 py-20">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 group mb-5 w-fit">
              <img src={logo} alt="Meals Nest Logo" className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-orange-500/30" />
              <span className="text-xl font-bold text-white">
                Meals<span className="text-orange-400">Nest</span>
              </span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed mb-5">
              Restaurant-quality food from the best cloud kitchens, delivered fresh to your door.
            </p>
            {/* Socials */}
            <div className="flex gap-2">
              {[
                { label: "Twitter", symbol: "𝕏" },
                { label: "Instagram", symbol: "📷" },
                { label: "LinkedIn", symbol: "in" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center text-white/30 hover:border-orange-500/40 hover:text-orange-400 hover:bg-orange-500/8 transition-all duration-300 text-sm"
                >
                  {s.symbol}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              Platform
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/kitchens", label: "Browse Kitchens" },
                { to: "/my-orders", label: "My Orders" },
                { to: "/cart", label: "Cart" },
                { to: "/profile", label: "Profile" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-white/30 hover:text-white transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#plans", label: "Meal Plans" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-white/30 hover:text-white transition-colors duration-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"].map((label) => (
                <li key={label}>
                  <a href="#" className="text-white/30 hover:text-white transition-colors duration-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {year} MealsNest. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Made with ❤️ for food lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
