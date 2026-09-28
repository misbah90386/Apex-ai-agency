interface IllustrativePreviewProps {
  type: 'real-estate' | 'bakery' | 'restaurant';
}

export default function IllustrativePreview({ type }: IllustrativePreviewProps) {
  if (type === 'real-estate') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#070D1A] rounded-xl overflow-hidden border border-blue-500/20 p-3 select-none flex flex-col justify-between group">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Browser Bar & Bilingual Indicator */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[10px]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="text-[10px] font-mono text-slate-400 ml-1.5">property-concept.web</span>
          </div>
          {/* Bilingual Switcher indicator */}
          <div className="flex items-center gap-1.5 font-mono text-[9px] bg-white/[0.05] px-2 py-0.5 rounded border border-white/10 text-slate-300">
            <span className="text-sky-400 font-bold">EN</span>
            <span className="text-slate-600">|</span>
            <span>العربية</span>
          </div>
        </div>

        {/* Property Concept Card Preview */}
        <div className="my-auto py-1 space-y-2">
          <div className="relative rounded-lg bg-gradient-to-br from-[#0D182E] to-[#08101F] border border-blue-400/20 p-2.5">
            {/* Property Category & Generic Name */}
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-mono text-sky-400 uppercase tracking-wider">Concept Listing</span>
              <span className="text-[10px] font-bold font-mono text-white">$1,250,000</span>
            </div>

            <div className="text-xs font-semibold text-white mb-1.5">
              Modern Coastal Villa Concept
            </div>

            {/* Property specs */}
            <div className="flex items-center gap-2 text-[10px] text-slate-300 font-mono">
              <span className="flex items-center gap-1">
                <span className="text-sky-400 font-bold">4</span> Beds
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <span className="text-sky-400 font-bold">3.5</span> Baths
              </span>
              <span>·</span>
              <span>380 sqm</span>
            </div>

            {/* Generic filter row preview */}
            <div className="mt-2 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[9px] text-slate-400">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Arabic / English UI</span>
              </div>
              <span className="text-sky-300">Property Browsing</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner with mandatory Illustrative Preview Label */}
        <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.06] text-[10px]">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/15 border border-blue-400/30 text-sky-300 font-mono text-[9px] uppercase tracking-wider font-semibold">
            Illustrative Preview
          </span>
          <span className="text-[9px] font-mono text-slate-400">Concept Demo</span>
        </div>
      </div>
    );
  }

  if (type === 'bakery') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#070D1A] rounded-xl overflow-hidden border border-blue-500/20 p-3 select-none flex flex-col justify-between group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Browser Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[10px]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="text-[10px] font-mono text-slate-400 ml-1.5">custom-bakes.demo</span>
          </div>
          <span className="text-[9px] font-mono text-amber-300/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            Cake Customiser
          </span>
        </div>

        {/* Custom Cake Interface Mockup */}
        <div className="my-auto py-1 space-y-2">
          <div className="rounded-lg bg-gradient-to-br from-[#121929] to-[#0A101C] border border-white/10 p-2.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-white">Bespoke 2-Tier Celebration Cake</span>
              <span className="text-xs font-bold font-mono text-emerald-400">Est. $85 – $120</span>
            </div>

            {/* Customiser Selector pills preview */}
            <div className="space-y-1.5 text-[9px]">
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="text-slate-400">Flavor:</span>
                <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-sky-200 border border-blue-500/30 font-medium">Vanilla Bean</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.03] text-slate-400">Cocoa</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.03] text-slate-400">Pistachio</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="text-slate-400">Tiers:</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.03] text-slate-400">1 Tier</span>
                <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-200 border border-sky-500/30 font-medium">2 Tiers</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.03] text-slate-400">3 Tiers</span>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[9px] text-slate-400">
              <span>Interactive Pricing Preview</span>
              <span className="text-sky-300">Gallery & Ordering</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner with mandatory Illustrative Preview Label */}
        <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.06] text-[10px]">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/15 border border-blue-400/30 text-sky-300 font-mono text-[9px] uppercase tracking-wider font-semibold">
            Illustrative Preview
          </span>
          <span className="text-[9px] font-mono text-slate-400">Concept Demo</span>
        </div>
      </div>
    );
  }

  // restaurant
  return (
    <div className="relative w-full aspect-[16/10] bg-[#070D1A] rounded-xl overflow-hidden border border-blue-500/20 p-3 select-none flex flex-col justify-between group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Browser Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-600" />
          <div className="w-2 h-2 rounded-full bg-slate-600" />
          <div className="w-2 h-2 rounded-full bg-slate-600" />
          <span className="text-[10px] font-mono text-slate-400 ml-1.5">crisp-kitchen.demo</span>
        </div>
        <span className="text-[9px] font-mono text-orange-300/80 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
          Restaurant Concept
        </span>
      </div>

      {/* Restaurant Food Concept Mockup */}
      <div className="my-auto py-1 space-y-2">
        <div className="rounded-lg bg-gradient-to-br from-[#141824] to-[#0A0E18] border border-white/10 p-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-white">Signature Golden Chicken Combo</span>
            <span className="text-xs font-bold font-mono text-sky-300">$14.50</span>
          </div>

          <p className="text-[9px] text-slate-400 line-clamp-2 mb-2 leading-relaxed">
            Freshly seasoned crispy tenders, golden skin-on fries, house garlic dip, and chilled drink.
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[9px]">
            <div className="flex items-center gap-1.5 text-slate-300 font-mono">
              <span className="px-1.5 py-0.5 rounded bg-white/[0.04]">Dine-in</span>
              <span className="px-1.5 py-0.5 rounded bg-white/[0.04]">Takeaway</span>
            </div>
            <span className="text-sky-400 font-medium">Digital Menu Concept</span>
          </div>
        </div>
      </div>

      {/* Bottom Banner with mandatory Illustrative Preview Label */}
      <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.06] text-[10px]">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/15 border border-blue-400/30 text-sky-300 font-mono text-[9px] uppercase tracking-wider font-semibold">
          Illustrative Preview
        </span>
        <span className="text-[9px] font-mono text-slate-400">Concept Demo</span>
      </div>
    </div>
  );
}
