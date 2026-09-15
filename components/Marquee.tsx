export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink/10 py-6">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-display text-sm font-semibold uppercase tracking-[0.3em] text-ink/60">
              {item}
            </span>
            <span className="text-brass">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
