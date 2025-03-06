"use client";
import { FiHome, FiMapPin } from "react-icons/fi";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  from?: string;
  discount?: string;
  store: string;
  place: string;
  ongkir: number;
}

const ProductCard = ({
  name,
  image,
  price,
  from,
  discount,
  store,
  place,
  ongkir,
}: ProductCardProps) => {
  return (
    <div className="relative border border-[#bebebc]/50 rounded-lg hover:shadow-md hover:border-[#f56b27] duration-200 bg-white overflow-hidden">
      <Link href="/product">
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-[#f56b27] to-[#eb8e5f] text-white text-xs font-semibold px-2 py-1 rounded-xl">
            {discount}% <span className="font-light"> OFF</span>
          </div>
        )}

        {/* Product Image */}
        <img src={image} alt={name} className="w-full object-contain" />

        {/* Content */}
        <div className="p-4">
          <h2 className="text-sm lg:text-base font-semibold mb-2">{name}</h2>

          <div className="flex flex-col -space-y-1 mb-2">
            <p className="text-base lg:text-lg font-bold">Rp{price}</p>
            {from && (
              <p className="text-xs lg:text-sm line-through text-red-500">
                Rp{from}
              </p>
            )}
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

          {ongkir == 1 && (
            <p className="text-xs lg:text-sm text-[#f56b27] bg-[#f56b27]/10 font-light w-fit px-2 py-1 rounded-full mt-3 lg:mt-5">
              Free Ongkir
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
