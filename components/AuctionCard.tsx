"use client";
import { FiHome, FiMapPin } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";

interface AuctionCardProps {
  name: string;
  image: string;
  openBid: string;
  currentBid: string;
  timeLeft: number; // time left in seconds
  store: string;
  place: string;
  ongkir: number;
}

const AuctionCard = ({
  name,
  image,
  openBid,
  currentBid,
  timeLeft,
  store,
  place,
  ongkir,
}: AuctionCardProps) => {
  const [countdown, setCountdown] = useState(timeLeft);

  useEffect(() => {
    if (countdown <= 0) return;
    const interval = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  // Helper to format seconds into HH:MM:SS
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <Link href="/auction">
      <div className="relative grid grid-cols-[40%_60%] border border-[#bebebc]/50 rounded-lg hover:shadow-md hover:border-[#f56b27] duration-200 bg-white overflow-hidden h-full">
        {/* Time Left Badge */}
        <div className="absolute top-2 left-2 bg-gradient-to-r from-[#f56b27] to-[#eb8e5f] text-white text-xs font-semibold px-2 py-1 rounded-xl">
          {countdown > 0 ? formatTime(countdown) : "Ended"}
        </div>

        {/* Product Image */}
        <div className="h-full">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-4 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-sm lg:text-base font-semibold">{name}</h2>

            <div className="flex flex-col mb-3">
              <span className="text-xs lg:text-sm text-gray-700 font-light mt-2">
                Open Bid
              </span>
              <span className="text-xs lg:text-sm font-medium">
                Rp{openBid}
              </span>

              <span className="text-xs lg:text-sm text-gray-700 font-light mt-2">
                Current Bid
              </span>
              <span className="text-base lg:text-lg font-bold text-[#f56b27]">
                Rp{currentBid}
              </span>
            </div>

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

            {ongkir === 1 && (
              <p className="text-xs lg:text-sm text-[#f56b27] bg-[#f56b27]/10 font-light w-fit px-2 py-1 rounded-full mt-5">
                Free Ongkir
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AuctionCard;
