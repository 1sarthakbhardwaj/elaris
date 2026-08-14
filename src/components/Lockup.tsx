/**
 * Official ElarisLabs AI horizontal lockup.
 *
 * Renders the supplied brand file rather than retyping the wordmark in HTML —
 * the brand kit requires the shipped asset so the letterforms, spacing and
 * casing can't drift. Pick `light` only on Lume/white grounds.
 */
type LockupProps = {
  height?: number;
  variant?: "dark" | "light";
  className?: string;
};

/** Intrinsic lockup ratio: 339.71 × 64 in the supplied SVG. */
const ASPECT = 339.71 / 64;

export default function Lockup({
  height = 26,
  variant = "dark",
  className = "",
}: LockupProps) {
  return (
    <img
      src={`/brand/lockup-horizontal-${variant}-bg.svg`}
      alt="ElarisLabs AI"
      width={Math.round(height * ASPECT)}
      height={height}
      className={`shrink-0 w-auto ${className}`}
      style={{ height }}
    />
  );
}
