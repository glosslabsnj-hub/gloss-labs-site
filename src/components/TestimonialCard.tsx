interface TestimonialCardProps {
  name: string;
  vehicle: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, vehicle, text, rating }: TestimonialCardProps) {
  return (
    <div className="glass-card rounded-2xl p-8">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-accent"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        ))}
      </div>

      <p className="text-white/60 text-sm leading-relaxed mb-6 italic font-[family-name:var(--font-body)]">
        &ldquo;{text}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-white/30 text-xs font-[family-name:var(--font-body)]">{vehicle}</p>
        </div>
      </div>
    </div>
  );
}
