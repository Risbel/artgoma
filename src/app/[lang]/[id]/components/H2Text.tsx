import React from "react";

const H2Text = ({ text }: { text: string }) => {
  return (
    <h2 className="text-xl md:text-3xl text-center">
      <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#aa1212,45%,#f37272,55%,#aa1212)] bg-[length:250%_100%] bg-clip-text text-transparent font-semibold">
        {text}
      </span>
    </h2>
  );
};

export default H2Text;
