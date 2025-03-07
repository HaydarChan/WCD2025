"use client";
import { FiHome, FiMapPin } from "react-icons/fi";
import Link from "next/link";

interface TradeCardProps {
  name: string;
  image: string;
  store: string;
  place: string;
  status?: "accepted" | "pending" | "denied";
}

const TradeCard = ({ name, image, store, place, status }: TradeCardProps) => {
  return (
    <div className="relative border border-[#bebebc]/50 rounded-lg hover:shadow-md hover:border-[#f56b27] duration-200 bg-white overflow-hidden">
      {/* Trade Badge */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <div className="absolute top-10 right-1 w-[120px] bg-gradient-to-r from-[#f56b27] to-[#eb8e5f] text-white text-[10px] font-semibold uppercase text-center py-1 rotate-45 translate-x-8 -translate-y-4 shadow-md">
            Trade
          </div>
        </div>
      </div>

      <Link href="/producttrade">
        {/* Product Image */}
        <img src={image} alt={name} className="w-full object-contain" />

        {/* Content */}
        <div className="p-4">
          <h2 className="text-sm lg:text-base font-semibold mb-2">{name}</h2>

          <div className="text-xs lg:text-sm text-gray-500 mb-2 flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <FiHome size={14} />
              {store}
            </div>
            <div className="flex items-center gap-1">
              <FiMapPin size={14} />
              {place}
            </div>
          </div>

          {/* Status Badge */}
          {status && (
            <div
              className={`text-xs font-medium w-fit px-3 py-1 rounded-full mt-4
                ${
                  status === "accepted"
                    ? "bg-green-100 text-green-700"
                    : status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }
              `}
            >
              {status === "accepted"
                ? "Accepted"
                : status === "pending"
                ? "Pending"
                : "Denied"}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default TradeCard;
