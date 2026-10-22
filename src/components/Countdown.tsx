import { wedding } from "@/config/wedding";
import { useCountdown } from "@/hooks/useCountdown";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

const pad = (n: number) => n.toString().padStart(2, "0");

export function Countdown() {
  const c = useCountdown(wedding.dateISO);

  const units = c
    ? [
        { label: "Days", value: c.days.toString() },
        { label: "Hours", value: pad(c.hours) },
        { label: "Minutes", value: pad(c.minutes) },
        { label: "Seconds", value: pad(c.seconds) },
      ]
    : [
        { label: "Days", value: "--" },
        { label: "Hours", value: "--" },
        { label: "Minutes", value: "--" },
        { label: "Seconds", value: "--" },
      ];

  return (
    <section
      className="relative bg-transparent px-6 py-20"
      style={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
      }}
    >
      <div className="relative mx-auto max-w-md">
        <Reveal>
          <SectionHeading
            eyebrow="Counting the moments"
            title="The Celebration Begins In"
          />
        </Reveal>

        <Reveal delay={0.1}>
          {c?.isPast ? (
            <p className="font-script mt-10 text-center text-4xl text-champagne drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
              Today Is The Day ♡
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-4 gap-2 sm:gap-3">
              {units.map((u) => (
                <div
                  key={u.label}
                  className="
                    rounded-xl
                    border
                    border-white/30
                    bg-[#6b2b38]/35
                    px-1
                    py-4
                    text-center
                    shadow-[0_8px_25px_rgba(45,12,22,0.18)]
                  "
                >
                  <p className="tabular text-xl font-light text-[#fff8ef] drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] sm:text-2xl">
                    {u.value}
                  </p>

                  <p className="mt-1 text-[0.5rem] tracking-[0.2em] uppercase text-champagne sm:text-[0.58rem]">
                    {u.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}