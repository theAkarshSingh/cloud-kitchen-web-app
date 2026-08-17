import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import KitchenMenu from "./pages/KitchenMenu";
import Kitchens from "./pages/Kitchens";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import MyOrders from "./pages/MyOrders";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageKitchen from "./pages/admin/ManageKitchen";
import ManageMenu from "./pages/admin/ManageMenu";
import ManageOrders from "./pages/admin/ManageOrders";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#080808]">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "rgba(20, 20, 20, 0.95)",
            color: "#f8f8f8",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "14px",
            backdropFilter: "blur(16px)",
            fontSize: "0.875rem",
          },
          success: {
            iconTheme: { primary: "#f97316", secondary: "#fff" },
          },
        }}
      />
      {!isLandingPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kitchens" element={<Kitchens />} />
        <Route path="/kitchens/:kitchenId" element={<KitchenMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/my-orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="kitchen" element={<ManageKitchen />} />
          <Route path="menu" element={<ManageMenu />} />
          <Route path="orders" element={<ManageOrders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;