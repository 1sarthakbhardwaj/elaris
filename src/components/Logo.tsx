type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 26, className = "" }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt=""
      width={size}
      height={size}
      aria-hidden
      className={`shrink-0 rounded-[6px] ${className}`}
    />
  );
}
