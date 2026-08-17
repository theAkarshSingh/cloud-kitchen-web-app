import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../redux/slices/cartSlice";
import { placeOrder } from "../redux/slices/orderSlice";

const Cart = () => {
  const { items, kitchenId, kitchenName } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });
  const [showAddress, setShowAddress] = useState(false);
  const [placingOrder, setPlacingOrder] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handlePlaceOrder = async () => {
    if (!user) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }
    if (
      !address.street ||
      !address.city ||
      !address.state ||
      !address.pincode ||
      !address.phone
    ) {
      toast.error("Please fill all address fields");
      return;
    }

    setPlacingOrder(true);
    const result = await dispatch(
      placeOrder({
        kitchenId,
        items: items.map((i) => ({
          menuItem: i.menuItem,
          quantity: i.quantity,
        })),
        deliveryAddress: address,
        paymentMethod: "cod",
      }),
    );
    setPlacingOrder(false);

    if (result.meta.requestStatus === "fulfilled") {
      toast.success("Order placed successfully! 🎉");
      dispatch(clearCart());
      navigate("/my-orders");
    } else {
      toast.error(result.payload || "Failed to place order");
    }
  };

  if (items.length === 0) {
    return (
      <div className="page-wrapper flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 text-center animate-fade-in-up px-4">
          <div className="text-8xl mb-6 animate-float inline-block">🛒</div>
          <h2 className="text-3xl font-extrabold text-white mb-3">Your cart is empty</h2>
          <p className="text-white/40 mb-8 max-w-sm mx-auto">
            Add items from a kitchen to start building your order
          </p>
          <Link to="/kitchens" className="btn-primary !py-4 !px-10 !text-base">
            Browse Kitchens
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 py-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <span className="section-label mb-4 inline-block">🛒 Checkout</span>
          <h1 className="text-4xl font-extrabold text-white mt-3 mb-1 tracking-tight">Your Cart</h1>
          <p className="text-white/40 text-sm">
            From{" "}
            <span className="font-semibold text-orange-400">{kitchenName}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 animate-fade-in-up delay-100">
            {items.map((item) => (
              <div
                key={item.menuItem}
                className="glass rounded-2xl p-5 flex items-center gap-4 group hover:border-orange-500/15 transition-all duration-300"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-base leading-tight mb-1">{item.name}</h3>
                  <p className="text-sm text-orange-400/80 font-medium">₹{item.price} each</p>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          menuItem: item.menuItem,
                          quantity: item.quantity - 1,
                        }),
                      )
                    }
                    className="qty-btn"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold text-white text-sm">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          menuItem: item.menuItem,
                          quantity: item.quantity + 1,
                        }),
                      )
                    }
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>

                <div className="text-right min-w-[64px]">
                  <span className="font-bold text-white text-base">₹{item.price * item.quantity}</span>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.menuItem))}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-red-400/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300"
                  aria-label="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="animate-fade-in-up delay-200">
            <div className="glass rounded-3xl p-6 sticky top-6">
              <h3 className="font-bold text-white text-lg mb-5">Order Summary</h3>

              {/* Items breakdown */}
              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.menuItem} className="flex justify-between text-sm">
                    <span className="text-white/50 truncate mr-2">{item.name} × {item.quantity}</span>
                    <span className="text-white/70 shrink-0">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <hr className="divider mb-5" />

              <div className="flex justify-between mb-2">
                <span className="text-white/50 text-sm">Subtotal</span>
                <span className="text-white font-medium">₹{subtotal}</span>
              </div>
              <div className="flex justify-between mb-5">
                <span className="text-white/50 text-sm">Delivery</span>
                <span className="text-green-400 text-sm font-medium">Free</span>
              </div>

              <div className="flex justify-between items-center py-4 border-t border-white/8 mb-6">
                <span className="text-white font-bold text-lg">Total</span>
                <span className="text-orange-400 font-extrabold text-2xl">₹{subtotal}</span>
              </div>

              {!showAddress ? (
                <button
                  onClick={() => setShowAddress(true)}
                  className="btn-primary w-full !py-4 !rounded-2xl !text-base"
                >
                  Proceed to Checkout
                </button>
              ) : null}

              <button
                onClick={() => dispatch(clearCart())}
                className="w-full mt-3 text-center text-sm text-red-400/50 hover:text-red-400 transition-colors py-2"
              >
                Clear cart
              </button>
            </div>
          </div>
        </div>

        {/* Address Section */}
        {showAddress && (
          <div className="mt-6 glass rounded-3xl p-8 animate-fade-in-up">
            <h3 className="text-xl font-bold text-white mb-2">Delivery Address</h3>
            <p className="text-white/40 text-sm mb-6">Where should we deliver your order?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { key: "street", label: "Street Address", placeholder: "House no., Street name", fullWidth: true },
                { key: "city", label: "City", placeholder: "e.g. Mumbai" },
                { key: "state", label: "State", placeholder: "e.g. Maharashtra" },
                { key: "pincode", label: "Pincode", placeholder: "6-digit pincode" },
                { key: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX", fullWidth: true },
              ].map(({ key, label, placeholder, fullWidth }) => (
                <div key={key} className={fullWidth ? "md:col-span-2" : ""}>
                  <label className="block text-sm font-medium text-white/50 mb-2">{label}</label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={address[key]}
                    onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
                    className="input-dark"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={placingOrder}
              className="btn-primary w-full !py-4 !rounded-2xl !text-base"
            >
              {placingOrder ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Placing Order…
                </span>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Place Order (COD) — ₹{subtotal}
                </>
              )}
            </button>

            <p className="text-center text-white/20 text-xs mt-4">
              Cash on Delivery · No hidden charges
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;