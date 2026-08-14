import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-orange-400">
              CloudKitchen
            </Link>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Restaurant-quality food from the best cloud kitchens, delivered
              fresh to your door.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-orange-400 hover:text-orange-400 transition text-sm"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-orange-400 hover:text-orange-400 transition text-sm"
              >
                📷
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-orange-400 hover:text-orange-400 transition text-sm"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/kitchens" className="hover:text-white transition">Browse Kitchens</Link></li>
              <li><Link to="/my-orders" className="hover:text-white transition">My Orders</Link></li>
              <li><Link to="/cart" className="hover:text-white transition">Cart</Link></li>
              <li><Link to="/profile" className="hover:text-white transition">Profile</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#plans" className="hover:text-white transition">Meal Plans</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {year} CloudKitchen. All rights reserved.</p>
          <p>Made with ❤️ for food lovers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
