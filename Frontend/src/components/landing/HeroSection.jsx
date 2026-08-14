import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-orange-500/30">
          Fresh · Local · Delivered
        </span>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Restaurant-Quality
          <br />
          <span className="text-orange-400">Food at Home</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Order from the best cloud kitchens in your city. Chef-crafted meals
          prepared fresh and delivered to your door in under 30 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/kitchens"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition shadow-lg shadow-orange-500/25"
          >
            Order Now
          </Link>
          <a
            href="#how-it-works"
            className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full text-lg font-medium transition"
          >
            How It Works ↓
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-lg">⭐</span>
            <span>4.8 / 5 average rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-lg">🚀</span>
            <span>30-min delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-lg">🏪</span>
            <span>50+ cloud kitchens</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400 text-lg">🔒</span>
            <span>Safe & hygienic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
