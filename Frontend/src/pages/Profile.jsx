import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/axios";
import { fetchProfile } from "../redux/slices/authSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updateData = {};
    if (username !== user.username) updateData.username = username;
    if (email !== user.email) updateData.email = email;
    if (password) updateData.password = password;

    if (Object.keys(updateData).length === 0) {
      toast.error("No changes to update");
      setLoading(false);
      return;
    }

    try {
      await api.put("/auth/update", updateData);
      toast.success("Profile updated successfully! ✅");
      setPassword("");
      dispatch(fetchProfile());
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const avatarLetter = user?.username?.charAt(0).toUpperCase() || "?";
  const roleColors = {
    admin: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    user: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  };

  return (
    <div className="page-wrapper relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-5 py-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <span className="section-label mb-4 inline-block">👤 Account</span>
          <h1 className="text-4xl font-extrabold text-white mt-3 tracking-tight">My Profile</h1>
        </div>

        {/* Profile Card */}
        <div className="glass rounded-3xl p-6 mb-6 animate-fade-in-up delay-100">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-3xl font-extrabold text-white shadow-xl shadow-orange-500/30">
                {avatarLetter}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-[#080808]" title="Online" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-white truncate">{user?.username}</h2>
              <p className="text-white/40 text-sm mt-0.5 mb-3 truncate">{user?.email}</p>
              <span className={`badge border text-[10px] ${roleColors[user?.role] || roleColors.user}`}>
                {user?.role || "user"}
              </span>
            </div>

            {/* Stats */}
            <div className="hidden sm:flex flex-col items-end gap-1">
              <div className="text-white/20 text-xs">Member since</div>
              <div className="text-white/60 text-sm font-medium">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
                  : "Recently joined"}
              </div>
            </div>
          </div>
        </div>

        {/* Update Form */}
        <div className="glass rounded-3xl p-8 animate-fade-in-up delay-200">
          <h3 className="text-xl font-bold text-white mb-1">Update Profile</h3>
          <p className="text-white/35 text-sm mb-6">Keep your information up to date</p>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/50 mb-2">Username</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-dark !pl-11"
                  placeholder="Your username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/50 mb-2">Email address</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-dark !pl-11"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/50 mb-2">New Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Leave blank to keep current"
                  className="input-dark !pl-11"
                />
              </div>
              <p className="text-xs text-white/25 mt-1.5 ml-1">Only fill this to change your password</p>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary !py-3.5 !rounded-2xl !text-base"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving…
                  </span>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;