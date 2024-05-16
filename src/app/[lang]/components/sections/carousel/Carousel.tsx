"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import H1Carousel from "./H1Carousel";
import * as imagesObj from "./slides.json";

const OPTIONS: EmblaOptionsType = { loop: true };

const Carousel = () => {
  const { images } = imagesObj;

  return (
    <div id="enjoy-live" className="py-8 bg-[#1c1f24]">
      <div className="flex justify-center my-8 md:my-10 px-6">
        <H1Carousel />
      </div>

      <EmblaCarousel slides={images} options={OPTIONS} />
    </div>
  );
};

export default Carousel;
