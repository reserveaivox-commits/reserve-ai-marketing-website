import Image from "next/image";

type BrandLogoProps = {
  tone?: "dark" | "light";
  showWordmark?: boolean;
  showMark?: boolean;
  className?: string;
};

export default function BrandLogo({
  tone = "light",
  showWordmark = true,
  showMark = true,
  className = "",
}: BrandLogoProps) {
  const wordmarkColor = tone === "light" ? "text-white" : "text-[#0B1424]";
  const aiColor = "text-[#D4A843]";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Reserve AI">
      {showMark ? (
        /* Neon R lock-up, exported from the source artwork with the dark ground
           lifted into the alpha channel so the glow falls off naturally. The
           2:1 ratio is the mark's own, not a square box. */
        <Image
          src="/brand/reserve-ai-mark.png"
          alt=""
          width={232}
          height={120}
          priority
          aria-hidden="true"
          className="h-10 w-auto shrink-0"
        />
      ) : null}
      {showWordmark ? (
        <span className={`text-xl font-bold tracking-[-0.04em] md:text-2xl ${wordmarkColor}`}>
          Reserve <span className={aiColor}>AI</span>
        </span>
      ) : null}
    </span>
  );
}
