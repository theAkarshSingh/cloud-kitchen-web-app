const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Browse Kitchens",
    description: "Explore a curated list of cloud kitchens near you. Filter by cuisine, rating, or delivery time.",
    color: "from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/15",
    iconBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    number: "02",
    icon: "🛒",
    title: "Pick Your Meal",
    description: "Choose from starters, mains, desserts, and beverages. Mix and match from your favourite kitchen.",
    color: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/15",
    iconBg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    number: "03",
    icon: "💳",
    title: "Place & Pay",
    description: "Checkout securely with UPI, card, or Cash on Delivery. No hidden charges.",
    color: "from-green-500/10 to-green-500/5",
    border: "border-green-500/15",
    iconBg: "bg-green-500/10 border-green-500/20",
  },
  {
    number: "04",
    icon: "🚴",
    title: "Get It Delivered",
    description: "Track your order in real-time. Fresh food arrives at your door in 30 minutes or less.",
    color: "from-orange-500/10 to-orange-500/5",
    border: "border-orange-500/15",
    iconBg: "bg-orange-500/10 border-orange-500/20",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-block">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-lg leading-relaxed">
            From craving to doorstep in four easy steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%_-_12px)] w-full h-px z-0">
                  <div className="w-full h-full bg-gradient-to-r from-orange-500/30 to-transparent" />
                </div>
              )}

              <div
                className={`relative z-10 bg-gradient-to-br ${step.color} border ${step.border} rounded-3xl p-7 h-full group-hover:border-opacity-40 transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20`}
              >
                {/* Step number watermark */}
                <span className="absolute top-5 right-5 text-5xl font-black text-white/5 select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${step.iconBg} border flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
