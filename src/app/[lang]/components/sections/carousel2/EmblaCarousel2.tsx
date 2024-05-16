"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarousel2ArrowButtons";
import { useRef } from "react";

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

  const togglePlay = (video: any) => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="max-w-full mx-auto">
      <div className="overflow-hidden" ref={emblaRed}>
        <div className="flex">
          {slides.map((historie, index) => (
            <div
              className="flex-none h-[420px] md:h-[580px] w-4/5 md:w-[45%] lg:w-[30%] px-2 md:px-4 lg:px-6 py-6"
              key={index}
            >
              <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-red-950">
                <div className="flex justify-center relative h-full w-full">
                  <video
                    className="h-full w-full object-cover z-[200]"
                    controls
                    autoPlay={true}
                    loop
                    width={historie.width}
                    height={historie.height}
                    onClick={(e) => togglePlay(e.target)}
                  >
                    <source src={historie.url} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
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
