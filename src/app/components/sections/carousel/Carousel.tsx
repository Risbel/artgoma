"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import H1Carousel from "./H1Carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Carousel = () => {
  return (
    <div id="enjoy-live" className="py-8 bg-[#1c1f24]">
      <div className="flex justify-center my-8 md:my-10 px-6">
        <H1Carousel />
      </div>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Carousel;
