import { useState } from "react";
import toast from "react-hot-toast";

const ReferFriend = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success(`Referral invite sent to ${email}! 🎉`);
    setEmail("");
  };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-orange-500/8 to-red-500/10 border border-orange-500/20 rounded-3xl" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] rounded-3xl"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <div className="text-6xl mb-5 inline-block animate-float">🎁</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Refer a Friend,{" "}
              <span className="gradient-text">Eat for Free</span>
            </h2>
            <p className="text-white/45 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Invite a friend to MealsNest. When they place their first order,
              you both get{" "}
              <span className="text-orange-400 font-bold">₹100 off</span> your
              next meal. No limits — the more you refer, the more you save.
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
                className="input-dark flex-1 !rounded-2xl"
              />
              <button
                type="submit"
                className="btn-primary !rounded-2xl whitespace-nowrap !py-3.5 !px-7"
              >
                Send Invite
              </button>
            </form>

            <p className="text-white/25 text-xs mt-5">
              No spam. One invite email, that's it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferFriend;
