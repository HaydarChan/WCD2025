"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const orders = [
  {
    id: 1,
    productName: "Classic Leather Boots",
    image: "/history/history1.png",
    orderNumber: "PK0010820566",
    status: "Finished",
    price: "$150.00",
    buttonLabel: "Show Invoice",
    buttonStyle: "border border-gray-300 text-black",
  },
  {
    id: 2,
    productName: "Slim Fit Denim Jacket",
    image: "/history/history2.png",
    orderNumber: "PK0010820567",
    status: "Cancelled",
    price: "$95.50",
    buttonLabel: "Buy Again",
    buttonStyle: "bg-[#f56b27] text-white",
  },
  {
    id: 3,
    productName: "Minimalist Cotton Hoodie",
    image: "/history/history3.png",
    orderNumber: "PK0010820568",
    status: "On Process",
    price: "$75.25",
    buttonLabel: "Track Progress",
    buttonStyle: "border border-gray-300 text-black",
  },
  {
    id: 4,
    productName: "Elegant Wool Blazer",
    image: "/history/history4.png",
    orderNumber: "PK0010820569",
    status: "Finished",
    price: "$210.99",
    buttonLabel: "Show Invoice",
    buttonStyle: "border border-gray-300 text-black",
  },
  {
    id: 5,
    productName: "Vintage Graphic T-Shirt",
    image: "/history/history5.png",
    orderNumber: "PK0010820570",
    status: "Cancelled",
    price: "$45.60",
    buttonLabel: "Buy Again",
    buttonStyle: "bg-[#f56b27] text-white",
  },
];

const HistoryPage = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [status, setStatus] = useState("");

  const handleClear = () => {
    setFromDate("");
    setToDate("");
    setStatus("");
  };
  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />
      <div className="px-10 md:px-20 lg:px-36 py-10">
        <p className="pr-1 w-fit relative inline-block pb-2 md:pb-4 text-3xl lg:text-5xl">
          Order
          <span className="font-garamond italic font-bold text-4xl lg:text-6xl ml-2 md:ml-3 tracking-tight">
            History
          </span>
        </p>

        <div className="border-2 border-stone-200 rounded-lg p-4 md:p-6 shadow-sm bg-stone-100 w-full mt-5">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* From Date */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium mb-1">From Date</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm focus:outline-none bg-stone-50 font-light"
                placeholder="Select Date"
              />
            </div>

            {/* To Date */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium mb-1">To Date</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm focus:outline-none bg-stone-50 font-light"
                placeholder="Select Date"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium mb-1">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm focus:outline-none bg-stone-50 font-light"
              >
                <option value="" className="bg-stone-50 font-light">
                  Please select...
                </option>
                <option value="pending" className="bg-stone-50 font-light">
                  Pending
                </option>
                <option value="on process" className="bg-stone-50 font-light">
                  On Process
                </option>
                <option value="finished" className="bg-stone-50 font-light">
                  Finished
                </option>
                <option value="cancelled" className="bg-stone-50 font-light">
                  Cancelled
                </option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex items-end gap-2 w-full lg:w-auto">
              <button
                onClick={handleClear}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm"
              >
                Clear
              </button>
              <button className="bg-[#f56b27] text-white rounded-md px-4 py-2 text-sm">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 border-2 border-stone-200 p-6 rounded-lg shadow-md w-full mt-5">
          <h1 className="text-lg font-semibold mb-6">Order History List</h1>

          {/* Header */}
          <div className="hidden lg:grid grid-cols-6 text-xs text-gray-500 uppercase mb-2">
            <div className="col-span-2">Product</div>
            <div>Order Number</div>
            <div>Status</div>
            <div>Price</div>
            <div></div>
          </div>

          {/* Orders */}
          <div className="divide-y">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex -space-y-2 flex-col lg:grid lg:grid-cols-6 gap-4 py-4 lg:items-center"
              >
                {/* Product */}
                <div className="flex items-center gap-4 col-span-2">
                  <Image
                    src={order.image}
                    alt={order.productName}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                  <p className="text-sm">{order.productName}</p>
                </div>

                {/* Order Number */}
                <div className="text-sm font-light pt-3 lg:pt-0">
                  {order.orderNumber}
                </div>

                {/* Status */}
                <div className="text-sm flex">
                  {order.status === "Finished" && (
                    <span className="bg-green-200 px-3 py-1 rounded-full text-green-600">
                      Finished
                    </span>
                  )}
                  {order.status === "Cancelled" && (
                    <span className="bg-red-200 px-3 py-1 rounded-full text-red-600">
                      Cancelled
                    </span>
                  )}
                  {order.status === "On Process" && (
                    <span className="bg-yellow-200 px-3 py-1 rounded-full text-yellow-600">
                      On Process
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="text-sm font-bold">{order.price}</div>

                {/* Action Button */}
                <div className="pt-3 lg:pt-0 flex justify-end lg:justify-center">
                  <button
                    className={`text-xs px-4 py-2 rounded-full ${order.buttonStyle}`}
                  >
                    {order.buttonLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HistoryPage;
