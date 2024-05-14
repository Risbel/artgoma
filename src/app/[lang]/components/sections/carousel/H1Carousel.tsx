import { useDictionary } from "@/providers/DictionaryProvider";

const H1Carousel = () => {
  const { enjoy } = useDictionary();

  return (
    <h1 className="text-center text-3xl md:text-5xl font-semibold text-white">
      {enjoy.h1.span1} <span className="text-red-600">{enjoy.h1.span2}</span> {enjoy.h1.span3}
    </h1>
  );
};

export default H1Carousel;
