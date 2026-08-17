import { Search, ChefHat, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search size={28} className="text-[#FF5722]" />,
    title: "Choose your meal",
    description: "Browse our curated selection of chef-crafted dishes and find exactly what you're craving.",
  },
  {
    number: "02",
    icon: <ChefHat size={28} className="text-[#FF5722]" />,
    title: "We cook with love",
    description: "Our top chefs prepare your meal with the freshest, locally sourced ingredients.",
  },
  {
    number: "03",
    icon: <Truck size={28} className="text-[#FF5722]" />,
    title: "Fast delivery to your nest",
    description: "Enjoy hot, restaurant-quality food delivered straight to your door in under 30 minutes.",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A1A1A]/30 rounded-l-full opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#FF5722] text-sm font-bold tracking-widest uppercase mb-3 inline-block">Simple Process</span>
          <h2 className="landing-heading text-4xl md:text-5xl text-[#F8F8F8]">
            How It Works
          </h2>
        </div>

        {/* 3-Step Infographic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative group text-center">
              
              {/* Icon Container */}
              <div className="w-24 h-24 mx-auto bg-[#1A1A1A] border-4 border-[#080808] shadow-xl rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-[#FF5722]/5 rounded-full" />
                {step.icon}
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF5722] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-4 font-['Outfit']">{step.title}</h3>
              <p className="text-[#A0A0A0] text-base leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
