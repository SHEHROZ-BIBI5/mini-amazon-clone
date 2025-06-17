 
import React from 'react';
import { Link } from 'react-router-dom';
import allProducts from '../data/products';

const Products = () => {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">🛍️ All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {allProducts.map(product => (
          <div key={product.id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-bold text-green-600 mt-2">{product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
