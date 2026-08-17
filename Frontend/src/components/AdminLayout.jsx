import { useSelector } from "react-redux";
import { Navigate, NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user || user.role !== "admin") return <Navigate to="/" />;

  const links = [
    { to: "/admin", label: "Dashboard", icon: "📊" },
    { to: "/admin/kitchen", label: "Kitchen", icon: "🏪" },
    { to: "/admin/menu", label: "Menu", icon: "📋" },
    { to: "/admin/orders", label: "Orders", icon: "📦" },
  ];

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-[#080808]">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="p-5 sticky top-[64px]">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/20">
              A
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Admin Panel</h2>
              <p className="text-[10px] text-orange-400 font-medium">MealsNest</p>
            </div>
          </div>
          <nav className="space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/admin"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-orange-500/15 text-orange-400 border border-orange-500/20"
                      : "text-white/45 hover:text-white/80 hover:bg-white/5"
                  }`
                }
              >
                <span className="text-base">{link.icon}</span>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;