import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import React from "react";

const VipDescription = ({
  text,
}: {
  text: {
    p1: string;
    p2: string;
  };
}) => {
  const text1Splited = text.p1.split(" ");
  const wordsP1 = text1Splited.map((word, i) => {
    if (word === word.toUpperCase()) {
      return {
        text: word,
        className: "font-bold",
      };
    }
    return {
      text: word,
    };
  });

  const text2Splited = text.p2.split(" ");
  const wordsP2 = text2Splited.map((word, i) => {
    return {
      text: word,
    };
  });

  return (
    <div className="text-center py-6 px-8">
      <TypewriterEffect words={wordsP1} />
      <TypewriterEffect words={wordsP2} />
    </div>
  );
};

export default VipDescription;
