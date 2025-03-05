import { PiMedalLight } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import Camera from "@/public/camera-with-flash_1f4f8.png";
import Dress from "@/public/womans-clothes_1f45a.png";
import News from "@/public/page-with-curl_1f4c3.png";
import Pack from "@/public/luggage_1f9f3.png";
import Image from "next/image";
import Bg from "@/public/fashion.png";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center justify-center p-16">
          <div className="relative p-[1px] rounded-full bg-gradient-to-r from-[#9746f0] to-[#de3f24] w-fit">
            <div className="flex gap-3 items-center justify-center bg-gradient-to-r from-[#e4d9ef] to-[#f4e0dd] px-5 py-2 w-fit rounded-full">
              <PiMedalLight className="text-[#9746f0]" />
              <p className="text-xs md:text-sm bg-gradient-to-r from-[#9746f0] to-[#de3f24] inline-block text-transparent bg-clip-text tracking-tight">
                #1 Sustainable Fashion E-Commerce
              </p>
            </div>
          </div>

          <div className="-space-y-1 text-center pt-5">
            <h1 className="text-3xl md:text-5xl lg:text-7xl tracking-tight">
              Your closet’s side hustle
            </h1>
            <h1 className="font-garamond font-light italic text-3xl md:text-5xl lg:text-7xl">
              made easy with{" "}
              <span className="bg-gradient-to-r from-[#9746f0] to-[#de3f24] inline-block text-transparent bg-clip-text">
                ReWear
              </span>
            </h1>
          </div>
          <div className="pt-6 space-y-1 font-light text-xs md:text-sm text-gray-700">
            <p className="flex items-center justify-center gap-2">
              <Image src={Camera} alt="Icon" className="w-4 h-4" />
              Snap & Sell your pre-loved items in seconds.
            </p>
            <p className="flex items-center justify-center gap-2">
              <Image src={Dress} alt="Icon" className="w-4 h-4" />
              Shop a variety of unique, sustainable fashion.
            </p>
            <p className="flex items-center justify-center gap-2 ">
              <Image src={News} alt="Icon" className="w-4 h-4" />
              Stay informed with the latest in sustainable fashion.
            </p>
            <p className="flex items-center justify-center gap-2">
              <Image src={Pack} alt="Icon" className="w-4 h-4" />
              Consign easily and let us handle the selling.
            </p>
          </div>
          <button
            className="flex items-center text-sm md:text-base mt-12 animate-bounce-slow gap-2 justify-center bg-gradient-to-t from-[#f56b27] to-[#eb8e5f] rounded-full text-white px-5 py-3 shadow-lg z-10"
            style={{
              boxShadow: "0 0 20px rgba(245, 107, 39, 0.6)",
            }}
          >
            Shop Now <IoMdArrowDropdown />
          </button>
        </div>

        <div className="relative w-full h-[1000px] -mt-28 overflow-hidden">
          <Image src={Bg} alt="Bg" fill className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
