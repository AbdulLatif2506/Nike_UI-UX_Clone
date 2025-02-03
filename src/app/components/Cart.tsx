import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#111111] p-6 md:flex md:justify-between md:gap-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
      {/* Left Section - Cart Items */}
      <div className="md:w-2/3 w-full">
        <div className="bg-[#F5F5F5] p-4 text-[11px]">
          <span className="font-bold text-[13px]">Free Delivery</span> <br />{" "}
          Applies to orders of ₹ 14 000.00 or more.{" "}
          <a href="#" className="underline font-bold">
            View details
          </a>
        </div>
        <h2 className="text-[26px] font-bold mt-6">Bag</h2>
        <div className="mt-4 overflow-hidden">
          {/* First Item */}
          <div className="flex flex-col sm:flex-row py-4 border-b">
            <img
              src="/images/ultra.png"
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              className="w-36 h-36 object-cover mx-auto sm:mx-0"
            />
            <div className="ml-7 space-y-1 flex-1">
              <h3 className="font-bold text-[15px]">
                Nike Dri-FIT ADV TechKnit Ultra
              </h3>
              <p className="text-[15px] text-[#757575]">
                Men's Short-Sleeve Running Top
              </p>
              <p className="text-[15px] text-[#757575]">
                Ashen Slate/Cobalt Bliss
              </p>
              <p className="text-[15px] text-[#757575]">
                Size L &nbsp; Quantity 1
              </p>
            </div>
            <p className="text-[15px] sm:text-right text-center mt-4 sm:mt-0">MRP: ₹ 3 895.00</p>
          </div>
          {/* Second Item */}
          <div className="flex flex-col sm:flex-row py-4 mb-12 border-b">
            <img
              src="/images/max_97.png"
              alt="Nike Air Max 97 SE"
              className="w-36 h-36 object-cover mx-auto sm:mx-0"
            />
            <div className="ml-7 space-y-1 flex-1">
              <h3 className="font-bold text-[15px]">Nike Air Max 97 SE</h3>
              <p className="text-[15px] text-[#757575]">Men's Shoes</p>
              <p className="text-[15px] text-[#757575]">
                Flat Pewter/Light Bone/Black/White
              </p>
              <p className="text-[15px] text-[#757575]">
                Size 8 &nbsp; Quantity 1
              </p>
            </div>
            <p className="text-[15px] sm:text-right text-center mt-4 sm:mt-0">MRP: ₹ 16 995.00</p>
          </div>
        </div>
      </div>
      {/* Right Section - Summary */}
      <div className="md:w-1/3 w-full text-[#111111] pl-2 md:self-start">
        <h2 className="text-[26px] font-bold mb-4">Summary</h2>
        <div className="flex justify-between text-[15px]">
          <span>Subtotal</span>
          <span>₹ 20 890.00</span>
        </div>
        <div className="flex justify-between text-[15px] mt-3 pb-6 border-b">
          <span>Estimated Delivery & Handling</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-medium text-[15px] pt-6">
          <span>Total</span>
          <span>₹ 20 890.00</span>
        </div>
        <button  className="mt-6 bg-[#111111] text-[#FFFFFF] text-[15px] font-medium w-full py-5 rounded-full">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
