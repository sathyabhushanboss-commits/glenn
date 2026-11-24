import Image from "next/image";

/**
 * Shows the whole photo without cropping (object-contain) and fills any
 * empty space around it with a blurred copy of the same photo, so frames
 * of any aspect ratio still look full on desktop and mobile.
 * The parent must be positioned (relative/absolute) and sized.
 */
export function FitImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** Extra classes for the sharp (foreground) image, e.g. hover zoom. */
  className?: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes="200px"
        className="scale-110 object-cover blur-2xl brightness-90"
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-contain ${className}`}
      />
    </>
  );
}
