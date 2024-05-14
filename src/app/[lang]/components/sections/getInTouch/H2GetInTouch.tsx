import React from "react";

const H2GetInTouch = ({
  text,
}: {
  text: {
    span1: string;
    span2: string;
  };
}) => {
  return (
    <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold text-end">
      {text.span1} <span className="text-red-600">{text.span2}</span>
    </h2>
  );
};

export default H2GetInTouch;
