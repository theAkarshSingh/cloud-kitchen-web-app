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
    <section id="plans" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Meal Plans</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Flexible options for every appetite and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlight
                  ? "bg-orange-500 border-orange-400 shadow-2xl shadow-orange-500/30 scale-105"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block bg-white text-orange-500 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm pb-1 ${plan.highlight ? "text-orange-100" : "text-gray-400"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-orange-100" : "text-gray-400"}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={plan.highlight ? "text-white" : "text-orange-400"}>✓</span>
                    <span className={plan.highlight ? "text-orange-50" : "text-gray-300"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/kitchens"
                className={`block text-center py-3 rounded-full font-semibold text-sm transition ${
                  plan.highlight
                    ? "bg-white text-orange-500 hover:bg-orange-50"
                    : "border border-white/20 hover:border-orange-400 hover:text-orange-400 text-white"
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
