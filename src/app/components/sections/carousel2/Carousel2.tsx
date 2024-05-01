import EmblaCarousel2 from "./EmblaCarousel2";
import { EmblaOptionsType } from "embla-carousel";
import * as imagesObj from "./slides.json";

const OPTIONS: EmblaOptionsType = { loop: false };

const Carousel2 = () => {
  const { images } = imagesObj;

  return (
    <div className="overflow-x-hidden bg-[#1c1f24] pt-40">
      <EmblaCarousel2 slides={images} options={OPTIONS} />
    </div>
  );
};

export default Carousel2;
