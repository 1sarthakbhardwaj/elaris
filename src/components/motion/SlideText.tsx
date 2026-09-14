/**
 * Hover treatment from the template's `slideDownLine` links: the label slides
 * out of a mask while a duplicate slides in behind it.
 *
 * The duplicate is `aria-hidden` so assistive tech reads the label once, and
 * the whole thing is pure CSS transforms so it costs nothing at rest.
 */
export default function SlideText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block overflow-hidden align-bottom ${className ?? ""}`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.2,0.9,0.3,1)] group-hover/slide:translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block -translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.2,0.9,0.3,1)] group-hover/slide:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}
