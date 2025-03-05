import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AdsPic1 from "@/public/aads.png";
import Image from "next/image";

const Ads = () => {
  return (
    <section>
      <div className="flex flex-col py-10 px-6 items-center">
        <Carousel className="w-[80%]">
          <CarouselContent>
            <CarouselItem>
              <Image src={AdsPic1} alt="Ads" />
            </CarouselItem>
            <CarouselItem>
              <Image src={AdsPic1} alt="Ads" />
            </CarouselItem>
            <CarouselItem>
              <Image src={AdsPic1} alt="Ads" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>{" "}
      </div>
    </section>
  );
};

export default Ads;
