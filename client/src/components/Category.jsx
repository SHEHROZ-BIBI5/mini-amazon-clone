import React from 'react'
import img1 from '../assets/Electronic/gadgets.jpg';
import img2 from '../assets/Electronic/laptop.jpg';
import img3 from '../assets/Electronic/mobile.jpg';

import img4 from '../assets/beauty-skincare/kreems.jpg';
import img5 from '../assets/make-up.jpg';

import img6 from '../assets/books/book.jpg';
import img7 from '../assets/books/novels.jpg';

import img8 from '../assets/fashion/accessory.jpg';
import img9 from '../assets/fashion/cloths.jpg';
import img10 from '../assets/fashion/cloth.jpg';
import img11 from '../assets/fashion/shoes.jpg';

import img12 from '../assets/home-appliances/fans.jpg';
import img13 from '../assets/home-appliances/iron.jpg';
import img14 from '../assets/home-appliances/kichen.jpg';

import img15 from '../assets/Fitness/exersice.jpg';
import img16 from '../assets/Fitness/exersices.jpg';

import img17 from '../assets/toys/toy-2.jpg';
import img18 from '../assets/toys/toy.jpg';

const categories = [
  {
    category: "Electronics",
    items: [
      { name: "Mobile", image: img3 },
      { name: "Laptop", image: img2 },
      { name: "Gadgets", image: img1 }
    ]
  },
  {
    category: "Beauty & Skincare",
    items: [
      { name: "Creams", image: img4 },
      { name: "Makeup", image: img5 },
      { name: "Lips sticks", image: img5 }

    ]
  },
  {
    category: "Books",
    items: [
      { name: "Novels", image: img7 },
      { name: "Books", image: img6 },
      { name: "Story", image: img7 },

    ]
  },
  {
    category: "Fashion",
    items: [
      { name: "Accessories", image: img8 },
      { name: "Clothes", image: img9 },
      { name: "Shoes", image: img11 }
    ]
  },
  {
    category: "Home Appliances",
    items: [
      { name: "Fans", image: img12 },
      { name: "Iron", image: img13 },
      { name: "Kitchen", image: img14 }
    ]
  },
  {
    category: "Fitness",
    items: [
      { name: "Exercise 1", image: img16 },
      { name: "Exercise 2", image: img15 },
      { name: "Exercise 3", image: img16 },
    ]
  },
  {
    category: "Toys",
    items: [
       { name: "Toy 1", image: img18 },
      { name: "Toy 2", image: img17 },
      { name: "Toy 3", image: img18 },

    ]
  }
];

const gradientColors = [
  "from-pink-100 via-pink-50 to-yellow-100",
  "from-blue-100 via-blue-50 to-green-100",
  "from-yellow-100 via-yellow-50 to-pink-100",
  "from-green-100 via-green-50 to-blue-100",
  "from-purple-100 via-purple-50 to-pink-100",
  "from-orange-100 via-orange-50 to-yellow-100",
  "from-teal-100 via-teal-50 to-blue-100"
];

const Category = () => {
  return (
    <div>
      <section className="py-12 px-4 bg-gradient-to-br from-yellow-50 via-white to-blue-50 min-h-screen">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-tight drop-shadow-lg">
          Shop by Category
        </h2>

        <div className="space-y-14 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <div key={index} className="mb-2">
              <h3 className="text-2xl font-bold mb-6 text-gray-700 flex items-center gap-2 justify-center">
                <span className="inline-block w-2 h-8 bg-yellow-400 rounded-full mr-2"></span>
                {cat.category}
              </h3>
              <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center`}>
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative group bg-gradient-to-br ${gradientColors[index % gradientColors.length]} p-6 shadow-2xl rounded-3xl text-center transition-transform transform hover:-translate-y-3 hover:scale-105 hover:shadow-yellow-200/60 border border-yellow-100 flex flex-col items-center`}
                  >
                    {/* Decorative floating shapes */}
                    <span className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-200 rounded-full opacity-30 blur-sm group-hover:opacity-60 transition"></span>
                    <span className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-200 rounded-full opacity-30 blur-sm group-hover:opacity-60 transition"></span>
                    <div className="flex justify-center">
                      <div className="relative flex justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition duration-300 mx-auto"
                        />
                        {/* Glow ring */}
                        <span className="absolute inset-0 rounded-full border-2 border-yellow-300 opacity-40 group-hover:opacity-80 animate-pulse"></span>
                      </div>
                    </div>
                    <p className="font-semibold text-lg mt-5 text-gray-800 tracking-wide drop-shadow-sm text-center">
                      {item.name}
                    </p>
                    <button className="mt-5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-white font-bold py-2 px-8 rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-400 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 mx-auto">
                      <span className="inline-block mr-2">✨</span>Explore
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Category
