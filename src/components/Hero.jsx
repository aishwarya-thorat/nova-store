"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Hero() {
  return (
   <section className="relative min-h-screen overflow-hidden bg-black flex items-start justify-center">
    
    {/*background glow*/}
    <div className="absolute h-[800px] w-[800px] rounded-full bg-yellow-500/10 blur-3xl"></div>
    {/*content*/}
    <div className="relative z-10 flex flex-col items-center text-center gap-2 pt-24">

      <p className="mb-4 tracking-[0.5em] text-gray-400 uppercase">
        Every Sneaker. One Destination.
      </p>

      <h1 className="text-8xl md:text-[12rem] font-bold text-white/5 absolute">
        NOVA
      </h1>

      <div className="relative z-20">
       <motion.div className="relative"
  animate={{
    y: [0, -10, 0],
    rotate: [0, 2, 0, -2, 0]
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <Image
    src="/images/shoes.png"
    alt="NOVA Sneaker"
    width={500}
    height={500}
    priority
  />
 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[300px] h-[30px] bg-white/20 blur-2xl rounded-full" />
</motion.div>
      </div>

      <h2 className="-mt-24 text-5xl font-bold text-white relative z-20">
        Born To Move.
      </h2>

      <p className="mt-4 max-w-xl text-gray-400">
        Crafted for creators, athletes and dreamers who never stand still.
      </p>

      <button className="mt-8 rounded-full border border-yellow-500 px-8 py-3 text-yellow-500 hover:text-white transition">
        Shop Collection
      </button>
    </div>
   </section>
  );
}