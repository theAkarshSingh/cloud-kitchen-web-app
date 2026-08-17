import { Link } from "react-router-dom";

const badges = [
  { icon: "⭐", text: "4.8 / 5 Rating" },
  { icon: "⚡", text: "30-min Delivery" },
  { icon: "🏪", text: "50+ Kitchens" },
  { icon: "🔒", text: "Safe & Hygienic" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-600/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-12">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 rounded-full px-5 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse inline-block" />
          <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">
            Fresh · Local · Delivered
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8 animate-fade-in-up">
          Restaurant-Quality
          <br />
          <span className="gradient-text">Food at Home</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-100">
          Order from the best cloud kitchens in your city. Chef-crafted meals prepared fresh and delivered to your door in under{" "}
          <span className="text-white/70 font-semibold">30 minutes</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-200">
          <Link to="/kitchens" className="btn-primary !py-4 !px-10 !text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Order Now
          </Link>
          <a
            href="#how-it-works"
            className="btn-ghost !py-4 !px-10 !text-base"
          >
            How It Works ↓
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up delay-300">
          {badges.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 glass px-5 py-2.5 rounded-full hover:border-orange-500/20 transition-colors duration-300"
            >
              <span className="text-lg">{b.icon}</span>
              <span className="text-sm text-white/50 font-medium">{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
