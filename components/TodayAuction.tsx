import AuctionCard from "./AuctionCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TodayAuction = () => {
  return (
    <section>
      <div className="px-10 md:px-20 lg:px-36 py-10 flex flex-col">
        <div className="flex justify-center">
          <p className="pr-1 w-fit relative inline-block pb-2 md:pb-4 text-2xl md:text-3xl lg:text-5xl">
            Don't miss
            <span className="font-garamond italic font-bold text-3xl md:text-4xl lg:text-6xl ml-2 md:ml-3 bg-gradient-to-r from-[#9746f0] to-[#de3f24] inline-block text-transparent bg-clip-text tracking-tight">
              Today's Auction!
            </span>
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[85%] mx-auto md:w-full mt-4"
        >
          <CarouselContent>
            <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3">
              <div className="p-1 h-full">
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
            </CarouselItem>
            <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3">
              <div className="p-1 h-full">
                <AuctionCard
                  name="Vintage Leather Bag"
                  image="/product1.png"
                  openBid="150.000"
                  currentBid="200.000"
                  timeLeft={70000} // 1 hour
                  store="ReWear Jakarta"
                  place="Jakarta, Indonesia"
                  ongkir={0}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3">
              <div className="p-1 h-full">
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
            </CarouselItem>
            <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3">
              <div className="p-1 h-full">
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
            </CarouselItem>
            <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3">
              <div className="p-1 h-full">
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
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* <div className="w-full overflow-x-auto scrollbar-hide relative">
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
        </div> */}
      </div>
    </section>
  );
};

export default TodayAuction;
