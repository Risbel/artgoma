import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import Video from "./Video";

type PropType = {
  slides: {
    video?: boolean;
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
  const [emblaRef, emblaApi]: any = useEmblaCarousel(options, [AutoScroll({ playOnInit: false })]);
  const [isPlaying, setIsPlaying] = useState(false);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll: any = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop = autoScroll.options.stopOnInteraction === false ? autoScroll.reset : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll: any = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying() ? autoScroll.stop : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll: any = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
    toggleAutoplay();
  }, [emblaApi]);

  return (
    <div className="max-w-full mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div className="flex-none w-3/4 md:w-5/12 lg:w-1/4 px-4 mb-4" key={slide.key}>
              <div className="rounded-xl flex items-center justify-center h-52 md:h-64 overflow-hidden shadow-lg shadow-gray-800">
                {slide.video ? (
                  <Video key={slide.key} slide={slide} />
                ) : (
                  <Image
                    className="object-cover w-full h-full"
                    src={slide.url}
                    alt={slide.alt}
                    width={300}
                    height={200}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-between px-8 py-4">
        <div className="flex items-center gap-8">
          <PrevButton onClick={() => onButtonAutoplayClick(onPrevButtonClick)} disabled={prevBtnDisabled} />
          <NextButton onClick={() => onButtonAutoplayClick(onNextButtonClick)} disabled={nextBtnDisabled} />
        </div>

        <button
          className="px-1.5 md:px-4 bg-black/60 hover:bg-black/10 shadow-md shadow-red-950 rounded-3xl"
          onClick={toggleAutoplay}
          type="button"
        >
          <span className="text-md text-white">
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
