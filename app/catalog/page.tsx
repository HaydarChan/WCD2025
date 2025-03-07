"use client"
// Library Import
import { useState } from "react";
// Components Import
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AuctionCard from "@/components/AuctionCard";
import TradeCard from "@/components/TradeCard";

const products = [
  {
    name: "Urban Graphic Tee",
    image: "/catalog/product/produk1.png",
    price: "250.000",
    from: "300.000",
    discount: "10",
    store: "StreetWear Co.",
    place: "Bandung",
    ongkir: 0,
  },
  {
    name: "Vintage Oversized Tee",
    image: "/catalog/product/produk2.png",
    price: "300.000",
    from: "400.000",
    discount: "15",
    store: "Retro Styles",
    place: "Jakarta",
    ongkir: 1,
  },
  {
    name: "Minimalist Logo Tee",
    image: "/catalog/product/produk3.png",
    price: "220.000",
    from: "350.000",
    discount: "5",
    store: "Minimal Brand",
    place: "Surabaya",
    ongkir: 0,
  },
  {
    name: "Color Block Tee",
    image: "/catalog/product/produk4.png",
    price: "340.000",
    from: "360.000",
    discount: "20",
    store: "ColorPop Studio",
    place: "Yogyakarta",
    ongkir: 1,
  },
];

const auctions = [
  {
    name: "Rare Sneakers 'X-Series'",
    image: "/catalog/auction/auction2.png",
    openBid: "150.000",
    currentBid: "210.000",
    timeLeft: 10800,
    store: "Sneaker Hub",
    place: "Surabaya",
    ongkir: 0,
  },
  {
    name: "Graphic Long Sleeve",
    image: "/catalog/auction/auction3.png",
    openBid: "300.000",
    currentBid: "450.000",
    timeLeft: 7200,
    store: "Urban Line",
    place: "Bandung",
    ongkir: 1,
  },
];

const trades = [
  {
    name: "Black Cargo Pants",
    image: "/catalog/trade/trade1.png",
    store: "Urban Outfit",
    place: "Marketplace",
    status: "accepted",
  },
  {
    name: "Striped Oversized Shirt",
    image: "/catalog/trade/trade2.png",
    store: "Minimal Wardrobe",
    place: "Official Store",
    status: "pending",
  },
  {
    name: "Denim Jacket Vintage",
    image: "/catalog/trade/trade3.png",
    store: "Retro Vibes",
    place: "Marketplace",
    status: "denied",
  },
  {
    name: "Classic White Sneakers",
    image: "/catalog/trade/trade4.png",
    store: "Sneaker World",
    place: "Official Store",
    status: "pending",
  },
];


const page = () => {
  const [productList, setProductList] = useState(products)
  const [auctionList, setAuctionList] = useState(auctions)
  const [tradeList, setTradeList] = useState(trades)

  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />

      {/* Page Content */}
      <div className="px-10 md:px-20 lg:px-36 py-10 flex flex-col">
        {/* Title */}
        <p className="pr-1 w-fit relative inline-block pb-2 md:pb-4 text-3xl lg:text-5xl">
          Your
          <span className="font-garamond italic font-bold text-4xl lg:text-6xl ml-2 md:ml-3 tracking-tight bg-gradient-to-r from-[#9746f0] to-[#de3f24] text-transparent bg-clip-text">
            catalog
          </span>
        </p>
        <div className="w-[150px] h-[1px] bg-neutral-400 mb-8" />
        {/* Product Category */}
        <div className="flex flex-col gap-y-12">
          {/* Product */}
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold text-neutral-600">Product</p>
              <p className="text-sm text-gray-700">
                List your items for direct sale at a fixed price. Perfect for sellers who want a simple, straightforward transaction with instant purchases.
              </p>
            </div>
            <div className="w-full overflow-x-auto scrollbar-hide relative">
              <div className="flex gap-5 pt-5 min-w-[1000px] overflow-visible items-stretch">
                
                {/* Add Product Button */}
                <div className="flex items-center justify-center border-2 border-orange-500 border-dashed rounded-xl bg-orange-50/25 hover:bg-orange-100/25 min-w-[200px]">
                  <Button className="text-3xl bg-transparent shadow-none text-orange-400 hover:bg-transparent flex flex-col items-center justify-center text-center gap-1">
                    <span>+</span>
                    <span className="text-base">Add a Product</span>
                  </Button>
                </div>

                {/* Product Cards */}
                {productList.map((item, index) => (
                  <ProductCard
                    key={index}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    from={item.from}
                    discount={item.discount}
                    store={item.store}
                    place={item.place}
                    ongkir={item.ongkir}
                  />
                ))}
              </div>
            </div>
          </div>
        
          <div className="w-full h-[1px] bg-neutral-400/25" />

          {/* Auction */}
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold text-neutral-600">Auction</p>
              <p className="text-sm text-gray-700">
                Create an auction to let buyers compete for your item. Set your starting bid and watch the offers roll in until the highest bidder wins.
              </p>
            </div>
            <div className="w-full overflow-x-auto scrollbar-hide relative">
              <div className="flex gap-5 pt-5 min-w-[1000px] overflow-visible items-stretch">

                {/* Add Auction Product Button */}
                <div className="flex items-center justify-center border-2 border-orange-500 border-dashed rounded-xl bg-orange-50/25 hover:bg-orange-100/25 min-w-[200px]">
                  <Button className="bg-transparent shadow-none text-orange-400 hover:bg-transparent flex flex-col items-center justify-center text-center gap-1">
                    <span className="text-3xl">+</span>
                    <span className="text-base">Add an Auction Product</span>
                  </Button>
                </div>

                {/* Auction Cards */}
                {auctionList.map((item, index) => (
                  <AuctionCard
                    key={index}
                    name={item.name}
                    image={item.image}
                    openBid={item.openBid}
                    currentBid={item.currentBid}
                    timeLeft={item.timeLeft}
                    store={item.store}
                    place={item.place}
                    ongkir={item.ongkir}
                  />
                ))}  

              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-neutral-400/25" />

          {/* Trade */}
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold text-neutral-600">Trade</p>
              <p className="text-sm text-gray-700">
                Offer your items for trade and connect with other sellers to exchange goods. Ideal for those looking to swap instead of sell.
              </p>
            </div>
            <div className="w-full overflow-x-auto scrollbar-hide relative">
              <div className="flex gap-5 pt-5 min-w-[1000px] overflow-visible items-stretch">

                {/* Add Trade Product Button */}
                <div className="flex items-center justify-center border-2 border-orange-500 border-dashed rounded-xl bg-orange-50/25 hover:bg-orange-100/25 min-w-[200px]">
                  <Button className="bg-transparent shadow-none text-orange-400 hover:bg-transparent flex flex-col items-center justify-center text-center gap-1">
                    <span className="text-3xl">+</span>
                    <span className="text-base">Add a Trade Product</span>
                  </Button>
                </div>

                {/* Trade Cards */}
                {tradeList.map((item, index) => (
                  <TradeCard
                    key={index}
                    name={item.name}
                    image={item.image}
                    store={item.store}
                    place={item.place}
                    // @ts-expect-error ini harusnya bisa string
                    status={item.status}
                  />
                ))}

              </div>
            </div>
          </div> 
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default page;
