"use client";
// Library Import
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Casual", image: "/casual.png" },
  { name: "Formal", image: "/formal.png" },
  { name: "Party", image: "/party.png" },
  { name: "Sport", image: "/gym.png" },
];

const BrowseStyle = () => {
  return (
    <section className="px-10 md:px-20 lg:px-36 py-10">
      <div className="rounded-xl py-10 px-6">
        <div className="flex items-center justify-center pb-10">
          <p className="text-[#5f523e] pr-1 w-fit relative inline-block text-2xl md:text-3xl lg:text-5xl tracking-tighter">
            Browse by your
            <span className="font-garamond italic font-bold text-3xl md:text-4xl lg:text-6xl ml-1 md:ml-3 bg-gradient-to-r from-[#b04e1d] to-[#7b3410] inline-block text-transparent bg-clip-text tracking-tight">
              Outfit Style
            </span>
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
          {/* Row 1 */}
          <Link href={"/category"} className="relative group rounded-lg overflow-hidden md:col-span-4">
            <Image
              src={categories[0].image}
              alt={categories[0].name}
              width={300}
              height={200}
              className="w-full h-40 object-cover md:h-64"
            />
            <div className="absolute inset-0 group-hover:bg-black/60 transition duration-300"></div>
            <span className="font-garamond italic absolute top-3 left-5 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#b04e1d] to-[#7b3410] inline-block text-transparent bg-clip-text group-hover:text-white transition duration-300">
              {categories[0].name}
            </span>
          </Link>

          <Link href={"/category"} className="relative group rounded-lg overflow-hidden md:col-span-8">
            <Image
              src={categories[1].image}
              alt={categories[1].name}
              width={300}
              height={200}
              className="w-full h-40 object-cover md:h-64"
            />
            <div className="absolute inset-0 group-hover:bg-black/60 transition duration-300"></div>
            <span className="absolute font-garamond italic top-3 left-5 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#b04e1d] to-[#7b3410] inline-block text-transparent bg-clip-text group-hover:text-white transition duration-300">
              {categories[1].name}
            </span>
          </Link>

          {/* Row 2 */}
          <Link href={"/category"} className="relative group rounded-lg overflow-hidden md:col-span-7">
            <Image
              src={categories[2].image}
              alt={categories[2].name}
              width={300}
              height={200}
              className="w-full h-40 object-cover md:h-64"
            />
            <div className="absolute inset-0 group-hover:bg-black/40 transition duration-300"></div>
            <span className="absolute font-garamond italic top-3 left-5 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#b04e1d] to-[#7b3410] inline-block text-transparent bg-clip-text group-hover:text-white transition duration-300">
              {categories[2].name}
            </span>
          </Link>

          <Link href={"/category"} className="relative group rounded-lg overflow-hidden md:col-span-5">
            <Image
              src={categories[3].image}
              alt={categories[3].name}
              width={300}
              height={200}
              className="w-full h-40 object-cover md:h-64"
            />
            <div className="absolute inset-0 group-hover:bg-black/40 transition duration-300"></div>
            <span className="absolute font-garamond italic top-3 left-5 text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#b04e1d] to-[#7b3410] inline-block text-transparent bg-clip-text group-hover:text-white transition duration-300">
              {categories[3].name}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseStyle;
