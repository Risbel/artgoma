import React from "react";

const VipDescription = ({
  text,
}: {
  text: {
    p1: string;
    p2: string;
  };
}) => {
  return (
    <div className="text-center py-6 px-8">
      <p className="text-base lg:text-2xl text-white">{text.p1}</p>
      <p className="text-base lg:text-2xl text-white">{text.p2}</p>
    </div>
  );
};

export default VipDescription;
