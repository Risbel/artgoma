"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarousel2ArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { cn } from "@/lib/utils";
import Image from "next/image";

type PropType = {
  slides: {
    url: string;
    alt: string;
    key: string;
    width: number;
    height: number;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRed, emblaApi] = useEmblaCarousel(options);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off("slidesInView", updateSlidesInView);
      }
      const inView = emblaApi.slidesInView().filter((index) => !slidesInView.includes(index));
      return slidesInView.concat(inView);
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateSlidesInView(emblaApi);
    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("reInit", updateSlidesInView);
  }, [emblaApi, updateSlidesInView]);

  return (
    <div className="max-w-[80%] mx-auto">
      <div ref={emblaRed}>
        <div className="flex gap-16 -ml-slide-spacing">
          {slides.map((img, i) => (
            <Image
              className="h-[550px] w-[270px] rounded-xl"
              src={img.url}
              width={img.width}
              height={img.height}
              alt={img.alt}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center px-8">
        <div className="hidden">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex w-full justify-center gap-6 py-8">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "bg-black border border-red-600 rounded-full h-4 w-4",
                index === selectedIndex && "border-4"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
