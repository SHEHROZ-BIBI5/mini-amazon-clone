// src/data/products.js

import mobileImg from '../assets/Electronic/mobile.jpg';
import laptopImg from '../assets/Electronic/laptop.jpg';
import gadgetsImg from '../assets/Electronic/gadgets.jpg';
import creamImg from '../assets/beauty-skincare/kreems.jpg';
import makeupImg from '../assets/make-up.jpg';
import bookImg from '../assets/books/book.jpg';
import novelImg from '../assets/books/novels.jpg';

const allProducts = [
  {
    id: "1",
    name: "Mobile",
    price: "Rs. 25000",
    image: mobileImg,
    category: "Electronics",
    description: "Latest smartphone with amazing features.",
  },
  {
    id: "2",
    name: "Laptop",
    price: "Rs. 65000",
    image: laptopImg,
    category: "Electronics",
    description: "High-performance laptop for work and play.",
  },
  {
    id: "3",
    name: "Gadgets",
    price: "Rs. 4500",
    image: gadgetsImg,
    category: "Electronics",
    description: "Smart gadgets to simplify your life.",
  },
  {
    id: "4",
    name: "Creams",
    price: "Rs. 850",
    image: creamImg,
    category: "Beauty & Skincare",
    description: "Skin-nourishing cream for daily glow.",
  },
  {
    id: "5",
    name: "Makeup Kit",
    price: "Rs. 3500",
    image: makeupImg,
    category: "Beauty & Skincare",
    description: "Professional makeup kit for all looks.",
  },
  {
    id: "6",
    name: "Books",
    price: "Rs. 600",
    image: bookImg,
    category: "Books",
    description: "Educational and motivational books.",
  },
  {
    id: "7",
    name: "Novels",
    price: "Rs. 750",
    image: novelImg,
    category: "Books",
    description: "Best-selling novels to enjoy reading.",
  },
];

export default allProducts;
