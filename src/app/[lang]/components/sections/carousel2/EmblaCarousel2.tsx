"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarousel2ArrowButtons";
import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import Video from "./Video";

type PropType = {
  slides: {
    url: string;
    alt: string;
    format: string;
    key: string;
    width: number;
    height: number;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRed, emblaApi] = useEmblaCarousel(options);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="max-w-full mx-auto">
      <div className="overflow-hidden" ref={emblaRed}>
        <div className="flex">
          {slides.map((historie) => (
            <Video key={historie.key} historie={historie} />
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-center -translate-y-32 relative z-50">
        <div className="flex justify-between w-full">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
