"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiFilter } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { FaStar } from "react-icons/fa";

const locations = [
  "DKI Jakarta",
  "Jabodetabek",
  "Bandung",
  "Medan",
  "Surabaya",
];
const page = () => {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showLocation, setShowLocation] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [showRating, setShowRating] = useState(true);
  const [isRatingChecked, setIsRatingChecked] = useState(false);

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };
  const FilterContent = (
    <div className="w-full space-y-6 p-4 bg-white rounded-lg shadow-md text-sm">
      {/* Location Filter */}
      <div>
        <button
          onClick={() => setShowLocation(!showLocation)}
          className="flex justify-between items-center font-bold w-full mb-3"
        >
          <span>Location</span>
          {showLocation ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        {showLocation && (
          <div className="space-y-2">
            {locations.map((location) => (
              <label key={location} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => toggleLocation(location)}
                  className="w-4 h-4"
                />
                {location}
              </label>
            ))}
            <button className="text-[#f56b27] text-xs font-medium">
              See more
            </button>
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <button
          onClick={() => setShowPrice(!showPrice)}
          className="flex justify-between items-center font-bold w-full mb-3"
        >
          <span>Harga</span>
          {showPrice ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        {showPrice && (
          <div className="space-y-2">
            <div className="flex items-center border rounded-md overflow-hidden">
              <span className="bg-gray-100 px-3 py-2 text-gray-500">Rp</span>
              <input
                type="number"
                placeholder="Harga Minimum"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full px-3 py-2 outline-none text-sm"
              />
            </div>
            <div className="flex items-center border rounded-md overflow-hidden">
              <span className="bg-gray-100 px-3 py-2 text-gray-500">Rp</span>
              <input
                type="number"
                placeholder="Harga Maksimum"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full px-3 py-2 outline-none text-sm"
              />
            </div>
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div>
        <button
          onClick={() => setShowRating(!showRating)}
          className="flex justify-between items-center font-bold w-full mb-3"
        >
          <span>Rating</span>
          {showRating ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        {showRating && (
          <div className="space-y-2">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={isRatingChecked}
                onChange={() => setIsRatingChecked(!isRatingChecked)}
                className="w-4 h-4"
              />
              <FaStar className="text-yellow-500 ml-1" /> Rating more than 4
              stars
            </label>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />
      <div className="relative px-10 md:px-20 lg:px-36 py-10">
        <p className="pr-1 w-fit relative inline-block pb-2 md:pb-4 text-3xl lg:text-5xl mb-5">
          Men's
          <span className="font-garamond italic font-bold text-4xl lg:text-6xl ml-2 md:ml-3 tracking-tight">
            Fashion
          </span>
        </p>
        <div className="grid md:grid-cols-[25%_75%] gap-3">
          <div>
            {/* Filter button on mobile */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="fixed flex items-center gap-3    bottom-5 right-5 bg-black text-white p-3 rounded-full shadow-md md:hidden z-10"
            >
              Filter <FiFilter size={20} />
            </button>

            {/* Sidebar visible on desktop */}
            <div className="hidden md:block">{FilterContent}</div>

            {/* Full-screen filter on mobile */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                <div className="bg-white w-full h-full p-6 overflow-y-auto">
                  {/* Close button */}
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="text-black text-xl absolute top-5 right-5"
                  >
                    ✖
                  </button>
                  <h1 className="text-lg font-bold mb-4">Filters</h1>
                  {FilterContent}
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="mt-6 w-full text-white bg-black py-2 rounded-full"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <ProductCard
              name="Casual Flannel Shirt"
              image="/product/product1.png"
              price="180.000"
              from="250.000"
              discount="28"
              store="Urban Outfitters"
              place="Jakarta"
              ongkir={1}
            />
            <ProductCard
              name="Minimalist Crewneck Sweater"
              image="/product/product2.png"
              price="230.000"
              from="320.000"
              discount="28"
              store="Cozy Wear"
              place="Bandung"
              ongkir={0}
            />
            <ProductCard
              name="Vintage Leather Jacket"
              image="/product/product3.png"
              price="500.000"
              from="750.000"
              discount="33"
              store="Retro Style"
              place="Surabaya"
              ongkir={1}
            />
            <ProductCard
              name="Casual Flannel Shirt"
              image="/product/product1.png"
              price="180.000"
              from="250.000"
              discount="28"
              store="Urban Outfitters"
              place="Jakarta"
              ongkir={1}
            />
            <ProductCard
              name="Minimalist Crewneck Sweater"
              image="/product/product2.png"
              price="230.000"
              from="320.000"
              discount="28"
              store="Cozy Wear"
              place="Bandung"
              ongkir={0}
            />
            <ProductCard
              name="Vintage Leather Jacket"
              image="/product/product3.png"
              price="500.000"
              from="750.000"
              discount="33"
              store="Retro Style"
              place="Surabaya"
              ongkir={1}
            />
            <ProductCard
            name="Casual Sneakers"
            image="/home/product3.png"
            price="550.000"
            from="750.000"
            discount="25"
            store="Footwear Hub"
            place="Surabaya"
            ongkir={1}
          />
          <ProductCard
            name="Elegant Handbag"
            image="/home/product4.png"
            price="700.000"
            from="1.000.000"
            discount="30"
            store="Luxury Bags"
            place="South Jakarta"
            ongkir={1}
          />
          <ProductCard
            name="Sporty Watch"
            image="/home/product5.png"
            price="850.000"
            from="1.200.000"
            discount="29"
            store="Timepiece Central"
            place="Medan"
            ongkir={0}
          />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
