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
                  image="/home/auction1.png"
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
                  name="Classic Wristwatch"
                  image="/home/auction2.png"
                  openBid="500.000"
                  currentBid="650.000"
                  timeLeft={120000} // 2 hours
                  store="Timeless Pieces"
                  place="Bandung, Indonesia"
                  ongkir={0}
                />
              </div>
            </CarouselItem>

            <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3">
              <div className="p-1 h-full">
                <AuctionCard
                  name="Limited Edition Sneakers"
                  image="/home/auction3.png"
                  openBid="900.000"
                  currentBid="1.200.000"
                  timeLeft={180000} // 3 hours
                  store="Sneaker Hub"
                  place="Surabaya, Indonesia"
                  ongkir={1}
                />
              </div>
            </CarouselItem>

            <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3">
              <div className="p-1 h-full">
                <AuctionCard
                  name="Luxury Sunglasses"
                  image="/home/auction4.png"
                  openBid="250.000"
                  currentBid="400.000"
                  timeLeft={54000} // 45 minutes
                  store="Eyewear Central"
                  place="Bali, Indonesia"
                  ongkir={1}
                />
              </div>
            </CarouselItem>

            <CarouselItem className="basis-full lg:basis-1/2 xl:basis-1/3">
              <div className="p-1 h-full">
                <AuctionCard
                  name="Designer Handbag"
                  image="/home/auction5.png"
                  openBid="1.500.000"
                  currentBid="2.000.000"
                  timeLeft={240000} // 4 hours
                  store="Luxury Goods"
                  place="Medan, Indonesia"
                  ongkir={0}
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
