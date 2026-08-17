import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: "🍽️",
      title: "Wide Variety",
      description: "Veg, Non-Veg, Vegan — choose from multiple cuisines across the best cloud kitchens.",
      color: "from-orange-500/15 to-amber-500/5",
      border: "border-orange-500/20",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less, tracked in real-time.",
      color: "from-purple-500/15 to-violet-500/5",
      border: "border-purple-500/20",
    },
    {
      icon: "💳",
      title: "Easy Payments",
      description: "Pay via UPI, Card, or Cash on Delivery — no hidden charges, ever.",
      color: "from-emerald-500/15 to-green-500/5",
      border: "border-emerald-500/20",
    },
  ];

  const stats = [
    { value: "50+", label: "Cloud Kitchens" },
    { value: "4.8★", label: "Average Rating" },
    { value: "30min", label: "Avg Delivery" },
    { value: "10K+", label: "Happy Orders" },
  ];

  return (
    <div className="page-wrapper relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-amber-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-20 pb-28">
        {/* Hero Section */}
        <div className="text-center mb-24 animate-fade-in-up">
          <span className="section-label mb-6 inline-block">
            ✨ Cloud Kitchen Delivery Platform
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mt-6 mb-6 tracking-tight">
            Fresh Food,{" "}
            <span className="gradient-text">Delivered</span>
            <br />
            <span className="text-white/30">Lightning</span>{" "}
            <span className="text-white">Fast</span>
          </h1>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Order from the best cloud kitchens in your city. Chef-crafted meals prepared fresh and delivered to your doorstep in under 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kitchens" className="btn-primary !py-4 !px-10 !text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Explore Kitchens
            </Link>
            <Link to="/register" className="btn-ghost !py-4 !px-10 !text-base">
              Create Free Account
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 animate-fade-in-up delay-200">
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center hover:border-orange-500/20 transition-colors duration-300">
              <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-white/40 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-300">
          {features.map((f, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${f.color} border ${f.border} p-8 group transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/15 to-amber-600/5 border border-orange-500/20 p-12 text-center animate-fade-in-up delay-400">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Hungry? Let's fix that. 🍕
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Browse kitchens, pick your favourites, and get restaurant-quality food at your door.
            </p>
            <Link to="/kitchens" className="btn-primary !py-4 !px-12 !text-base">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;