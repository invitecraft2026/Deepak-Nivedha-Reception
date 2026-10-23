import { wedding } from "@/config/wedding";

import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

export function InvitationMessage() {
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
          {/* Intro line - dark olive */}
          <p className="text-xs font-bold uppercase leading-relaxed tracking-[0.18em] text-[#3f4a2c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-sm">
            You are invited to the
            <br />
            {wedding.welcomeTitle} of
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Bride name - deep burgundy */}
          <h3 className="font-script mt-6 text-5xl text-[#4d1f29] drop-shadow-[0_0_10px_rgba(251,245,230,0.9)] sm:text-6xl">
            {wedding.groom.firstName}
          </h3>

          {/* Parents */}
          <p className="mt-2 text-xs font-semibold uppercase leading-relaxed tracking-[0.1em] text-[#4a5535] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-sm">
            {wedding.bride.parents}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {/* "with" - antique gold */}
          <span className="font-script mt-4 block text-2xl text-[#8a6a1c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)]">
            with
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          {/* Groom name - deep burgundy */}
          <h3 className="font-script mt-3 text-5xl text-[#4d1f29] drop-shadow-[0_0_10px_rgba(251,245,230,0.9)] sm:text-6xl">
            
            {wedding.bride.firstName}
          </h3>

          {/* Parents */}
          <p className="mt-2 text-xs font-semibold uppercase leading-relaxed tracking-[0.1em] text-[#4a5535] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-sm">
            {wedding.groom.parents}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <Divider className="mt-8" />

          {/* Invitation message - dark olive */}
          <p className="mt-6 text-base font-medium leading-relaxed text-[#3f4a2c] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-lg">
            {wedding.invitationMessage}
          </p>

          {/* Quote - antique gold, italic */}
          <p className="mt-6 text-sm font-semibold italic leading-relaxed text-[#7a5a14] drop-shadow-[0_0_8px_rgba(251,245,230,0.9)] sm:text-base">
            {wedding.quote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}