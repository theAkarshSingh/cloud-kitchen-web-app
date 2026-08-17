import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder, fetchMyOrders } from "../redux/slices/orderSlice";
import { Link } from "react-router-dom";

const statusConfig = {
  placed:           { label: "Placed",            class: "status-placed",           icon: "📋", step: 1 },
  confirmed:        { label: "Confirmed",          class: "status-confirmed",         icon: "✅", step: 2 },
  preparing:        { label: "Preparing",          class: "status-preparing",         icon: "👨‍🍳", step: 3 },
  out_for_delivery: { label: "Out for Delivery",   class: "status-out_for_delivery",  icon: "🚴", step: 4 },
  delivered:        { label: "Delivered",          class: "status-delivered",         icon: "🎉", step: 5 },
  cancelled:        { label: "Cancelled",          class: "status-cancelled",         icon: "✕",  step: 0 },
};

const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, [dispatch]);

  const handleCancel = async (orderId) => {
    if (!confirm("Are you sure you want to cancel this order?")) return;
    const result = await dispatch(
      cancelOrder({ orderId, reason: "Changed my mind" }),
    );
    if (result.meta.requestStatus === "fulfilled") {
      toast.success("Order cancelled");
    } else {
      toast.error(result.payload || "Cannot cancel at this stage");
    }
  };

  if (loading) {
    return (
      <div className="page-wrapper flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mx-auto mb-4" />
          <p className="text-white/30 text-sm">Loading your orders…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 py-10">
        {/* Header */}
        <div className="mb-10 animate-fade-in-up">
          <span className="section-label mb-4 inline-block">📦 History</span>
          <h1 className="text-4xl font-extrabold text-white mt-3 mb-1 tracking-tight">My Orders</h1>
          <p className="text-white/40 text-sm">{orders.length} order{orders.length !== 1 ? "s" : ""} placed</p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-32 animate-fade-in">
            <div className="text-8xl mb-6 animate-float inline-block">📦</div>
            <h3 className="text-2xl font-bold text-white/50 mb-3">No orders yet</h3>
            <p className="text-white/30 mb-8 max-w-sm mx-auto">
              Start exploring kitchens and place your first order!
            </p>
            <Link to="/kitchens" className="btn-primary !py-4 !px-10 !text-base">
              Explore Kitchens
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, idx) => {
              const status = statusConfig[order.orderStatus] || statusConfig.placed;
              const canCancel = ["placed", "confirmed"].includes(order.orderStatus);
              const orderDate = new Date(order.createdAt);

              return (
                <div
                  key={order._id}
                  className="glass rounded-3xl overflow-hidden hover:border-white/12 transition-all duration-300 animate-fade-in-up group"
                  style={{ animationDelay: `${idx * 0.07}s` }}
                >
                  {/* Status bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${
                    order.orderStatus === "delivered" ? "from-green-500 to-emerald-400" :
                    order.orderStatus === "cancelled" ? "from-red-500 to-red-400" :
                    order.orderStatus === "out_for_delivery" ? "from-purple-500 to-violet-400" :
                    "from-orange-500 to-amber-400"
                  }`} />

                  <div className="p-6">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xl">{status.icon}</span>
                          <h3 className="font-bold text-white text-lg">
                            {order.kitchen?.name || "Kitchen"}
                          </h3>
                        </div>
                        <p className="text-white/40 text-xs ml-8">
                          {orderDate.toLocaleDateString("en-IN", {
                            weekday: "short", day: "numeric", month: "short", year: "numeric"
                          })} · {orderDate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-2xl font-extrabold text-orange-400 mb-2">₹{order.totalAmount}</div>
                        <span className={`badge ${status.class} text-[10px]`}>
                          {status.label}
                        </span>
                      </div>
                    </div>

                    {/* Items list */}
                    <div className="bg-white/3 rounded-2xl px-4 py-3 mb-4">
                      <p className="text-white/50 text-sm">
                        {order.items.map((i) => `${i.name} ×${i.quantity}`).join("  ·  ")}
                      </p>
                    </div>

                    {/* Delivery address */}
                    {order.deliveryAddress && (
                      <div className="flex items-start gap-2 text-xs text-white/30 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>
                          {order.deliveryAddress.street}, {order.deliveryAddress.city}, {order.deliveryAddress.state} {order.deliveryAddress.pincode}
                        </span>
                      </div>
                    )}

                    {/* Actions */}
                    {canCancel && (
                      <button
                        onClick={() => handleCancel(order._id)}
                        className="btn-danger text-xs"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;