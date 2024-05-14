import React from "react";

const GetInspiredCallToAction = ({
  text,
}: {
  text: {
    span1: string;
    normalText: string;
    span2: string;
    span3: string;
  };
}) => {
  return (
    <p className="text-xl md:text-2xl text-white py-8 text-center md:text-left">
      <span className="text-red-600 text-3xl md:text-4xl font-bold">{text.span1}</span> {text.normalText}
      <br />
      <span className="text-white text-2xl md:text-4xl font-semibold"> {text.span2}</span>
      <span className="text-red-600 text-3xl md:text-4xl font-bold"> {text.span3}</span>
    </p>
  );
};

export default GetInspiredCallToAction;
