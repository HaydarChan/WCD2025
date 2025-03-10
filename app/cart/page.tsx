import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Product from "@/public/product1.png";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { FiTag } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";

const page = () => {
  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />
      <div className="px-10 md:px-20 lg:px-36 py-10 flex flex-col">
        <p className="pr-1 w-fit relative inline-block pb-2 md:pb-4 text-3xl lg:text-5xl">
          Your
          <span className="font-garamond italic font-bold text-4xl lg:text-6xl ml-2 md:ml-3 tracking-tight">
            cart
          </span>
        </p>
        <div className="grid lg:grid-cols-2 gap-3">
        <div className="rounded-lg border-2 border-stone-200 w-full flex flex-col p-4">
          {/* Item 1: Classic Leather Boots */}
          <div className="grid grid-cols-[20%_80%] gap-3 border-b-2 border-stone-200 pb-3">
            <img
              src="/history/history1.png"
              alt="Classic Leather Boots"
              className="rounded-lg h-full object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm md:text-base font-semibold">
                    Classic Leather Boots
                  </h1>
                  <FaTrashAlt className="mr-3 text-red-500" />
                </div>
                <p className="font-light text-xs md:text-sm">
                  Size: <span className="font-light text-gray-500"> 42 </span>
                </p>
                <p className="font-light text-xs md:text-sm">
                  Color: <span className="font-light text-gray-500">Brown</span>
                </p>
              </div>
              <h1 className="pt-5 font-semibold text-base md:text-xl">
                Rp1.500.000
              </h1>
            </div>
          </div>

          {/* Item 2: Slim Fit Denim Jacket */}
          <div className="grid grid-cols-[20%_80%] gap-3 border-b-2 border-stone-200 py-3">
            <img
              src="/history/history2.png"
              alt="Slim Fit Denim Jacket"
              className="rounded-lg h-full object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm md:text-base font-semibold">
                    Slim Fit Denim Jacket
                  </h1>
                  <FaTrashAlt className="mr-3 text-red-500" />
                </div>
                <p className="font-light text-xs md:text-sm">
                  Size: <span className="font-light text-gray-500"> Medium </span>
                </p>
                <p className="font-light text-xs md:text-sm">
                  Color: <span className="font-light text-gray-500">Dark Blue</span>
                </p>
              </div>
              <h1 className="pt-5 font-semibold text-base md:text-xl">
                Rp950.000
              </h1>
            </div>
          </div>

            {/* Item 3: Minimalist Cotton Hoodie */}
            <div className="grid grid-cols-[20%_80%] gap-3 pt-3">
              <img
                src="/history/history3.png"
                alt="Minimalist Cotton Hoodie"
                className="rounded-lg h-full object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-sm md:text-base font-semibold">
                      Minimalist Cotton Hoodie
                    </h1>
                    <FaTrashAlt className="mr-3 text-red-500" />
                  </div>
                  <p className="font-light text-xs md:text-sm">
                    Size: <span className="font-light text-gray-500"> Large </span>
                  </p>
                  <p className="font-light text-xs md:text-sm">
                    Color: <span className="font-light text-gray-500">Heather Gray</span>
                  </p>
                </div>
                <h1 className="pt-5 font-semibold text-base md:text-xl">
                  Rp750.000
                </h1>
              </div>
            </div>
          </div>


          <div className="h-fit rounded-lg border-[1px] border-stone-200  w-full flex flex-col p-4 space-y-3">
            <h1 className="font-bold text-xl"> Order Summary </h1>
            <div className="flex justify-between items-center">
              <p className="font-light text-sm">Subtotal</p>
              <h1 className="font-semibold">Rp3.200.000</h1>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-light text-sm">Discount (-20%)</p>
              <h1 className="font-semibold text-red-500">-Rp640.000</h1>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-light text-sm">Delivery Fee</p>
              <h1 className="font-semibold">Rp30.000</h1>
            </div>
            <hr className="bg-stone-200 w-full"></hr>
            <div className="flex justify-between items-center">
              <p>Total</p>
              <h1 className="font-semibold text-lg">Rp2.590.000</h1>
            </div>
            <div className="grid grid-cols-[70%_30%]">
              <div className="flex items-center flex-1 bg-gray-100 px-4 py-2 rounded-full">
                <FiTag className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="bg-transparent outline-none text-sm w-full placeholder-gray-400 placeholder:font-light"
                />
              </div>
              <div className="flex justify-end">
                <button className="w-[95%] text-sm text-[#f56b27] py-2 px-3 md:px-5 border-[1px] border-[#f56b27] rounded-full">
                  Apply
                </button>
              </div>
            </div>
            <button className="flex items-center gap-1 justify-center text-white py-3 px-3 md:px-5 bg-gradient-to-r from-[#f56b27] to-[#eb8e5f] rounded-full">
              Go to Cechkout <IoIosArrowRoundForward className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
