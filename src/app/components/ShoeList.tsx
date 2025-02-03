"use client"; // To use React hooks in a Client Component
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./Card";

interface Shoe {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
}

const shoes: Shoe[] = [
  {
    id: 1,
    image: "/images/max_pulse.png",
    title: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: 13995,
  },
  {
    id: 2,
    image: "/images/max_pulse.png",
    title: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: 13995,
  },
  {
    id: 3,
    image: "/images/max_97.png",
    title: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: 16995,
  },
  {
    id: 4,
    image: "/images/max_pulse.png",
    title: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: 13995,
  },
  {
    id: 5,
    image: "/images/max_pulse.png",
    title: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: 13995,
  },
  {
    id: 6,
    image: "/images/max_97.png",
    title: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: 16995,
  },
];

const ShoeList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3); // Default to 3 items for large screens

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3); // Large screens
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2); // Tablets
      } else {
        setVisibleItems(1); // Mobile
      }
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems >= shoes.length ? 0 : prevIndex + visibleItems
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shoes.length - visibleItems : prevIndex - visibleItems
    );
  };

  return (
    <div className="relative w-full bg-white mt-[3em]">
      {/* Header with Arrow Buttons */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[22px] font-medium">Best of Air Max</h2>
        <div className="flex gap-2">
          <button
            className="bg-white text-black border border-black rounded-full p-2 hover:bg-black hover:text-white transition"
            onClick={prevSlide}
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="bg-white text-black border border-black rounded-full p-2 hover:bg-black hover:text-white transition"
            onClick={nextSlide}
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Shoe Cards */}
      <div className="overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {shoes.map((shoe) => (
            <div
              key={shoe.id}
              className={`w-full ${
                visibleItems === 1
                  ? "flex-[1_0_100%]"
                  : visibleItems === 2
                  ? "flex-[1_0_50%]"
                  : "flex-[1_0_33.33%]"
              }`}
            >
              <Card
                image={shoe.image}
                title={shoe.title}
                category={shoe.category}
                price={shoe.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoeList;
