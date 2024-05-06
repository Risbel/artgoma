import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";

type PropType = {
  slides: number[];
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
          {slides.map((index) => (
            <div className="flex-none w-3/4 md:w-1/3 px-4" key={index}>
              <div className="shadow-inner rounded-xl text-white flex items-center justify-center h-52 md:h-64 bg-black bg-opacity-60 border-2 bg-black/60 border-red-600">
                <span className="text-white">{index + 1}</span>
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
          className="px-4 bg-black/60 hover:bg-black/10 border-2 border-red-600 rounded-3xl"
          onClick={toggleAutoplay}
          type="button"
        >
          <span className="text-md text-white">{isPlaying ? "Stop" : "Start"}</span>
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
