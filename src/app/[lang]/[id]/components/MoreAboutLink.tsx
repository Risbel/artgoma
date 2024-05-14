"use client";

import { motion } from "framer-motion";
import { Locale } from "@/configs/i18n.config";
import Link from "next/link";
import React from "react";

const MoreAboutLink = ({ text, lang }: { text: string; lang: Locale }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <Link
        href={`/${lang}`}
        className="border rounded-md px-6 py-2 gap-3 inline-flex items-center justify-between animate-background-shine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-gray-50 focus:ring-gray-400 focus:ring-offset-2 hover:shadow-lg hover:shadow-red-950"
      >
        <span className="text-white">{text}</span>
      </Link>
    </motion.div>
  );
};

export default MoreAboutLink;
