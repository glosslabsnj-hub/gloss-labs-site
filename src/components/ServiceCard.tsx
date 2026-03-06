import Link from "next/link";

const icons = {
  droplets: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8 8 0 004-14.93A8 8 0 008 6.07 8 8 0 0012 21z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2" />
    </svg>
  ),
  sparkles: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  gem: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 15L22 7l-10-5zM2 7h20M7 7l5 15m5-15l-5 15M7 7l5-5 5 5" />
    </svg>
  ),
  truck: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-10.5H6.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h12.75M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H11.25m5.25 3.75h3.75m-3.75 0v3.375" />
    </svg>
  ),
};

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  icon: keyof typeof icons;
  duration: string;
}

export function ServiceCard({ title, price, description, icon, duration }: ServiceCardProps) {
  const isQuote = price === "Quote";

  return (
    <Link
      href="/services"
      className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer flex flex-col h-full"
    >
      {/* Top row: icon + title */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
          {icons[icon]}
        </div>
        <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors duration-300 leading-tight">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-white/35 text-sm leading-relaxed mb-4 font-[family-name:var(--font-body)] flex-1">{description}</p>

      {/* Bottom: price + duration */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
        <div className="flex items-baseline gap-1">
          {isQuote ? (
            <span className="text-lg font-bold text-accent">Get a Quote</span>
          ) : (
            <>
              <span className="text-xl font-bold text-accent">{price}</span>
              {price.startsWith("From") ? null : (
                <span className="text-white/25 text-xs font-[family-name:var(--font-body)]">+</span>
              )}
            </>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-white/25 text-xs font-[family-name:var(--font-body)]">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </div>
      </div>
    </Link>
  );
}
