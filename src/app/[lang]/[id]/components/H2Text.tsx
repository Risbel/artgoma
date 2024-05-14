"use client";

import { motion } from "framer-motion";

const H2Text = ({ text }: { text: string }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-xl md:text-3xl text-center"
    >
      <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#aa1212,45%,#f37272,55%,#aa1212)] bg-[length:250%_100%] bg-clip-text text-transparent font-semibold">
        {text}
      </span>
    </motion.h2>
  );
};

export default H2Text;
