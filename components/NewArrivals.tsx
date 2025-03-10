import ProductCard from "./ProductCard";

const NewArrivals = () => {
  return (
    <section>
      <div className="px-10 md:px-20 lg:px-36 py-10 flex flex-col">
        <div className="flex justify-between">
          <p className="pr-1 w-fit relative inline-block pb-2 md:pb-4 text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#9746f0] after:to-[#de3f24]">
            Check out our
            <span className="font-garamond italic font-bold text-xl ml-2 bg-gradient-to-r from-[#9746f0] to-[#de3f24] inline-block text-transparent bg-clip-text tracking-tight">
              New Arrivals
            </span>
          </p>
          <button className="text-xs md:text-sm px-3 md:px-5 font-light border-[1px] rounded-full w-fit border-[#9e9e9c] text-[#595957]">
            See more
          </button>
        </div>
        <div className="w-full overflow-x-auto scrollbar-hide relative">
          <div className="flex gap-5 pt-5 min-w-[1000px] overflow-visible">
          <ProductCard
            name="New Rules Shirt"
            image="/home/product1.png"
            price="120.000"
            from="200.000"
            discount="40"
            store="Big Store"
            place="West Jakarta"
            ongkir={1}
          />
          <ProductCard
            name="Vintage Denim Jacket"
            image="/home/product2.png"
            price="350.000"
            from="500.000"
            discount="30"
            store="Retro Wear"
            place="Bandung"
            ongkir={0}
          />
          <ProductCard
            name="Casual Sneakers"
            image="/home/product3.png"
            price="550.000"
            from="750.000"
            discount="25"
            store="Footwear Hub"
            place="Surabaya"
            ongkir={1}
          />
          <ProductCard
            name="Elegant Handbag"
            image="/home/product4.png"
            price="700.000"
            from="1.000.000"
            discount="30"
            store="Luxury Bags"
            place="South Jakarta"
            ongkir={1}
          />
          <ProductCard
            name="Sporty Watch"
            image="/home/product5.png"
            price="850.000"
            from="1.200.000"
            discount="29"
            store="Timepiece Central"
            place="Medan"
            ongkir={0}
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
