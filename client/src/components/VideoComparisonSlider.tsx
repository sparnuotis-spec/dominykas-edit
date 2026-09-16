import { useState } from 'react';
import { GripVertical } from 'lucide-react';

export default function VideoComparisonSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="mt-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
        <div>
          <div className="text-xs uppercase tracking-[.16em] font-bold text-[#9b7b00] mb-2">Palyginimas</div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold">Tas pats dangus. Kitas jausmas.</h3>
        </div>
        <p className="text-sm text-[#6d6a61] max-w-sm sm:text-right">Palyginkite įprasto drono ir FPV skrydžio charakterį. Vilkite liniją per kadrą.</p>
      </div>

      <div
        className="relative aspect-video overflow-hidden rounded-3xl border border-[#d9d4c8] bg-[#27251f] shadow-xl select-none touch-none"
        onPointerMove={(event) => {
          if (event.buttons !== 1) return;
          const rect = event.currentTarget.getBoundingClientRect();
          setPosition(Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100)));
        }}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          const rect = event.currentTarget.getBoundingClientRect();
          setPosition(Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100)));
        }}
      >
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-label="FPV drono skrydis">
          <source src="/images/comparison-fpv.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <video className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / Math.max(position, 1)}%`, maxWidth: 'none' }} autoPlay muted loop playsInline preload="metadata" aria-label="Tradicinio drono skrydis">
            <source src="/images/comparison-dji.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute top-4 left-4 rounded-full bg-[#fcfbf7]/90 px-3 py-1.5 text-xs font-bold text-[#27251f]">Tradicinis dronas</div>
        <div className="absolute top-4 right-4 rounded-full bg-[#efc400]/95 px-3 py-1.5 text-xs font-bold text-[#27251f]">FPV</div>
        <div className="absolute top-0 bottom-0 -translate-x-1/2 pointer-events-none" style={{ left: `${position}%` }}>
          <div className="h-full w-0.5 bg-white/90 shadow-[0_0_8px_rgba(0,0,0,.45)]" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid place-items-center w-11 h-11 rounded-full bg-[#efc400] text-[#27251f] shadow-lg"><GripVertical className="w-5 h-5" /></div>
        </div>
        <input aria-label="Palyginimo slankiklis" type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize" />
      </div>
      <div className="flex justify-between mt-3 text-xs font-bold uppercase tracking-wider text-[#9b7b00]"><span>Tradicinis dronas</span><span>FPV skrydis</span></div>
    </div>
  );
}
