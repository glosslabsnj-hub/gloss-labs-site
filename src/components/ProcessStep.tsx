interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  isLast: boolean;
}

export function ProcessStep({ step, title, description, isLast }: ProcessStepProps) {
  return (
    <div className="relative text-center">
      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/30 to-transparent" />
      )}

      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-gold/20 bg-gold/5 mb-5">
        <span className="text-gold text-xl font-bold">{step}</span>
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
