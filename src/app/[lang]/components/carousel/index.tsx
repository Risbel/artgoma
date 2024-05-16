import Image from "next/image";
import React from "react";
import { useCarouselBrands } from "./useCarouselBrands";

const LogoCarousel = () => {
  const carouselBrands = useCarouselBrands();

  return (
    <section
      id="2"
      className="bg-secondary w-full inline-flex flex-nowrap overflow-x-hidden pb-8 lg:h-64 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)]"
    >
      <ul className="flex items-center space-x-4 lg:space-x-16 animate-loop-scroll px-0 lg:px-8 [&_li]:mx-4 [&_img]:max-w-none">
        {carouselBrands.map((item, i) => {
          return (
            <li key={i}>
              <Image
                className="h-40 w-40 lg:h-60 lg:w-60"
                src={item.imageUrl}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </li>
          );
        })}
      </ul>
      <ul
        className="flex items-center space-x-4 lg:space-x-16 animate-loop-scroll px-0 lg:px-8 [&_li]:mx-4 [&_img]:max-w-none"
        aria-hidden="true"
      >
        {carouselBrands.map((item, i) => {
          return (
            <li key={i}>
              <Image
                className="h-40 w-40 lg:h-60 lg:w-60"
                src={item.imageUrl}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default LogoCarousel;
