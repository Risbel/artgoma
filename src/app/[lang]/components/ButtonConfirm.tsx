"use client";

import { motion } from "framer-motion";
import { Locale } from "@/configs/i18n.config";
import Link from "next/link";
import React from "react";

const ButtonConfirm = ({ text, lang }: { text: string; lang: Locale }) => {
  return (
    <Link href={`/${lang}/confirm`}>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="shadow-xl hover:shadow-red-950 transition-shadow duration-300 relative inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffc6c6_0%,#ff0505_50%,#ff9999_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

export default ButtonConfirm;
