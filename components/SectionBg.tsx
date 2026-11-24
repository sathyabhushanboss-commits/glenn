import Image from "next/image";

/**
 * Decorative photo behind a section's content.
 * The parent <section> needs `relative isolate overflow-hidden`;
 * this layer sits at -z-10 so it paints above the section's own
 * background colour but below its content.
 */
export function SectionBg({
  photo,
  visible = 0.7,
  tone = "light",
}: {
  /** "dark" adds a soft black tint so light text stays readable. */
  tone?: "light" | "dark";
  /** Unsplash photo id, e.g. "1600585154526-990dced4db0d" */
  photo: string;
  /** How much of the photo shows through, 0–1. */
  visible?: number;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <Image
        src={`https://images.unsplash.com/photo-${photo}?q=70&w=2000&auto=format&fit=crop`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ opacity: visible }}
      />
      {tone === "dark" && (
        <div className="absolute inset-0 bg-linear-to-b from-ink/60 via-ink/40 to-ink/60" />
      )}
    </div>
  );
}
