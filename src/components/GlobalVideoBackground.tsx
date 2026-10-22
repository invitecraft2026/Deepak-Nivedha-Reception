import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import scenicBackground from "@/assets/ivoryandgolden_background.mp4";

export function GlobalVideoBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-0 overflow-hidden"
      style={{
        /*
         * Intentionally oversize the background.
         * This prevents white edges/flashes when the
         * mobile browser toolbar expands/collapses.
         */
        top: "-8vh",
        right: "-3vw",
        bottom: "-8vh",
        left: "-3vw",
      }}
    >
      <video
        src={scenicBackground}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>,
    document.body
  );
}