import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Plus, Check, ArrowRight } from "lucide-react";

const categories = ["All", "Healthy", "Comfort", "Vegan", "Desserts"];

const featured = [
  {
    id: 1,
    name: "Classic Cheese Pizza",
    description: "Authentic wood-fired pizza with rich tomato sauce, fresh mozzarella, and basil.",
    price: "₹299",
    rating: "4.9",
    image: "/images/landing/pizza.jpg",
    category: "Comfort"
  },
  {
    id: 2,
    name: "Mediterranean Salad",
    description: "Crisp greens, cherry tomatoes, olives, feta cheese, and olive oil drizzle.",
    price: "₹249",
    rating: "4.9",
    image: "/images/landing/salad.jpg",
    category: "Healthy"
  },
  {
    id: 3,
    name: "Truffle Mushroom Pasta",
    description: "Elegant fettuccine in a creamy truffle mushroom sauce with fresh parmesan.",
    price: "₹399",
    rating: "4.7",
    image: "/images/landing/pasta.jpg",
    category: "Comfort"
  },
  {
    id: 4,
    name: "Molten Lava Cake",
    description: "Decadent chocolate lava cake oozing with molten chocolate and vanilla ice cream.",
    price: "₹199",
    rating: "4.9",
    image: "/images/landing/dessert.jpg",
    category: "Desserts"
  }
];

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (e, id) => {
    e.preventDefault();
    setAddedItems({ ...addedItems, [id]: true });
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const filteredDishes = activeCategory === "All" 
    ? featured 
    : featured.filter(dish => dish.category === activeCategory || (activeCategory === "Vegan" && dish.category === "Healthy"));

  return (
    <section id="menu" className="py-24 relative overflow-hidden bg-transparent">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-[#FF5722] text-sm font-bold tracking-widest uppercase mb-3 inline-block">Our Menu</span>
            <h2 className="landing-heading text-4xl md:text-5xl mb-4 text-[#F8F8F8]">
              Trending Right Now
            </h2>
          </div>
          
          {/* Category Slider */}
          <div className="flex overflow-x-auto pb-4 pt-2 hide-scrollbar gap-3 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`landing-category-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDishes.map((item) => (
            <div key={item.id} className="landing-dish-card flex flex-col">
              
              <div className="landing-dish-img-wrapper">
                <img src={item.image} alt={item.name} className="landing-dish-img" />
                <div className="absolute top-4 left-4 bg-[#1A1A1A]/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-white/10">
                  <Star size={14} className="text-[#FF5722] fill-current" />
                  <span className="text-sm font-bold text-[#F8F8F8]">{item.rating}</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3.5 h-3.5 border border-green-500 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  </span>
                  <h3 className="text-xl font-bold text-[#F8F8F8] font-['Outfit'] line-clamp-1">{item.name}</h3>
                </div>
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-extrabold text-[#F8F8F8]">{item.price}</span>
                  
                  <button 
                    onClick={(e) => handleAddToCart(e, item.id)}
                    className={`landing-add-btn ${addedItems[item.id] ? 'success' : ''}`}
                    aria-label="Add to cart"
                  >
                    {addedItems[item.id] ? <Check size={20} /> : <Plus size={20} />}
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/kitchens"
            className="landing-btn-ghost hover:bg-[#FF5722]/5 hover:border-[#FF5722]/30 hover:text-[#FF5722]"
          >
            Explore Full Menu
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default MenuPreview;
