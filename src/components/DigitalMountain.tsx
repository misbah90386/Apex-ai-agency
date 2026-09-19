export default function DigitalMountain() {
  return (
    <div className="relative w-full aspect-[16/10] max-w-[540px] mx-auto flex items-center justify-center select-none overflow-hidden rounded-2xl">
      {/* Ambient background glow behind the mountain */}
      <div className="absolute inset-0 bg-blue-600/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/15 blur-[60px] pointer-events-none" />

      <svg
        viewBox="0 0 600 380"
        className="w-full h-full drop-shadow-[0_0_25px_rgba(0,102,255,0.4)]"
      >
        <defs>
          <linearGradient id="mountainLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="mountainFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#02070D" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="verticalMeshGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Peak Glow Aura */}
        <circle cx="300" cy="140" r="10" fill="#38BDF8" className="filter blur-sm opacity-80 animate-pulse" />
        <circle cx="300" cy="140" r="3.5" fill="#FFFFFF" />

        {/* Back Wave Lines */}
        <path
          d="M 50 290 Q 200 270 300 190 Q 400 270 550 290"
          fill="none"
          stroke="#0066FF"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <path
          d="M 60 280 Q 210 250 300 170 Q 390 250 540 280"
          fill="none"
          stroke="#0066FF"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* Primary Mountain Silhouette & Fill */}
        <path
          d="M 50 320 Q 180 300 250 220 Q 300 140 350 220 Q 420 300 550 320 L 550 360 L 50 360 Z"
          fill="url(#mountainFillGrad)"
        />

        {/* Major Topographical Elevation Contours */}
        <path
          d="M 50 310 Q 180 290 260 210 Q 300 140 340 210 Q 420 290 550 310"
          fill="none"
          stroke="url(#mountainLineGrad)"
          strokeWidth="2.5"
        />
        <path
          d="M 60 300 Q 190 275 270 200 Q 300 155 330 200 Q 410 275 540 300"
          fill="none"
          stroke="url(#mountainLineGrad)"
          strokeWidth="2"
        />
        <path
          d="M 70 290 Q 200 260 280 190 Q 300 170 320 190 Q 400 260 530 290"
          fill="none"
          stroke="url(#mountainLineGrad)"
          strokeWidth="1.8"
        />
        <path
          d="M 80 280 Q 210 250 285 205 Q 300 185 315 205 Q 390 250 520 280"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeOpacity="0.75"
        />

        {/* Lower Elevation Waves */}
        <path
          d="M 40 330 Q 170 310 250 250 Q 300 200 350 250 Q 430 310 560 330"
          fill="none"
          stroke="#0066FF"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
        <path
          d="M 30 345 Q 160 325 240 270 Q 300 230 360 270 Q 440 325 570 345"
          fill="none"
          stroke="#0066FF"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
        <path
          d="M 20 360 Q 150 340 230 290 Q 300 260 370 290 Q 450 340 580 360"
          fill="none"
          stroke="#0066FF"
          strokeWidth="1"
          strokeOpacity="0.25"
        />

        {/* Vertical Digital Wireframe Ribs / Longitudinal Grid Lines */}
        {[100, 150, 200, 240, 270, 300, 330, 360, 400, 450, 500].map((x) => {
          const distFromCenter = Math.abs(x - 300);
          const topY = 140 + (distFromCenter * 0.55);
          return (
            <path
              key={x}
              d={`M ${x} 360 Q ${x + (x < 300 ? -10 : 10)} ${(topY + 360) / 2} ${x} ${topY}`}
              fill="none"
              stroke="url(#verticalMeshGrad)"
              strokeWidth="1"
              strokeDasharray="3 3"
              strokeOpacity="0.5"
            />
          );
        })}

        {/* Ambient floating data particles */}
        <circle cx="280" cy="180" r="2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="330" cy="170" r="1.5" fill="#38BDF8" opacity="0.8" />
        <circle cx="220" cy="240" r="2" fill="#38BDF8" opacity="0.7" />
        <circle cx="380" cy="230" r="2" fill="#93C5FD" opacity="0.7" />
        <circle cx="300" cy="210" r="2.5" fill="#FFFFFF" opacity="0.9" />
      </svg>
    </div>
  );
}
