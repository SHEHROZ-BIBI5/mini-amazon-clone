 // 📁 src/components/Hero.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';  // ⬅️ add this

const Hero = () => {
  const navigate = useNavigate();  // ⬅️ navigation ke liye hook

  const handleStartShopping = () => {
    navigate('/products');  // ⬅️ go to /products
  };

  return (
    <section className="relative bg-yellow-100 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Mini Amazon</h1>
      <p className="text-lg mb-6 text-gray-700">Shop the latest products at unbeatable prices!</p>
      
      <button 
        className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition"
        onClick={handleStartShopping} // ⬅️ add this
      >
        Start Shopping
      </button>
    </section>
  );
};

export default Hero;
