const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Browse Kitchens",
    description:
      "Explore a curated list of cloud kitchens near you. Filter by cuisine, rating, or delivery time.",
  },
  {
    number: "02",
    icon: "🛒",
    title: "Pick Your Meal",
    description:
      "Choose from starters, mains, desserts, and beverages. Mix and match from your favourite kitchen.",
  },
  {
    number: "03",
    icon: "💳",
    title: "Place & Pay",
    description:
      "Checkout securely with UPI, card, or Cash on Delivery. No hidden charges.",
  },
  {
    number: "04",
    icon: "🚴",
    title: "Get It Delivered",
    description:
      "Track your order in real-time. Fresh food arrives at your door in 30 minutes or less.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            How It Works
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            From craving to doorstep in four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-orange-500/40 to-transparent z-0" />
              )}
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 hover:bg-white/8 transition-all duration-300">
                <span className="text-orange-500/40 text-5xl font-bold absolute top-4 right-5 select-none">
                  {step.number}
                </span>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
