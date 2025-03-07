import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TradeCard from "@/components/TradeCard";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FaFilter } from "react-icons/fa6";

const page = () => {
  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />
      <div className="px-10 md:px-20 lg:px-36 py-10 flex flex-col">
        <div className="-space-y-1 text-center pt-5">
          <h1 className="text-3xl md:text-5xl lg:text-7xl tracking-tight">
            Give clothes a second life,
          </h1>
          <h1 className="font-garamond font-light italic text-5xl md:text-6xl lg:text-8xl">
            <span className="bg-gradient-to-r from-[#9746f0] to-[#de3f24] inline-block text-transparent bg-clip-text mr-2 md:mr-4">
              trade
            </span>
            yours today!
          </h1>
        </div>

        <div className="flex justify-between mt-10">
          <p className="pr-1 w-fit relative inline-block pb-2 md:pb-4 text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#9746f0] after:to-[#de3f24]">
            Your
            <span className="font-garamond italic font-bold text-xl ml-2 bg-gradient-to-r from-[#9746f0] to-[#de3f24] inline-block text-transparent bg-clip-text tracking-tight">
              Trades
            </span>
          </p>
        </div>
        <div className="w-full overflow-x-auto scrollbar-hide relative mt-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <TradeCard
              name="New Rules Shirt"
              image="/product1.png"
              store="Big Store"
              place="West Jakarta"
              status="pending"
            />
            <TradeCard
              name="New Rules Shirt"
              image="/product1.png"
              store="Big Store"
              place="West Jakarta"
              status="accepted"
            />
            <TradeCard
              name="New Rules Shirt"
              image="/product1.png"
              store="Big Store"
              place="West Jakarta"
              status="denied"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-14">
          <p className="pr-1 w-fit relative inline-block pb-2 md:pb-4 text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#9746f0] after:to-[#de3f24]">
            Available
            <span className="font-garamond italic font-bold text-xl ml-2 bg-gradient-to-r from-[#9746f0] to-[#de3f24] inline-block text-transparent bg-clip-text tracking-tight">
              Trades
            </span>
          </p>
          <div className="flex gap-3 items-center">
            <FaFilter className="text-[#9e9e9c]" />
            <Select>
              <SelectTrigger className="w-fit rounded-full border-[#9e9e9c] text-[#595957]">
                <SelectValue placeholder="Men's Fashion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="men">Men's Fashion</SelectItem>
                <SelectItem value="women">Women's Fashion</SelectItem>
                <SelectItem value="acc">Accessories</SelectItem>
                <SelectItem value="shoes">Shoes</SelectItem>
                <SelectItem value="out">Outwear</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5 gap-3">
          <TradeCard
            name="New Rules Shirt"
            image="/product1.png"
            store="Big Store"
            place="West Jakarta"
          />
          <TradeCard
            name="New Rules Shirt"
            image="/product1.png"
            store="Big Store"
            place="West Jakarta"
          />
          <TradeCard
            name="New Rules Shirt"
            image="/product1.png"
            store="Big Store"
            place="West Jakarta"
          />
          <TradeCard
            name="New Rules Shirt"
            image="/product1.png"
            store="Big Store"
            place="West Jakarta"
          />
          <TradeCard
            name="New Rules Shirt"
            image="/product1.png"
            store="Big Store"
            place="West Jakarta"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
