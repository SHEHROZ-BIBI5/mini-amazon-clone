 import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from './components/Footer'

// Pages
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import OrderPage from "./pages/OrderPage";  


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Navbar />

      <Routes>
        {/* ✅ Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Category onSelectCategory={setSelectedCategory} />
              <FeaturedProducts selectedCategory={selectedCategory} />
              <Cart />
               <OrderPage />

            </>
          }
        />

        {/* ✅ All Products Page */}
        <Route path="/products" element={<Products />} />

        {/* ✅ Product Details Page */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* ✅ Checkout Page */}
        <Route path="/checkout" element={<Checkout />} />

        {/* ✅ Fallback Cart Page (optional) */}
        <Route path="/cart" element={<Cart />} />

        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
