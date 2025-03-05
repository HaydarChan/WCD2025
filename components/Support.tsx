import * as React from "react";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar, FaRegStar } from "react-icons/fa";

// Dummy feedback data with randomized star ratings
const feedbacks = [
  {
    name: "Olivia R.",
    comment:
      "ReView makes it so easy to give my clothes a second life. I love how simple listing items is, and the community is so supportive!",
  },
  {
    name: "James P.",
    comment:
      "I’ve found some incredible pieces at great prices. Shopping sustainably has never been this seamless. Highly recommend ReView!",
  },
  {
    name: "Sophia L.",
    comment:
      "Selling on ReView was quick and hassle-free. I uploaded a few photos and my items sold faster than I expected. Love it!",
  },
  {
    name: "Ethan K.",
    comment:
      "What I love most about ReView is the focus on sustainability. It's refreshing to shop fashion that's good for the planet.",
  },
  {
    name: "Mia T.",
    comment:
      "The user experience is top-notch. Clean design, easy navigation, and a wide variety of unique, preloved styles.",
  },
  {
    name: "Noah S.",
    comment:
      "ReView helped me clear out my closet and make some extra cash while supporting eco-friendly fashion. Couldn't ask for more!",
  },
];

const Support = () => {
  // Memoize randomized star ratings for consistency
  const feedbacksWithStars = useMemo(() => {
    return feedbacks.map((feedback) => ({
      ...feedback,
      stars: Math.floor(Math.random() * 2) + 4, // Random between 3-5
    }));
  }, []);

  return (
    <section>
      <div className="bg-[#be8c72] p-10 flex flex-col items-center">
        <div className="flex gap-3 text-white pb-10 items-center justify-center">
          <h1 className="text-3xl md:text-5xl tracking-tight">Our happy</h1>
          <h1 className="text-4xl md:text-6xl font-garamond italic bg-gradient-to-r from-[#ffffff] to-[#e9e9e7] inline-block text-transparent bg-clip-text">
            customers
          </h1>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[80%] max-w-6xl"
        >
          <CarouselContent>
            {feedbacksWithStars.map((feedback, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full bg-[#e9e9e7] transition-transform duration-300 border-[#9a715b] border-[1px]">
                    <CardContent className="flex flex-col items-start justify-start p-6 h-full ">
                      {/* Randomized Stars */}
                      <div className="flex text-yellow-500 gap-1 pb-5">
                        {Array.from({ length: 5 }).map((_, starIndex) =>
                          starIndex < feedback.stars ? (
                            <FaStar key={starIndex} />
                          ) : (
                            <FaRegStar key={starIndex} />
                          )
                        )}
                      </div>
                      {/* Feedback */}
                      <p className="text-lg font-semibold">{feedback.name}</p>
                      <p className="text-sm  font-light">{feedback.comment}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Support;
