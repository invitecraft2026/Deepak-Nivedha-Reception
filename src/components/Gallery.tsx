import { useEffect, useState } from "react";

import { wedding } from "@/config/wedding";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

/**
 * Scrapbook-style gallery for exactly 5 photos (from wedding.gallery):
 *
 *   [        wide photo        ]
 *   [ portrait ]  [ portrait ]   (right one sits lower)
 *   [  square  ]  [  square  ]   (left one sits lower)
 *
 * Tap any photo to view it full-screen. Photos with an empty `src`
 * show a placeholder so the layout can be checked before photos arrive.
 */

const layout = [
  { span: "col-span-2", ratio: "aspect-[4/3]", tilt: "rotate-0", offset: "" },
  { span: "", ratio: "aspect-[3/4]", tilt: "-rotate-2", offset: "" },
  { span: "", ratio: "aspect-[3/4]", tilt: "rotate-2", offset: "mt-8" },
  { span: "", ratio: "aspect-square", tilt: "rotate-2", offset: "mt-2" },
  { span: "", ratio: "aspect-square", tilt: "-rotate-2", offset: "mt-10" },
] as const;

export function Gallery() {
  const photos = wedding.gallery.slice(0, 5);
  const [active, setActive] = useState<number | null>(null);

  // Close the full-screen view with the Escape key
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

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
          <SectionHeading eyebrow="Our moments" title="Together" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-base font-medium leading-relaxed text-[#3f4a2c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-lg">
            A few moments from our journey so far
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-4">
          {photos.map((p, i) => {
            const l = layout[i];

            return (
              <div key={`${p.src}-${i}`} className={`${l.span} ${l.offset}`}>
                <Reveal delay={Math.min(i * 0.1, 0.4)}>
                  <button
                    type="button"
                    onClick={() => p.src && setActive(i)}
                    aria-label={`View photo ${i + 1}`}
                    className={`
                      ${l.tilt}
                      block
                      w-full
                      cursor-pointer
                      rounded-sm
                      border
                      border-[#b8934a]/70
                      bg-[#fffaf0]
                      p-1.5
                      pb-2
                      shadow-[0_8px_24px_rgba(77,31,41,0.25)]
                      transition-transform
                      duration-300
                      hover:rotate-0
                      hover:scale-[1.03]
                    `}
                  >
                    <div
                      className={`${l.ratio} relative w-full overflow-hidden bg-[#e9dcc3]`}
                    >
                      {p.src ? (
                        <img
                          src={p.src}
                          alt={p.alt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.2em] text-[#3f4a2c]/60">
                          Photo {i + 1}
                        </div>
                      )}

                      {/* soft inner border for a printed-photo feel */}
                      <span className="pointer-events-none absolute inset-0 border border-[#b8934a]/30" />
                    </div>
                  </button>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-screen viewer */}
      {active !== null && photos[active]?.src && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-4 top-4 text-3xl leading-none text-white/90"
          >
            ×
          </button>

          <img
            src={photos[active].src}
            alt={photos[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded-sm border-2 border-[#b8934a]/80 object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}