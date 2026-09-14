/**
 * The site's icons were previously one-off inline SVGs with stroke weights
 * drifting between 1.5, 2 and 2.5, which reads as inconsistent at small sizes.
 * Everything here shares one 24px grid, one stroke weight and round caps.
 */

const PATHS = {
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowUpRight: "M7 17L17 7M17 7H8M17 7v9",
  plus: "M12 5v14M5 12h14",
  check: "M4 12.5l5 5L20 6.5",
  play: "M8 5.5v13l11-6.5-11-6.5z",
  globe: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 16l9 5 9-5M3 12l9 5 9-5",
  sparkle: "M12 4l1.8 5.2L19 11l-5.2 1.8L12 18l-1.8-5.2L5 11l5.2-1.8L12 4z",
  chevronDown: "M6 9l6 6 6-6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
} as const;

export type IconName = keyof typeof PATHS;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
