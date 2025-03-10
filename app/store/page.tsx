"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Store from "@/public/store.png";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";

const ratingData = [
  { stars: 5, count: 1224 },
  { stars: 4, count: 115 },
  { stars: 3, count: 42 },
  { stars: 2, count: 13 },
  { stars: 1, count: 30 },
];

const totalRatings = 1424;
const totalReviews = 1087;

const comments = [
  {
    name: "James A.",
    comment:
      "Super fast response and my order was shipped out the same day! Will definitely buy again. Highly recommended.",
    stars: 5,
  },
  {
    name: "Daniel K.",
    comment:
      "The product matches the description perfectly. There was a slight delay in shipping, but overall a good experience.",
    stars: 5,
  },
  {
    name: "Samantha L.",
    comment:
      "Very friendly seller and excellent quality items. Packaging was neat and secure!",
    stars: 5,
  },
  {
    name: "Michael K.",
    comment:
      "Great store! Item came as expected. Would have given 5 stars if the delivery was a bit quicker.",
    stars: 5,
  },
];

const page = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />
      <div className="px-10 md:px-20 lg:px-36 py-10 grid grid-cols-[35%_65%] md:grid-cols-[20%_40%_40%] lg:grid-cols-[20%_50%_30%] items-center">
        <div className="flex justify-end">
          <Image
            src={Store}
            alt="Logo"
            className="w-[160px] rounded-full p-2"
          />
        </div>
        <div className="flex flex-col px-7">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Sultan Palugada
          </h1>
          <p className="font-light text-sm md:text-base lg:text-lg">
            West Java
          </p>
          <div className="md:hidden flex flex-col mt-2">
            <h1 className="text-xs md:text-sm font-bold flex gap-1 items-center">
              <FaStar className="text-yellow-500" /> 4.7
              <span className="font-light ">Ratings & Feedback</span>
            </h1>
            <h1 className="flex gap-1 items-center text-xs md:text-sm">
              <IoTime /> ±4 min
              <span className="font-light"> Order Process</span>
            </h1>
          </div>
          <div className="flex gap-3 mt-3 lg:mt-5">
            <button
              onClick={() => setIsFollowed(!isFollowed)}
              className={`text-sm lg:text-base py-2 px-4 md:px-5 w-fit rounded-full ${
                isFollowed
                  ? "bg-gray-300 text-black"
                  : "bg-gradient-to-r from-[#f56b27] to-[#eb8e5f] text-white"
              }`}
            >
              {isFollowed ? "Followed" : "Follow"}
            </button>
            <button className="flex gap-3 items-center justify-center text-sm lg:text-base py-2 px-3 md:px-5 text-[#f56b27] border-[1px] border-[#f56b27] rounded-full">
              Chat
            </button>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-2">
          <div className="p-2 flex flex-col items-center justify-center md:border-r-2 border-gray-400 w-full">
            <h1 className="flex items-center gap-1 text-xl">
              <FaStar className="text-yellow-500" />
              4.7
            </h1>
            <p className="text-xs font-light text-center">
              {" "}
              Rating & Feedbacks{" "}
            </p>
          </div>
          <div className="p-2 flex flex-col items-center justify-center w-full">
            <h1 className="flex items-center gap-3 text-xl">±4 min</h1>
            <p className="text-xs font-light text-center">Order Process</p>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto">
        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("details")}
            className={`flex-1 text-sm py-3 text-center ${
              activeTab === "details"
                ? "font-semibold text-black border-b-2 border-black"
                : "text-gray-400"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`flex-1 text-sm py-3 text-center ${
              activeTab === "reviews"
                ? "font-semibold text-black border-b-2 border-black"
                : "text-gray-400"
            }`}
          >
            Rating & Reviews
          </button>
        </div>

        {/* Content */}
        <div className="py-6">
          {activeTab === "details" && (
            <div>
              <div className="flex justify-between items-center">
                <h1> All Products</h1>
                <div className="flex gap-3 items-center">
                  <FaFilter className="text-[#9e9e9c]" />
                  <Select>
                    <SelectTrigger className="w-fit rounded-full border-[#9e9e9c] text-[#595957]">
                      <SelectValue placeholder="Newest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="terbaru">Newest</SelectItem>
                      <SelectItem value="paling-sesuai">Suits You</SelectItem>
                      <SelectItem value="harga-tertinggi">
                        Highest Price
                      </SelectItem>
                      <SelectItem value="harga-terendah">
                        Lowest Price
                      </SelectItem>
                      <SelectItem value="ulasan-terbanyak">
                        Best Feedbacks
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-5">
              <ProductCard
                name="Oversized Hoodie"
                image="/store/store1.png"
                price="250.000"
                from="350.000"
                discount="29"
                store="Cozy Wear"
                place="Bandung"
                ongkir={1}
              />
              <ProductCard
                name="Formal Blazer"
                image="/store/store2.png"
                price="400.000"
                from="600.000"
                discount="33"
                store="Elegant Attire"
                place="Jakarta"
                ongkir={0}
              />
              <ProductCard
                name="Graphic T-Shirt"
                image="/store/store3.png"
                price="180.000"
                from="250.000"
                discount="28"
                store="Urban Streetwear"
                place="Surabaya"
                ongkir={1}
              />
              <ProductCard
                name="Slim Fit Jeans"
                image="/store/store4.png"
                price="320.000"
                from="500.000"
                discount="36"
                store="Denim Republic"
                place="Yogyakarta"
                ongkir={0}
              />
              <ProductCard
                name="Summer Linen Shirt"
                image="/store/store5.png"
                price="210.000"
                from="300.000"
                discount="30"
                store="Breezy Styles"
                place="Bali"
                ongkir={1}
              />
              <ProductCard
                name="Puffer Jacket"
                image="/store/store6.png"
                price="550.000"
                from="750.000"
                discount="27"
                store="Winter Essentials"
                place="Bandung"
                ongkir={1}
              />
              <ProductCard
                name="Athleisure Joggers"
                image="/store/store7.png"
                price="280.000"
                from="400.000"
                discount="30"
                store="Active Wear"
                place="Medan"
                ongkir={0}
              />
              <ProductCard
                name="Classic Polo Shirt"
                image="/store/store8.png"
                price="190.000"
                from="270.000"
                discount="25"
                store="Timeless Fashion"
                place="Semarang"
                ongkir={1}
              />
              <ProductCard
                name="Longline Cardigan"
                image="/store/store9.png"
                price="310.000"
                from="450.000"
                discount="31"
                store="Casual Luxe"
                place="Yogyakarta"
                ongkir={1}
              />
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <div className="w-full flex flex-col md:flex-row md:items-start gap-6 p-6 bg-stone-100 rounded-lg border-2 border-stone-200 shadow-sm">
                {/* Overall Rating */}
                <div className="flex flex-col items-start">
                  <div className="flex items-center text-2xl font-bold">
                    <FaStar className="text-yellow-400 mr-1" />
                    4.7{" "}
                    <span className="text-gray-400 text-lg ml-1">/ 5.0</span>
                  </div>
                  <p className="text-xs md:text-sm mt-1 font-medium">
                    94% of buyers are satisfied
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    {totalRatings} ratings • {totalReviews} reviews
                  </p>
                </div>

                {/* Rating Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 flex-1">
                  {ratingData.map((item) => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm">{item.stars}</span>
                      <div className="w-full bg-stone-300 rounded-full h-2 mx-2 relative">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#f56b27] rounded-full"
                          style={{
                            width: `${(item.count / totalRatings) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">
                        ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-14">
                <h1> All Ratings</h1>
                <div className="flex gap-3 items-center">
                  <FaFilter className="text-[#9e9e9c]" />
                  <Select>
                    <SelectTrigger className="w-fit rounded-full border-[#9e9e9c] text-[#595957]">
                      <SelectValue placeholder="Newest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="terbaru">Newest</SelectItem>
                      <SelectItem value="harga-tertinggi">
                        Highest Rating
                      </SelectItem>
                      <SelectItem value="harga-terendah">
                        Lowest Rating
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mt-5">
                {comments.map((commentd, index) => (
                  <Card
                    key={index}
                    className="h-full bg-stone-100 duration-300 border-stone-200 border-[1px]"
                  >
                    <CardContent className="flex flex-col items-start justify-start p-6 h-full ">
                      {/* Randomized Stars */}
                      <div className="flex text-yellow-500 gap-1 pb-5">
                        {Array.from({ length: 5 }).map((_, starIndex) =>
                          starIndex < commentd.stars ? (
                            <FaStar key={starIndex} />
                          ) : (
                            <FaRegStar key={starIndex} />
                          )
                        )}
                      </div>
                      {/* Feedback */}
                      <p className="text-base md:text-lg font-semibold">
                        {commentd.name}
                      </p>
                      <p className="text-xs md:text-sm font-light">
                        {commentd.comment}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default page;
