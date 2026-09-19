interface ProjectPreviewProps {
  type: 'assistant' | 'website' | 'automation' | 'support';
}

export default function ProjectPreviewGraphic({ type }: ProjectPreviewProps) {
  if (type === 'assistant') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#060B16] rounded-xl overflow-hidden border border-blue-500/20 p-3 select-none flex flex-col justify-between">
        {/* Top window bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-amber-500/60" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
            <span className="text-[9px] font-mono text-slate-400 ml-2">AI Assistant // Core</span>
          </div>
          <span className="text-[9px] font-mono text-sky-400 bg-blue-500/15 px-1.5 py-0.5 rounded">ACTIVE</span>
        </div>

        {/* Assistant chat query & synthesis */}
        <div className="space-y-2 py-1">
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-[8px] text-sky-300 font-mono">Q</div>
            <div className="bg-[#0A1224] rounded-lg px-2.5 py-1.5 text-[10px] text-slate-300 border border-white/[0.05] max-w-[85%]">
              Parse enterprise invoices & generate execution checklist
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-sky-500/30 border border-sky-400/40 flex items-center justify-center text-[8px] text-sky-200 font-mono">A</div>
            <div className="bg-blue-950/40 rounded-lg px-2.5 py-1.5 text-[10px] text-sky-100 border border-blue-500/20 max-w-[85%]">
              <span className="text-sky-400 font-mono text-[9px] block">Verified 14 line items:</span>
              <span>Workflow pipeline triggered with 0 validation flags.</span>
            </div>
          </div>
        </div>

        {/* Bottom telemetry line */}
        <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.04] text-[9px] font-mono text-slate-500">
          <span>LATENCY: 180ms</span>
          <span className="text-emerald-400">READY</span>
        </div>
      </div>
    );
  }

  if (type === 'website') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#060B16] rounded-xl overflow-hidden border border-blue-500/20 p-3 select-none flex flex-col justify-between">
        {/* Browser header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-2 h-2 rounded-full bg-slate-600" />
          </div>
          <div className="bg-[#0A1224] px-3 py-0.5 rounded text-[8px] font-mono text-slate-400 border border-white/[0.05]">
            apex-enterprise.web
          </div>
          <div className="w-3" />
        </div>

        {/* Mock Hero Layout with glowing geometric motif */}
        <div className="grid grid-cols-12 gap-2 my-auto items-center">
          <div className="col-span-7 space-y-1.5">
            <div className="h-2 w-16 bg-sky-500/40 rounded-full" />
            <div className="h-3 w-28 bg-white/90 rounded" />
            <div className="h-1.5 w-24 bg-slate-500 rounded" />
            <div className="h-4 w-12 bg-blue-600 rounded-md mt-1" />
          </div>
          <div className="col-span-5 flex items-center justify-center">
            {/* Geometric abstract motif */}
            <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-sky-400/10 border border-blue-400/30 flex items-center justify-center shadow-[0_0_12px_rgba(0,102,255,0.4)]">
              <div className="w-6 h-6 border-2 border-sky-400/70 rotate-45" />
            </div>
          </div>
        </div>

        {/* Bottom footer strip */}
        <div className="flex items-center gap-2 pt-1 border-t border-white/[0.04]">
          <div className="h-1.5 w-10 bg-white/10 rounded" />
          <div className="h-1.5 w-10 bg-white/10 rounded" />
          <div className="h-1.5 w-10 bg-white/10 rounded" />
        </div>
      </div>
    );
  }

  if (type === 'automation') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#060B16] rounded-xl overflow-hidden border border-blue-500/20 p-3 select-none flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <span className="text-[9px] font-mono text-slate-400">Workflow Sync Bridge</span>
          <span className="text-[9px] font-mono text-sky-400">STATUS: SYNCED</span>
        </div>

        {/* Node graph flow diagram */}
        <div className="flex items-center justify-between my-auto px-1">
          {/* Node 1 */}
          <div className="bg-[#0A1224] border border-blue-500/30 rounded-lg p-1.5 text-center w-16">
            <div className="text-[8px] font-mono text-sky-300">Webhook</div>
            <div className="text-[7px] text-slate-400">API Trigger</div>
          </div>

          {/* Connection Line */}
          <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500 to-sky-400 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#38bdf8]" />
          </div>

          {/* Node 2 */}
          <div className="bg-[#0A1224] border border-sky-400/50 rounded-lg p-1.5 text-center w-16 shadow-[0_0_10px_rgba(0,102,255,0.3)]">
            <div className="text-[8px] font-mono text-sky-200">Transformer</div>
            <div className="text-[7px] text-emerald-400">Normalized</div>
          </div>

          {/* Connection Line */}
          <div className="h-0.5 flex-1 bg-gradient-to-r from-sky-400 to-blue-500 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#38bdf8]" />
          </div>

          {/* Node 3 */}
          <div className="bg-[#0A1224] border border-blue-500/30 rounded-lg p-1.5 text-center w-16">
            <div className="text-[8px] font-mono text-sky-300">Database</div>
            <div className="text-[7px] text-slate-400">Zero Loss</div>
          </div>
        </div>

        {/* Telemetry bar */}
        <div className="flex items-center justify-between pt-1 border-t border-white/[0.04] text-[9px] font-mono text-slate-500">
          <span>RETRY QUEUE: 0</span>
          <span>UPTIME: 99.98%</span>
        </div>
      </div>
    );
  }

  // support
  return (
    <div className="relative w-full aspect-[16/10] bg-[#060B16] rounded-xl overflow-hidden border border-blue-500/20 p-3 select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
        <span className="text-[9px] font-mono text-slate-400">Conversational AI Engine</span>
        <span className="text-[9px] font-mono text-emerald-400">STREAMING</span>
      </div>

      {/* Support Chat Interface */}
      <div className="space-y-2 py-1">
        <div className="bg-[#0A1224] border border-white/[0.05] rounded-lg px-2.5 py-1.5 text-[9px] text-slate-300 max-w-[80%]">
          Inquiry: How do I configure my domain endpoints with zero downtime?
        </div>
        <div className="ml-auto bg-blue-950/40 border border-blue-500/25 rounded-lg px-2.5 py-1.5 text-[9px] text-sky-100 max-w-[85%]">
          Configured live: CNAME points directly to your APEX cluster with automated SSL provisioned.
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 border-t border-white/[0.04] text-[9px] font-mono text-slate-500">
        <span>ACCURACY: GROUNDED</span>
        <span className="text-sky-400">VERIFIED</span>
      </div>
    </div>
  );
}
