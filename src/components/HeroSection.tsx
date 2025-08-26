// src/components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6">
{/* Heading */}
<motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-7xl lg:text-7xl font-bold leading-tight"
>
  Launch Your Own Online <br />
  <span className="text-black">Grocery Store</span>
</motion.h1>

{/* Subheading */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="mt-6 text-gray-300 max-w-2xl opacity-80"
>
  Build your very own online grocery store or multi-vendor grocery
  marketplace with <span className="font-semibold text-gray-500">Future Desks’</span>{" "}
  complete source code and post-purchase support.
</motion.p>


{/* Price */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="mt-6 text-xl md:text-2xl text-gray-400 opacity-80"
>
  Software worth Lakhs at just{" "}
  <span className="font-bold text-black text-3xl opacity-100">
    Rs.50,000/-
  </span>
</motion.p>


<motion.button
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.08,
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "2px solid #000000",
  }}
  whileTap={{ scale: 0.95 }}
  className="mt-10 px-10 py-4 rounded-full bg-black text-white text-lg font-semibold shadow-lg"
>
  Get this Software
</motion.button>






      {/* Trusted Clients */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-6 flex items-center space-x-3"
      >
        {/* Avatars */}
        <div className="flex -space-x-2">
          <img
            src="/prof1.png"
            alt="Client"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img
            src="/prof2.png"
            alt="Client"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img
            src="/prof3.png"
            alt="Client"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
        <p className="text-gray-700 text-sm">
          Trusted by <span className="text-blue-600 font-semibold">100+ Clients</span>
        </p>
      </motion.div>

      {/* Mobile GIF */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.5, duration: 0.8 }}
  className="mt-10 relative z-10"
>
  <div className="relative w-[280px] md:w-[350px] overflow-hidden">
    <img
      src="/phone.gif"
      alt="Mobile Demo"
      className="w-full"
    />
  </div>
</motion.div>

    </section>
  );
}
