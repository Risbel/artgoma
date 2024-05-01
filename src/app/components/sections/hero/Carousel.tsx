"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import * as imagesObj from "./imgsCarousel.json";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { images } = imagesObj;

  useEffect(() => {
    if (!images) {
      return;
    }
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [currentImage, images]);

  const changeImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <>
      <div className="absolute items-center overflow-hidden z-10">
        {images &&
          images?.map((img, index) => (
            <Image
              className={`h-screen w-screen object-cover ${
                index === currentImage ? "opacity-100" : "opacity-0 absolute"
              } transition-opacity duration-700`}
              src={img.url}
              alt={img.alt}
              key={img.key}
              width={img.width}
              height={img.height}
            />
          ))}
      </div>
      <div className="absolute z-50 flex justify-center items-center space-x-4 bottom-4 w-full">
        {images &&
          images.map((_, index) => (
            <button
              key={index}
              onClick={() => changeImage(index)}
              className={`w-3 h-3 bg-white rounded-full cursor-pointer hover:scale-110 ${
                index === currentImage ? "opacity-100" : "opacity-50"
              }`}
            ></button>
          ))}
      </div>
    </>
  );
};

export default Carousel;
