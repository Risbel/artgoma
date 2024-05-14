import React from "react";

const GetInspiredText = ({
  text,
}: {
  text: {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
}) => {
  return (
    <p className="md:text-2xl text-white text-center md:text-start">
      <span>{text.p1}</span>
      <br />
      <br />
      <span>{text.p2}</span>
      <br />
      <br />
      <span>{text.p3}</span>
      <br />
      <br /> {text.p4}
    </p>
  );
};

export default GetInspiredText;
