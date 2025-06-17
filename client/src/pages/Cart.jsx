 import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // ✅ navigation ke liye
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const navigate = useNavigate(); // ✅ react-router hook

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price.replace(/[^\d]/g, '')) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 p-8">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        🛒 Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, idx) => (
              <li key={idx} className="py-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md shadow"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 mb-2">
                      {item.price} × {item.quantity}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        ➖
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        ➕
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p className="text-xl font-bold text-gray-700">
              Total: Rs. {totalPrice}
            </p>
            <button 
              onClick={() => navigate('/checkout')} // ✅ button action
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
