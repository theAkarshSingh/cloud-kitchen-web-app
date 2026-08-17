import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import { addToCart } from "../redux/slices/cartSlice";

const categoryConfig = {
  "": { label: "All", emoji: "🍽️" },
  veg: { label: "Veg", emoji: "🥬" },
  "non-veg": { label: "Non-Veg", emoji: "🍗" },
  egg: { label: "Egg", emoji: "🥚" },
  vegan: { label: "Vegan", emoji: "🌱" },
};

const KitchenMenu = () => {
  const { kitchenId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const [kitchen, setKitchen] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [kitchenRes, menuRes] = await Promise.all([
        api.get(`/kitchens/${kitchenId}`),
        api.get(`/menu/kitchen/${kitchenId}`, {
          params: category ? { category } : {},
        }),
      ]);
      setKitchen(kitchenRes.data.kitchen);
      setMenuItems(menuRes.data.menuItems);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [kitchenId, category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        menuItem: item._id,
        name: item.name,
        price: item.price,
        kitchenId,
        kitchenName: kitchen.name,
      }),
    );
    toast.success(`${item.name} added to cart! 🛒`);
  };

  if (loading) {
    return (
      <div className="page-wrapper flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mx-auto mb-4" />
          <p className="text-white/30 text-sm">Loading menu…</p>
        </div>
      </div>
    );
  }

  if (!kitchen) {
    return (
      <div className="page-wrapper flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h3 className="text-xl font-semibold text-white/60">Kitchen not found</h3>
        </div>
      </div>
    );
  }

  const categories = Object.keys(categoryConfig);
  const cartItemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const getCategoryColor = (cat) => {
    const colors = {
      veg: "bg-green-500/10 text-green-400 border-green-500/20",
      vegan: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      egg: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      "non-veg": "bg-red-500/10 text-red-400 border-red-500/20",
    };
    return colors[cat] || "bg-white/10 text-white/50 border-white/10";
  };

  return (
    <div className="page-wrapper relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-8">
        {/* Kitchen Header */}
        <div className="glass rounded-3xl overflow-hidden mb-8 animate-fade-in-up">
          <div className="relative h-52 md:h-64 overflow-hidden">
            <img
              src={kitchen.image?.url || "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&auto=format&fit=crop&q=80"}
              alt={kitchen.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&auto=format&fit=crop&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Kitchen info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/20 shrink-0 shadow-xl">
                <img
                  src={kitchen.image?.url || "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=200&auto=format&fit=crop"}
                  alt={kitchen.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=200&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
                  {kitchen.name}
                </h1>
                <p className="text-white/60 text-sm mb-3">{kitchen.cuisine?.join(" · ")}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-sm text-white/70 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-yellow-400">★</span> {kitchen.rating || "4.5"}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-white/70 bg-white/10 px-3 py-1.5 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {kitchen.deliveryTime} min
                  </span>
                  <span className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full ${kitchen.deliveryCharge === 0 ? "bg-green-500/15 text-green-400" : "bg-white/10 text-white/70"}`}>
                    {kitchen.deliveryCharge === 0 ? "✓ Free Delivery" : `₹${kitchen.deliveryCharge} delivery`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 flex-wrap animate-fade-in-up delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`category-pill ${category === cat ? "active" : ""}`}
            >
              {categoryConfig[cat]?.emoji} {categoryConfig[cat]?.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {menuItems.length === 0 ? (
          <div className="text-center py-24 animate-fade-in">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-white/50">No items in this category</h3>
            <button onClick={() => setCategory("")} className="btn-ghost mt-6 !px-8">
              Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in delay-100">
            {menuItems.map((item) => {
              const inCart = items.find((i) => i.menuItem === item._id);
              return (
                <div
                  key={item._id}
                  className="card-premium p-5 flex gap-4 items-start group"
                >
                  {/* Item Image */}
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 bg-white/5">
                    <img
                      src={item.image?.url || `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&auto=format&fit=crop&q=80`}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&auto=format&fit=crop&q=80";
                      }}
                    />
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-white text-base leading-tight">{item.name}</h3>
                      <span className={`badge text-[10px] shrink-0 border ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-extrabold text-orange-400">
                        ₹{item.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`flex items-center gap-1.5 text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-300 ${
                          inCart
                            ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            : "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20"
                        }`}
                      >
                        {inCart ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            Added
                          </>
                        ) : (
                          <>
                            <span className="text-base">+</span> Add
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      {cartItemCount > 0 && (
        <Link
          to="/cart"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white pl-5 pr-6 py-4 rounded-2xl shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 transition-all duration-300 animate-fade-in-up"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-white text-orange-500 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartItemCount}
            </span>
          </div>
          <div>
            <div className="text-xs opacity-80 leading-none mb-0.5">{cartItemCount} item{cartItemCount !== 1 ? "s" : ""}</div>
            <div className="text-sm font-bold leading-none">View Cart</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default KitchenMenu;