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
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 hover:text-orange-400 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <span
          className={`text-orange-400 text-xl transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-gray-400 text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Got Questions?
          </h2>
          <p className="text-gray-400 mt-4">
            Everything you need to know about CloudKitchen.
          </p>
        </div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
