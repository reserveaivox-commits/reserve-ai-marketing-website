type BrandLogoProps = {
  tone?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
};

export default function BrandLogo({
  tone = "light",
  showWordmark = true,
  className = "",
}: BrandLogoProps) {
  const wordmarkColor = tone === "light" ? "text-white" : "text-[#050806]";
  const aiColor = "text-[#8effa8]";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Reserve AI">
      <svg
        width="38"
        height="38"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="48" height="48" rx="14" fill="#050806" />
        <ellipse
          cx="24"
          cy="24"
          rx="16"
          ry="6.4"
          transform="rotate(-28 24 24)"
          stroke="#32E875"
          strokeWidth="2.2"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="16"
          ry="6.4"
          transform="rotate(28 24 24)"
          stroke="#9CFFB3"
          strokeWidth="1.8"
          opacity="0.75"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="6.4"
          ry="16"
          stroke="#1BAA55"
          strokeWidth="1.5"
          opacity="0.65"
        />
        <circle cx="24" cy="24" r="7.4" fill="#07110B" stroke="#32E875" strokeWidth="1.6" />
        <circle cx="37.4" cy="16.7" r="2.4" fill="#9CFFB3" />
        <circle cx="12.1" cy="29.8" r="2" fill="#32E875" />
        <circle cx="30.5" cy="38.2" r="1.8" fill="#67F58D" />
        <text
          x="24"
          y="27.3"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="800"
          fill="#EFFFF4"
          fontFamily="Montserrat, Arial, sans-serif"
        >
          AI
        </text>
      </svg>
      {showWordmark ? (
        <span className={`text-xl font-bold tracking-[-0.04em] md:text-2xl ${wordmarkColor}`}>
          Reserve <span className={aiColor}>AI</span>
        </span>
      ) : null}
    </span>
  );
}
