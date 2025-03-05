import AuctionCard from "./AuctionCard";

const TodayAuction = () => {
  return (
    <section>
      <div className="px-10 md:px-20 lg:px-36 py-5 flex flex-col">
        <div className="flex justify-between">
          <p className="pr-1 w-fit relative inline-block pb-2 md:pb-4 text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#9746f0] after:to-[#de3f24]">
            Don't miss
            <span className="font-garamond italic font-bold text-xl ml-2 bg-gradient-to-r from-[#9746f0] to-[#de3f24] inline-block text-transparent bg-clip-text tracking-tight">
              Today's Auction!
            </span>
          </p>
          <button className="text-xs md:text-sm px-3 md:px-5 font-light border-[1px] rounded-full w-fit border-[#9e9e9c] text-[#595957]    ">
            See more
          </button>
        </div>

        <div className="w-full overflow-x-auto scrollbar-hide relative">
          <div className="flex gap-5 pt-5 min-w-[1000px] overflow-visible">
            <AuctionCard
              name="Vintage Leather Bag"
              image="/product1.png"
              openBid="150.000"
              currentBid="200.000"
              timeLeft={70000} // 1 hour
              store="ReWear Jakarta"
              place="Jakarta, Indonesia"
              ongkir={1}
            />
            <AuctionCard
              name="Vintage Leather Bag"
              image="/product1.png"
              openBid="150.000"
              currentBid="200.000"
              timeLeft={70000} // 1 hour
              store="ReWear Jakarta"
              place="Jakarta, Indonesia"
              ongkir={1}
            />
            <AuctionCard
              name="Vintage Leather Bag"
              image="/product1.png"
              openBid="150.000"
              currentBid="200.000"
              timeLeft={70000} // 1 hour
              store="ReWear Jakarta"
              place="Jakarta, Indonesia"
              ongkir={1}
            />
            <AuctionCard
              name="Vintage Leather Bag"
              image="/product1.png"
              openBid="150.000"
              currentBid="200.000"
              timeLeft={70000} // 1 hour
              store="ReWear Jakarta"
              place="Jakarta, Indonesia"
              ongkir={1}
            />
            <AuctionCard
              name="Vintage Leather Bag"
              image="/product1.png"
              openBid="150.000"
              currentBid="200.000"
              timeLeft={70000} // 1 hour
              store="ReWear Jakarta"
              place="Jakarta, Indonesia"
              ongkir={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayAuction;
