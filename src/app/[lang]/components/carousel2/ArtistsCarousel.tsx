"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import * as images from "./imgs-artists.json";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { align: "center", loop: true };

const ArtistsCarousel = () => {
  const [emblaRef] = useEmblaCarousel(OPTIONS);
  const { imagesArtists } = images;

  return (
    <div className="embla max-w-full mx-auto bg-[#1c1f24] py-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {imagesArtists.map((img) => (
            <div className="flex-none w-5/12 md:w-1/6 lg:w-1/5 px-4 mb-4" key={img.key}>
              <div className="relative rounded-xl overflow-hidden group">
                <Image className="rounded-xl" width={img.width} height={img.height} src={img.url} alt={img.alt} />
                <p className="absolute bottom-1 md:bottom-4 right-0 left-0 z-20 text-white text-center opacity-0 group-hover:opacity-100 duration-300 text-xs md:text-base font-light">
                  {img.artistName}
                </p>
                <div className="absolute bg-gradient-to-t from-black to-black/70 w-full h-64 group-hover:-translate-y-8 md:group-hover:-translate-y-16 duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsCarousel;
