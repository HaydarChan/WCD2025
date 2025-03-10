"use client";
import { useState } from "react";
import { useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BsChatLeftText } from "react-icons/bs";
import Store from "@/public/store.png";
import Image from "next/image";
import { FaStar, FaTruck, FaRegStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";

const images = ["/shirt1.png", "/shirt2.png", "/shirt3.png"];
const comments = [
  {
    name: "James A.",
    comment:
      "Super fast response and my order was shipped out the same day! Will definitely buy again. Highly recommended.",
  },
  {
    name: "Daniel K.",
    comment:
      "The product matches the description perfectly. There was a slight delay in shipping, but overall a good experience.",
  },
  {
    name: "Samantha L.",
    comment:
      "Very friendly seller and excellent quality items. Packaging was neat and secure!",
  },
  {
    name: "Michael K.",
    comment:
      "Great store! Item came as expected. Would have given 5 stars if the delivery was a bit quicker.",
  },
];
const ProductTradePage = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isFollowed, setIsFollowed] = useState(false);
  const commentsWithStars = useMemo(() => {
    return comments.map((comment) => ({
      ...comment,
      stars: Math.floor(Math.random() * 2) + 4, // Random between 3-5
    }));
  }, []);
  const [isTradeOpen, setIsTradeOpen] = useState(false);

  //   const [quantity, setQuantity] = useState(1);

  //   const decrease = () => {
  //     if (quantity > 1) setQuantity(quantity - 1);
  //   };

  //   const increase = () => {
  //     setQuantity(quantity + 1);
  //   };
  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />
      <div className="px-10 md:px-20 lg:px-36 py-10 grid grid-cols-1 xl:grid-cols-[16%_42%_42%] gap-4">
        {/* Thumbnails */}
        <div className="order-2 xl:order-1 flex xl:flex-col gap-2 xl:overflow-visible overflow-x-auto scrollbar-hide xl:pt-7">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`border ${
                selectedImage === img ? "border-black" : "border-transparent"
              } rounded-lg p-2 w-[173px]`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="rounded-md object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="order-1 xl:order-2 flex items-center justify-center">
          <img
            src={selectedImage}
            alt="Selected Product"
            className="w-auto rounded-xl"
          />
        </div>

        {/* Title */}
        <div className="order-3 xl:order-3 flex flex-col p-5 space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold">
            One Life Graphic T-Shirt
          </h1>

          <div className="flex gap-3">
            <button className="text-xs lg:text-sm py-2 px-3 md:px-5 font-light border-[1px] rounded-full w-fit border-[#9e9e9c] text-[#595957]    ">
              Size: L
            </button>
            <button className="text-xs lg:text-sm py-2 px-3 md:px-5 font-light border-[1px] rounded-full w-fit border-[#9e9e9c] text-[#595957]    ">
              Color: Green Army
            </button>
          </div>

          <div>
            <p className="text-sm md:text-base font-bold pt-3"> Condition: </p>
            <p className="leading-tight text-xs md:text-sm font-light">
              Good – worn a few times. Minor signs of wear but still in great
              shape overall.
            </p>
          </div>

          <div>
            <p className="text-sm md:text-base font-bold"> Details: </p>
            <ul className="list-disc pl-5 text-xs md:text-sm leading-snug font-light">
              <li>
                Material: Cotton Combed 24s KNITTO, 100% pure cotton – soft,
                breathable, and sweat-absorbent.
              </li>
              <li>
                Fabric Weight: 140-150 gsm – medium thickness, not too heavy,
                perfect for daily wear.
              </li>
              <li>Stitching:</li>
              <ul className="list-disc pl-5">
                <li>Sleeves: Double-needle overlock.</li>
                <li>Hem: Double-needle overlock.</li>
                <li>
                  Collar: Reinforced rib with extra double-needle overlock
                  stitching to maintain shape and durability.
                </li>
                <li>
                  Shoulders: Chain stitch with shoulder tape inside for added
                  strength.
                </li>
              </ul>
            </ul>
          </div>

          <div>
            <p className="text-sm md:text-base font-bold"> Flaws: </p>
            <ul className="list-disc pl-5 text-xs md:text-sm leading-snug font-light">
              <li>Slight fading on the graphic print (barely noticeable).</li>
              <li>
                A very small, repaired stitch near the left side seam (not
                visible when worn).
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-[30%_70%] gap-3 pt-1">
            {/* <div className="flex text-sm md:text-base items-center bg-[#d6d6d6] rounded-full px-4 py-2 space-x-6 w-full justify-between">
              <button
                onClick={decrease}
                className="text-xl font-medium hover:opacity-70"
              >
                −
              </button>
              <span className="text-base">{quantity}</span>
              <button
                onClick={increase}
                className="text-xl font-medium hover:opacity-70"
              >
                +
              </button>
            </div> */}
            <button className="flex gap-3 items-center justify-center text-sm md:text-base py-2 px-3 md:px-5 bg-[#cccccc] rounded-full">
              <BsChatLeftText /> Chat
            </button>
            <button
              onClick={() => setIsTradeOpen(true)}
              className="text-sm text-white md:text-base py-2 px-3 md:px-5 bg-gradient-to-r from-[#f56b27] to-[#eb8e5f] rounded-full"
            >
              Offer Trade
            </button>
          </div>
        </div>
      </div>
      <hr className="w-[90%] mx-auto border-gray-300"></hr>
      <div className="grid lg:grid-cols-2 px-6 md:px-16 lg:px-32 mt-4">
        <div className="grid grid-cols-[20%_60%_20%] lg:grid-cols-[10%_60%_30%] border-gray-300 lg:border-b-0 lg:border-r-2 px-4 py-4 lg:py-10 items-start">
          <Image src={Store} alt="Logo" className="w-14 h-14 rounded-full" />
          <div className="flex flex-col pl-3">
            <Link href="/store" className="font-lg font-bold hover:underline">
              Sultan Palugada
            </Link>
            <h1 className="text-xs md:text-sm font-bold flex gap-1 items-center">
              <FaStar className="text-yellow-500" /> 4.7
              <span className="font-light ">(1,4k ratings)</span>
            </h1>
            <h1 className="flex gap-1 items-center text-xs md:text-sm">
              <IoTime /> ±4 minutes
              <span className="font-light"> order process</span>
            </h1>
          </div>
          <div className="flex justify-end lg:pr-5">
            <button
              onClick={() => setIsFollowed(!isFollowed)}
              className={`text-sm md:text-base py-2 px-4 md:px-5 w-fit rounded-full ${
                isFollowed
                  ? "bg-gray-300 text-black"
                  : "bg-gradient-to-r from-[#f56b27] to-[#eb8e5f] text-white"
              }`}
            >
              {isFollowed ? "Followed" : "Follow"}
            </button>
          </div>
        </div>
        <div className="flex flex-col px-4 lg:pl-10 py-4 lg:py-10">
          <h1 className="font-bold text-base md:text-xl pb-1"> Shipping</h1>
          <p className="text-sm md:text-base font-light flex gap-1 items-center">
            <FiMapPin /> Shipped from{" "}
            <span className="font-bold"> West Java</span>
          </p>
          <p className="text-sm md:text-base font-bold flex gap-1 items-center">
            <FaTruck /> Shipping Cost Rp13.000
          </p>
          <p className="font-light ml-5 lg:ml-3 text-xs md:text-sm">
            Estimated arrival tomorrow - Mar 16
          </p>
        </div>
      </div>
      <hr className="w-[90%] mx-auto border-gray-300 mt-3"></hr>
      <div className="flex flex-col px-10 md:px-20 lg:px-36 py-10">
        <h1 className="font-bold flex items-center text-xl md:text-2xl mb-7">
          All Reviews{" "}
          <span className="font-light text-sm md:text-base ml-2">(451)</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-3">
          {commentsWithStars.map((commentd, index) => (
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
        <button className="text-xs md:text-sm py-2 px-3 md:px-5 font-light border-[1px] rounded-full w-fit border-[#9e9e9c] text-[#595957] mx-auto mt-7">
          See more reviews
        </button>
      </div>
      <hr className="w-[90%] mx-auto border-gray-300 mt-3"></hr>
      <div className="flex flex-col px-10 md:px-20 lg:px-36 py-10">
        <h1 className="font-bold flex text-xl md:text-2xl mb-7">
          You Might Also Like
        </h1>
        <div className="w-full overflow-x-auto scrollbar-hide relative">
          <div className="flex gap-5 min-w-[1000px] overflow-visible">
            <ProductCard
              name="New Rules Shirt"
              image="/product1.png"
              price="120.000"
              from="200.000"
              discount="30"
              store="Big Store"
              place="West Jakarta"
              ongkir={1}
            />
            <ProductCard
              name="New Rules Shirt"
              image="/product1.png"
              price="120.000"
              from="200.000"
              discount="30"
              store="Big Store"
              place="West Jakarta"
              ongkir={0}
            />
            <ProductCard
              name="New Rules Shirt"
              image="/product1.png"
              price="120.000"
              from="200.000"
              discount="30"
              store="Big Store"
              place="West Jakarta"
              ongkir={1}
            />
            <ProductCard
              name="New Rules Shirt"
              image="/product1.png"
              price="120.000"
              from="200.000"
              discount="30"
              store="Big Store"
              place="West Jakarta"
              ongkir={1}
            />
            <ProductCard
              name="New Rules Shirt"
              image="/product1.png"
              price="120.000"
              from="200.000"
              discount="30"
              store="Big Store"
              place="West Jakarta"
              ongkir={0}
            />
          </div>
        </div>
      </div>
      {isTradeOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-10 pt-16 w-[90%] max-w-4xl max-h-[90vh] overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={() => setIsTradeOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              <IoIosClose className="text-4xl" />
            </button>

            {/* Form Layout */}
            <div className="flex flex-col md:flex-row gap-6 h-full">
              {/* Image Upload */}
              <div className="w-full md:w-1/2 flex flex-col gap-3">
                <label className="text-sm font-semibold">Upload Image</label>
                <input type="file" className="border p-2 rounded-md w-full" />
              </div>

              {/* Inputs (scrollable if long) */}
              <div className="w-full md:w-1/2 flex flex-col gap-3 overflow-y-auto max-h-[70vh] pr-2">
                <label className="text-sm font-semibold">Name</label>
                <input
                  type="text"
                  className="border p-2 rounded-md placeholder:font-light"
                  placeholder="Product Name"
                />

                <label className="text-sm font-semibold">Size</label>
                <input
                  type="text"
                  className="border p-2 rounded-md placeholder:font-light"
                  placeholder="Size"
                />

                <label className="text-sm font-semibold">Color</label>
                <input
                  type="text"
                  className="border p-2 rounded-md placeholder:font-light"
                  placeholder="Color"
                />

                <label className="text-sm font-semibold">Condition</label>
                <input
                  type="text"
                  className="border p-2 rounded-md placeholder:font-light"
                  placeholder="Product's Condition"
                />

                <label className="text-sm font-semibold">Details</label>
                <input
                  type="text"
                  className="border p-2 rounded-md placeholder:font-light"
                  placeholder="Product's Details"
                />

                <label className="text-sm font-semibold">Flaws</label>
                <input
                  type="text"
                  className="border p-2 rounded-md placeholder:font-light"
                  placeholder="Product's Flaws"
                />

                <label className="text-sm font-semibold">Location</label>
                <input
                  type="text"
                  className="border p-2 rounded-md placeholder:font-light"
                  placeholder="Location"
                />

                <button className="mt-4 bg-gradient-to-r from-[#f56b27] to-[#eb8e5f] text-white py-2 rounded-md">
                  Submit Trade
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default ProductTradePage;
