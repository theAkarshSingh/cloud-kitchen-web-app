import { Link } from "react-router-dom";

const featured = [
  {
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato-butter gravy. Served with garlic naan.",
    price: "₹279",
    tag: "Non-Veg",
    tagColor: "bg-red-500/20 text-red-400",
    emoji: "🍛",
  },
  {
    name: "Paneer Tikka Masala",
    description: "Smoky grilled paneer cubes in a spiced onion-tomato masala. Pure comfort food.",
    price: "₹229",
    tag: "Veg",
    tagColor: "bg-green-500/20 text-green-400",
    emoji: "🧀",
  },
  {
    name: "Margherita Pizza",
    description: "Classic wood-fired pizza with fresh mozzarella, tomato sauce, and basil.",
    price: "₹249",
    tag: "Veg",
    tagColor: "bg-green-500/20 text-green-400",
    emoji: "🍕",
  },
  {
    name: "Grilled Chicken Bowl",
    description: "Herb-marinated grilled chicken over seasoned rice with roasted vegetables.",
    price: "₹319",
    tag: "Non-Veg",
    tagColor: "bg-red-500/20 text-red-400",
    emoji: "🥗",
  },
  {
    name: "Masala Dosa",
    description: "Crispy golden dosa stuffed with spiced potato filling. Served with sambar & chutney.",
    price: "₹149",
    tag: "Veg",
    tagColor: "bg-green-500/20 text-green-400",
    emoji: "🥞",
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten centre. Served with vanilla ice cream.",
    price: "₹179",
    tag: "Dessert",
    tagColor: "bg-yellow-500/20 text-yellow-400",
    emoji: "🍫",
  },
];

const MenuPreview = () => {
  return (
    <section id="menu" className="py-24 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
            What's Cooking
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Popular Dishes
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A taste of what's waiting for you across our kitchens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.emoji}
              </div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-orange-400">{item.price}</span>
                <Link
                  to="/kitchens"
                  className="text-sm text-gray-400 hover:text-orange-400 transition border border-white/10 hover:border-orange-500/40 px-3 py-1 rounded-full"
                >
                  Order →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/kitchens"
            className="inline-block border border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Browse All Kitchens
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
