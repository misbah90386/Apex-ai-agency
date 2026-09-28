import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function TechGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    if (!prefersReducedMotion) {
      setMousePos({ x: 0, y: 0 });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[480px] lg:max-w-[520px] mx-auto flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Volumetric ambient glow background */}
      <div className="absolute inset-0 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-16 bg-sky-500/20 rounded-full blur-[60px] pointer-events-none" />

      {/* 3D Perspective Container with restrained animation and reduced-motion fallback */}
      <motion.div
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `perspective(1200px) rotateX(${10 - mousePos.y}deg) rotateY(${-12 + mousePos.x}deg)`,
          transition: prefersReducedMotion ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full overflow-visible drop-shadow-[0_0_35px_rgba(0,102,255,0.4)]"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="cubeFront" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#051532" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#031A45" stopOpacity="0.8" />
            </linearGradient>

            {/* Glass panel gradients */}
            <linearGradient id="glassPanelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#051226" stopOpacity="0.7" />
            </linearGradient>

            <linearGradient id="neonGlowLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0.2" />
            </linearGradient>

            {/* Radial glow for core */}
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0066FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Ground Concentric Isometric Rings / Grid */}
          <g opacity="0.7">
            {/* Outer Ellipse */}
            <ellipse
              cx="250"
              cy="280"
              rx="210"
              ry="110"
              fill="none"
              stroke="#0066FF"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              strokeOpacity="0.4"
            />
            {/* Mid Ellipse */}
            <ellipse
              cx="250"
              cy="280"
              rx="160"
              ry="85"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />
            {/* Inner Ellipse */}
            <ellipse
              cx="250"
              cy="280"
              rx="100"
              ry="52"
              fill="none"
              stroke="#0066FF"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />

            {/* Isometric floor grid axes */}
            <line x1="50" y1="280" x2="450" y2="280" stroke="#0066FF" strokeWidth="1" strokeOpacity="0.2" />
            <line x1="250" y1="170" x2="250" y2="390" stroke="#0066FF" strokeWidth="1" strokeOpacity="0.2" />
          </g>

          {/* 2. Glowing Connection Circuit Lines */}
          <g>
            <path
              d="M 135 155 Q 185 190 220 205"
              fill="none"
              stroke="url(#neonGlowLine)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 370 155 Q 320 185 285 205"
              fill="none"
              stroke="url(#neonGlowLine)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 140 330 Q 185 300 220 275"
              fill="none"
              stroke="url(#neonGlowLine)"
              strokeWidth="2"
            />
            <path
              d="M 365 330 Q 320 300 280 275"
              fill="none"
              stroke="url(#neonGlowLine)"
              strokeWidth="2"
            />
          </g>

          {/* 3. Central Technology Cube */}
          <g id="central-tech-cube" className="filter drop-shadow-[0_0_25px_rgba(0,102,255,0.8)]">
            <ellipse cx="250" cy="270" rx="65" ry="32" fill="url(#coreGlow)" />

            {/* Cube Top Face */}
            <polygon
              points="250,150 310,185 250,220 190,185"
              fill="url(#cubeTop)"
              stroke="#38BDF8"
              strokeWidth="2"
            />

            {/* Cube Left/Front Face */}
            <polygon
              points="190,185 250,220 250,305 190,265"
              fill="url(#cubeFront)"
              stroke="#38BDF8"
              strokeWidth="2"
            />

            {/* Cube Right Face */}
            <polygon
              points="250,220 310,185 310,265 250,305"
              fill="url(#cubeRight)"
              stroke="#0066FF"
              strokeWidth="2"
            />

            {/* APEX Delta Logo glowing on Front Face */}
            <g transform="translate(202, 235)">
              <polygon
                points="22,6 38,32 6,32"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinejoin="round"
                className="filter drop-shadow-[0_0_8px_#38BDF8]"
              />
              <polygon
                points="22,14 30,30 14,30"
                fill="#38BDF8"
                opacity="0.8"
              />
            </g>

            <line x1="250" y1="220" x2="250" y2="305" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.8" />
          </g>

          {/* 4. Four Surrounding Isometric Floating Panels */}
          {/* Panel 1: Top-Left (AI Symbol) */}
          <g id="panel-ai" transform="translate(70, 95)">
            <polygon
              points="60,0 120,30 60,65 0,35"
              fill="url(#glassPanelGrad)"
              stroke="#38BDF8"
              strokeWidth="1.5"
              className="drop-shadow-[0_0_15px_rgba(0,102,255,0.4)]"
            />
            <polygon
              points="0,35 60,65 60,75 0,45"
              fill="#051532"
              stroke="#0066FF"
              strokeWidth="1"
            />
            <polygon
              points="60,65 120,30 120,40 60,75"
              fill="#031A45"
              stroke="#0066FF"
              strokeWidth="1"
            />
            <text
              x="60"
              y="37"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="20"
              fontWeight="900"
              fontFamily="monospace"
              className="filter drop-shadow-[0_0_8px_#38BDF8]"
            >
              AI
            </text>
            <circle cx="28" cy="30" r="2.5" fill="#38BDF8" />
            <circle cx="92" cy="30" r="2.5" fill="#38BDF8" />
          </g>

          {/* Panel 2: Top-Right (Code Symbol </>) */}
          <g id="panel-code-top" transform="translate(325, 95)">
            <polygon
              points="60,0 120,30 60,65 0,35"
              fill="url(#glassPanelGrad)"
              stroke="#38BDF8"
              strokeWidth="1.5"
              className="drop-shadow-[0_0_15px_rgba(0,102,255,0.4)]"
            />
            <polygon
              points="0,35 60,65 60,75 0,45"
              fill="#051532"
              stroke="#0066FF"
              strokeWidth="1"
            />
            <polygon
              points="60,65 120,30 120,40 60,75"
              fill="#031A45"
              stroke="#0066FF"
              strokeWidth="1"
            />
            <text
              x="60"
              y="37"
              textAnchor="middle"
              fill="#38BDF8"
              fontSize="18"
              fontWeight="bold"
              fontFamily="monospace"
              className="filter drop-shadow-[0_0_8px_#38BDF8]"
            >
              &lt;/&gt;
            </text>
          </g>

          {/* Panel 3: Bottom-Left (Code Symbol </>) */}
          <g id="panel-code-bottom" transform="translate(65, 290)">
            <polygon
              points="60,0 120,30 60,65 0,35"
              fill="url(#glassPanelGrad)"
              stroke="#38BDF8"
              strokeWidth="1.5"
              className="drop-shadow-[0_0_15px_rgba(0,102,255,0.4)]"
            />
            <polygon
              points="0,35 60,65 60,75 0,45"
              fill="#051532"
              stroke="#0066FF"
              strokeWidth="1"
            />
            <polygon
              points="60,65 120,30 120,40 60,75"
              fill="#031A45"
              stroke="#0066FF"
              strokeWidth="1"
            />
            <text
              x="60"
              y="37"
              textAnchor="middle"
              fill="#38BDF8"
              fontSize="18"
              fontWeight="bold"
              fontFamily="monospace"
              className="filter drop-shadow-[0_0_8px_#38BDF8]"
            >
              &lt;/&gt;
            </text>
          </g>

          {/* Panel 4: Bottom-Right (Globe Wireframe) */}
          <g id="panel-globe" transform="translate(325, 290)">
            <polygon
              points="60,0 120,30 60,65 0,35"
              fill="url(#glassPanelGrad)"
              stroke="#38BDF8"
              strokeWidth="1.5"
              className="drop-shadow-[0_0_15px_rgba(0,102,255,0.4)]"
            />
            <polygon
              points="0,35 60,65 60,75 0,45"
              fill="#051532"
              stroke="#0066FF"
              strokeWidth="1"
            />
            <polygon
              points="60,65 120,30 120,40 60,75"
              fill="#031A45"
              stroke="#0066FF"
              strokeWidth="1"
            />
            <circle cx="60" cy="32" r="14" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
            <ellipse cx="60" cy="32" rx="7" ry="14" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
            <line x1="46" y1="32" x2="74" y2="32" stroke="#38BDF8" strokeWidth="1.2" />
          </g>

          {/* 5. Subtle glowing blue particles */}
          <g>
            <circle cx="210" cy="130" r="2" fill="#38BDF8" opacity="0.8" />
            <circle cx="290" cy="140" r="2" fill="#FFFFFF" opacity="0.8" />
            <circle cx="160" cy="220" r="2" fill="#38BDF8" opacity="0.7" />
            <circle cx="340" cy="230" r="2" fill="#38BDF8" opacity="0.7" />
            <circle cx="230" cy="350" r="2" fill="#93C5FD" opacity="0.6" />
            <circle cx="270" cy="370" r="2" fill="#38BDF8" opacity="0.7" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
