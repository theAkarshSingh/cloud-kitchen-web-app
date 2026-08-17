import { useState } from "react";

const faqs = [
  {
    q: "How fresh is the food?",
    a: "Every meal is prepared fresh on order. We don't pre-cook or reheat. Our kitchen partners follow strict hygiene standards and prepare your food only after you place an order.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders are delivered within 25–35 minutes depending on your location and the kitchen's current load. You can see estimated delivery time on each kitchen's page.",
  },
  {
    q: "Can I customise my order?",
    a: "Yes! You can leave special instructions at checkout (e.g. extra spicy, no onion). Kitchen owners review these before preparing your meal.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI, credit/debit cards, and Cash on Delivery. All online payments are processed securely via Razorpay.",
  },
  {
    q: "Can I cancel my order?",
    a: "You can cancel a 'Placed' or 'Confirmed' order from the My Orders page. Once the kitchen starts preparing your food, cancellations are no longer possible.",
  },
  {
    q: "How do I become a kitchen partner?",
    a: "Register an account, then contact us through the Contact section below. Our team will verify your kitchen and set up your admin profile, usually within 24 hours.",
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-orange-500/25 bg-orange-500/5"
          : "border-white/7 bg-white/2 hover:border-white/12"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
        aria-expanded={open}
      >
        <span className={`font-semibold text-sm md:text-base transition-colors ${open ? "text-orange-400" : "text-white/80"}`}>
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-orange-500 border-orange-500 rotate-45 text-white"
              : "border-white/15 text-white/40"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-7 pb-5 animate-fade-in">
          <p className="text-white/45 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-block">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Got Questions?
          </h2>
          <p className="text-white/40 text-lg">
            Everything you need to know about MealsNest.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
