import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";

import { Reveal } from "./Reveal";
import { CornerFrame, SectionHeading } from "./Ornament";

function getTimeLeft(targetDate: string) {
  const target = new Date(targetDate).getTime();

  if (Number.isNaN(target)) {
    console.error("Invalid wedding date:", targetDate);

    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const now = Date.now();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

const numberClass =
  "text-3xl font-normal tracking-wide text-[#4d1f29] drop-shadow-[0_0_10px_rgba(251,245,230,0.9)] sm:text-4xl";

const labelClass =
  "mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#3f4a2c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)]";

export function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(wedding.dateISO)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(wedding.dateISO));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-transparent px-6 py-20"
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
        <CornerFrame />

        <Reveal>
          <SectionHeading
            title="The Celebration Begins"
            script
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <div className="mt-8 grid grid-cols-4 gap-4">
              <div>
                <p className={numberClass}>{timeLeft.days}</p>
                <p className={labelClass}>Days</p>
              </div>

              <div>
                <p className={numberClass}>{timeLeft.hours}</p>
                <p className={labelClass}>Hours</p>
              </div>

              <div>
                <p className={numberClass}>{timeLeft.minutes}</p>
                <p className={labelClass}>Minutes</p>
              </div>

              <div>
                <p className={numberClass}>{timeLeft.seconds}</p>
                <p className={labelClass}>Seconds</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          {/* Time line - antique gold */}
          <p className="mt-8 text-center text-sm font-medium italic text-[#7a5a14] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)]">
            {wedding.time}
          </p>
        </Reveal>
      </div>
    </section>
  );
}