import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const Kitchens = () => {
  const [kitchens, setKitchens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchKitchens();
  }, []);

  const fetchKitchens = async (query = "") => {
    setLoading(true);
    try {
      const params = query ? { search: query } : {};
      const { data } = await api.get("/kitchens", { params });
      setKitchens(data.kitchens);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchKitchens(search);
  };

  const clearSearch = () => {
    setSearch("");
    fetchKitchens();
  };

  return (
    <div className="page-wrapper relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-10">
        {/* Header */}
        <div className="mb-10 animate-fade-in-up">
          <span className="section-label mb-4 inline-block">🏪 Discover</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-3 tracking-tight">
            Explore Kitchens
          </h1>
          <p className="text-white/40 max-w-lg">
            Find the best cloud kitchens near you and order fresh, chef-crafted meals.
          </p>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mb-10 animate-fade-in-up delay-100"
        >
          <div className="flex gap-3 max-w-xl">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                id="kitchen-search"
                type="text"
                placeholder="Search kitchens by name or cuisine…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-dark !pl-11 !py-4 !rounded-2xl"
              />
              {search && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
            <button type="submit" className="btn-primary !px-7 !rounded-2xl !py-4">
              Search
            </button>
          </div>
        </form>

        {/* Kitchen Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <div className="spinner" />
            <p className="text-white/30 text-sm">Loading kitchens…</p>
          </div>
        ) : kitchens.length === 0 ? (
          <div className="text-center py-32 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white/60 mb-2">No kitchens found</h3>
            <p className="text-white/30 text-sm mb-6">Try a different search or browse all kitchens</p>
            <button onClick={clearSearch} className="btn-ghost !px-8">
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {kitchens.map((kitchen, idx) => (
              <Link
                key={kitchen._id}
                to={`/kitchens/${kitchen._id}`}
                className="card-premium group overflow-hidden block"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                {/* Kitchen Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={kitchen.image?.url || `https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60`}
                    alt={kitchen.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60";
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Rating badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-white text-xs font-semibold">{kitchen.rating || "4.5"}</span>
                  </div>

                  {/* Delivery info */}
                  <div className="absolute bottom-3 left-3">
                    <span className={`badge text-[10px] ${kitchen.deliveryCharge === 0 ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-white/10 text-white/70"}`}>
                      {kitchen.deliveryCharge === 0 ? "FREE DELIVERY" : `₹${kitchen.deliveryCharge} delivery`}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                      {kitchen.name}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0 text-white/40 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {kitchen.deliveryTime} min
                    </div>
                  </div>
                  <p className="text-white/40 text-sm mb-4 leading-relaxed line-clamp-1">
                    {kitchen.cuisine?.join(" · ")}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-xs text-white/30 font-medium">View Menu</span>
                    <div className="w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Kitchens;