import { Link } from "react-router-dom";

const featured = [
  {
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato-butter gravy. Served with garlic naan.",
    price: "₹279",
    tag: "Non-Veg",
    tagColor: "bg-red-500/10 text-red-400 border-red-500/20",
    emoji: "🍛",
    gradient: "from-red-500/10 to-orange-500/5",
  },
  {
    name: "Paneer Tikka Masala",
    description: "Smoky grilled paneer cubes in a spiced onion-tomato masala. Pure comfort food.",
    price: "₹229",
    tag: "Veg",
    tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
    emoji: "🧀",
    gradient: "from-green-500/10 to-emerald-500/5",
  },
  {
    name: "Margherita Pizza",
    description: "Classic wood-fired pizza with fresh mozzarella, tomato sauce, and basil.",
    price: "₹249",
    tag: "Veg",
    tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
    emoji: "🍕",
    gradient: "from-yellow-500/10 to-amber-500/5",
  },
  {
    name: "Grilled Chicken Bowl",
    description: "Herb-marinated grilled chicken over seasoned rice with roasted vegetables.",
    price: "₹319",
    tag: "Non-Veg",
    tagColor: "bg-red-500/10 text-red-400 border-red-500/20",
    emoji: "🥗",
    gradient: "from-orange-500/10 to-red-500/5",
  },
  {
    name: "Masala Dosa",
    description: "Crispy golden dosa stuffed with spiced potato filling. Served with sambar & chutney.",
    price: "₹149",
    tag: "Veg",
    tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
    emoji: "🥞",
    gradient: "from-amber-500/10 to-yellow-500/5",
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten centre. Served with vanilla ice cream.",
    price: "₹179",
    tag: "Dessert",
    tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    emoji: "🍫",
    gradient: "from-purple-500/10 to-pink-500/5",
  },
];

const MenuPreview = () => {
  return (
    <section id="menu" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-orange-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-block">What's Cooking</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Popular Dishes
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-lg">
            A taste of what's waiting for you across our kitchens.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((item) => (
            <div
              key={item.name}
              className={`group relative rounded-3xl bg-gradient-to-br ${item.gradient} border border-white/6 p-6 hover:border-orange-500/20 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 cursor-pointer`}
            >
              {/* Emoji */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.emoji}
              </div>

              {/* Header row */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                <span className={`badge border text-[10px] shrink-0 ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>

              <p className="text-white/40 text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Price & Order */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-orange-400">{item.price}</span>
                <Link
                  to="/kitchens"
                  className="flex items-center gap-1.5 text-sm text-white/40 hover:text-orange-400 transition-colors font-medium border border-white/10 hover:border-orange-500/30 px-4 py-2 rounded-xl"
                >
                  Order
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/kitchens"
            className="btn-ghost !px-10 !py-4 !text-base border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
          >
            Browse All Kitchens
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
