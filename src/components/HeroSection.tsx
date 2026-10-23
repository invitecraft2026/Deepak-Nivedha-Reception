import { motion } from "framer-motion";

import { wedding } from "@/config/wedding";

export function HeroSection({ start }: { start: boolean }) {
  return (
    <section
      className="
        relative
        w-full
        min-h-[100svh]
        bg-transparent
      "
    >
      <div
        className="
          relative
          flex
          min-h-[100svh]
          flex-col
          items-center
          justify-center
          px-6
          py-14
          text-center
        "
      >
        {/* Main text block - vertically centered */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: start ? 1 : 0,
            y: start ? 0 : 16,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-sm"
        >
          {/* Small top line - antique gold */}
          <p className="tracking-luxe text-[0.62rem] font-medium uppercase text-[#7a5a14] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-xs">
            {wedding.welcomeLine}
          </p>

          {/* Main title - deep burgundy */}
          <h1 className="font-script mt-3 text-[2.75rem] leading-[1.05] text-[#4d1f29] drop-shadow-[0_0_10px_rgba(251,245,230,0.9)] sm:text-[3.5rem]">
            {wedding.welcomeTitle}
          </h1>

          {/* Join line - dark olive */}
          <p className="mt-2 text-xs font-medium italic tracking-wide text-[#3f4a2c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)]">
            {wedding.welcomeJoin}
          </p>

          <div className="mt-3 flex flex-col items-center">
            {/* Bride - deep burgundy */}
            <h2 className="font-script text-5xl leading-none text-[#4d1f29] drop-shadow-[0_0_10px_rgba(251,245,230,0.9)] sm:text-6xl">
              
               {wedding.groom.firstName}
            </h2>

            {/* Ampersand - antique gold */}
            <span className="font-script -my-1 text-xl text-[#8a6a1c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-2xl">
              &amp;
            </span>
            
            {/* Groom - deep burgundy */}
            <h2 className="font-script text-5xl leading-none text-[#4d1f29] drop-shadow-[0_0_10px_rgba(251,245,230,0.9)] sm:text-6xl">
              {wedding.bride.firstName}
            </h2>
          </div>
        </motion.div>

        {/* Scroll hint - pinned to the bottom */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: start ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
          className="absolute inset-x-0 bottom-10 mx-auto max-w-sm"
        >
          {/* Scroll hint - dark olive */}
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#3f4a2c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)]">
            Scroll to discover
          </p>

          {/* Arrow - antique gold */}
          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden
            className="mx-auto mt-2 text-[#7a5a14]"
            animate={
              start
                ? {
                    y: [0, 6, 0],
                  }
                : {
                    y: 0,
                  }
            }
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}