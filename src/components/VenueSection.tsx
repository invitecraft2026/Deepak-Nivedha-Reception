import venueImg from "@/assets/venue.jpg";
import { wedding } from "@/config/wedding";
import { mapsDirectionsUrl } from "@/utils/calendar";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

export function VenueSection() {
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
      <div className="relative mx-auto max-w-md">
        <Reveal>
          <SectionHeading
            eyebrow="Where we celebrate"
            title="The Venue"
            script
          />
        </Reveal>

        <Reveal delay={0.1}>
          {/* Photo frame - ivory card with gold border */}
          <div
            className="
              mt-10
              overflow-hidden
              rounded-xl
              border
              border-[#b8934a]/70
              bg-[#fbf5e6]/80
              p-2
              shadow-[0_10px_30px_rgba(77,31,41,0.18)]
            "
          >
            <img
              src={venueImg}
              alt="Wedding venue"
              loading="lazy"
              width={1024}
              height={768}
              className="h-52 w-full rounded-lg object-cover sm:h-60"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 text-center">
            {/* Venue name - deep burgundy */}
            <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-[#4d1f29] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)]">
              {wedding.venue.name}
            </h3>

            {/* Address - dark olive */}
            <p className="mt-2 text-sm font-medium leading-relaxed text-[#3f4a2c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)]">
              {wedding.venue.address}
            </p>

            {/* Button - solid burgundy, ivory text, gold border */}
            <a
              href={mapsDirectionsUrl(wedding.venue.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                inline-block
                rounded-md
                border
                border-[#b8934a]
                bg-[#4d1f29]
                px-6
                py-3
                text-[0.62rem]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#fbf5e6]
                shadow-[0_6px_20px_rgba(77,31,41,0.30)]
                transition-all
                duration-300
                hover:bg-[#3a1620]
              "
            >
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}