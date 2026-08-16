import { useState } from "react";
import toast from "react-hot-toast";

const ReferFriend = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success(`Referral invite sent to ${email}!`);
    setEmail("");
  };

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-5xl mb-4">🎁</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Refer a Friend, Eat for Free
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
              Invite a friend to MealsNest. When they place their first order,
              you both get <span className="text-orange-400 font-semibold">₹100 off</span> your next meal.
              No limits — the more you refer, the more you save.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Friend's email address"
                required
                className="flex-1 bg-black/40 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full text-sm font-semibold transition shadow-lg shadow-orange-500/25 whitespace-nowrap"
              >
                Send Invite
              </button>
            </form>

            <p className="text-gray-500 text-xs mt-5">
              No spam. One invite email, that's it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferFriend;
