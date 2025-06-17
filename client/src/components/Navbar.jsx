 // src/components/Navbar.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
 
const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-yellow-500">Mini Amazon 🛍️</h1>

      <ul className="flex items-center gap-6 text-lg">
        <li><Link to="/">Home</Link></li>
        <li>
       <Link
      to="/products"
      className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition duration-200"
        >
     Products
    </Link>
     </li>
        <li className="relative">
          <Link to="/cart" className="flex items-center gap-1">
            🛒 Cart
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
      <Link
  to="/checkout"
  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
   >
  Checkout
    </Link>
    <Link to="/order">
  <button className="bg-blue-500 text-white px-4 py-2 rounded">
    Order Now
  </button>
   </Link>

    </nav>
  );
};

export default Navbar;
