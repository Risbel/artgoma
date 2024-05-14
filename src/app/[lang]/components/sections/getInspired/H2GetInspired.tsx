import React from "react";

const H2GetInspired = ({ text }: { text: { span1: string; span2: string } }) => {
  return (
    <h1 className="text-4xl md:text-6xl text-white font-semibold text-shadow-lg shadow-black">
      <span className="text-red-600">{text.span1}</span> {text.span2}
    </h1>
  );
};

export default H2GetInspired;
