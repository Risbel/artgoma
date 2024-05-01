import React from "react";

const ButtonConfirm = () => {
  return (
    <button className="hover:-translate-y-1 transition-transform duration-300 bg-black/40 backdrop-blur-sm px-8 py-2 border-2 border-red-700 rounded-3xl">
      <span className="text-white tracking-wider">Confirm</span>
    </button>
  );
};

export default ButtonConfirm;
