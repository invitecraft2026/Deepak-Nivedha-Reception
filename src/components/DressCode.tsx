import { wedding } from "@/config/wedding";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

export function DressCode() {
  return (
    <section
      className="relative bg-transparent px-6 py-20"
      style={{
        background: "transparent",
        backgroundColor: "transparent",
        backgroundImage: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
      }}
    >
      <div className="relative mx-auto max-w-md text-center">
        <Reveal>
          <SectionHeading
            eyebrow="What to wear"
            title="Dress Code"
          />
        </Reveal>

        <Reveal delay={0.1}>
          {/* Description - dark olive */}
          <p className="mt-8 text-base font-medium leading-relaxed text-[#3f4a2c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-lg">
            {wedding.dressCode.description}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          {/* 4 per row on mobile, last row centered */}
          <ul className="mt-8 flex flex-wrap justify-center gap-y-6">
            {wedding.dressCode.colors.map((c) => (
              <li key={c.name} className="basis-1/4 px-1">
                {/* Color swatch - gold ring so light colors stay visible */}
                <span
                  className="
                    mx-auto
                    block
                    h-14
                    w-14
                    rounded-full
                    border-2
                    border-[#b8934a]/80
                    shadow-[0_3px_12px_rgba(77,31,41,0.22)]
                  "
                  style={{ backgroundColor: c.hex }}
                  aria-hidden
                />

                {/* Color name - dark olive */}
                <span
                  className="
                    mt-2
                    block
                    break-words
                    text-[0.7rem]
                    font-bold
                    uppercase
                    leading-tight
                    tracking-[0.05em]
                    text-[#3f4a2c]
                    drop-shadow-[0_0_8px_rgba(251,245,230,0.9)]
                    sm:text-xs
                  "
                >
                  {c.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}