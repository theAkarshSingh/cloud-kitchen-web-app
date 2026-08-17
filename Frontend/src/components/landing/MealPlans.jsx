import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "₹199",
    period: "per meal",
    description: "Perfect for solo diners looking for a quick, tasty bite.",
    features: [
      "1 main course",
      "Choice of veg or non-veg",
      "Free delivery on orders above ₹299",
      "Standard 30-min delivery",
    ],
    cta: "Order à la carte",
    highlight: false,
  },
  {
    name: "Daily",
    price: "₹999",
    period: "per week",
    description: "A week of hassle-free home-cooked style meals.",
    features: [
      "2 meals per day (lunch + dinner)",
      "Rotating weekly menu",
      "Free delivery every day",
      "Priority support",
    ],
    cta: "Start Weekly Plan",
    highlight: true,
  },
  {
    name: "Family",
    price: "₹2,499",
    period: "per week",
    description: "Feed the whole family with generous portions and variety.",
    features: [
      "4 meals per day",
      "Serves 4 people",
      "Customisable cuisine preferences",
      "Dedicated account manager",
    ],
    cta: "Start Family Plan",
    highlight: false,
  },
];

const MealPlans = () => {
  return (
    <section id="plans" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-block">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Meal Plans
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-lg">
            Flexible options for every appetite and budget.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-orange-500 to-orange-700 border-orange-400/50 shadow-2xl shadow-orange-500/30 scale-105 hover:scale-[1.07]"
                  : "glass hover:border-orange-500/20 hover:scale-[1.02]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-orange-500 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-extrabold text-white mb-1">{plan.name}</h3>
              <div className="flex items-end gap-1.5 mb-2">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className={`text-sm pb-1 ${plan.highlight ? "text-orange-100" : "text-white/35"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 leading-relaxed ${plan.highlight ? "text-orange-100" : "text-white/40"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5 ${
                        plan.highlight
                          ? "bg-white/20 text-white"
                          : "bg-orange-500/15 text-orange-400"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={plan.highlight ? "text-orange-50" : "text-white/55"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/kitchens"
                className={`block text-center py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-orange-500 hover:bg-orange-50 shadow-lg"
                    : "border border-white/15 hover:border-orange-500/40 text-white hover:bg-orange-500/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealPlans;
