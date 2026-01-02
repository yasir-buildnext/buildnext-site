import { useRef, useState, useEffect } from 'react';

export default function ImageCompareSlider({
  oldImage,
  newImage,
  initial = 50,
}) {
  const containerRef = useRef(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(initial);

  const clamp = (v) => Math.max(0, Math.min(100, v));

  const setFromClientX = (clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(pct));
  };

  const onPointerDown = (e) => {
    draggingRef.current = true;
    setFromClientX(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = (e) => {
    draggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  // prevent page scroll while dragging on touch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const prevent = (e) => draggingRef.current && e.preventDefault();
    el.addEventListener('touchmove', prevent, { passive: false });
    return () => el.removeEventListener('touchmove', prevent);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div
        ref={containerRef}
        className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl border border-slate-700 bg-black select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ touchAction: 'none' }}
      >
        {/* OLD IMAGE (FULL) */}
        <img
          src={oldImage}
          alt="Old"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* NEW IMAGE (REVEALED) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
            willChange: 'clip-path',
          }}
        >
          <img
            src={newImage}
            alt="New"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* DIVIDER */}
        <div
          className="absolute top-0 bottom-0 z-20"
          style={{ left: `${position}%` }}
        >
          <div className="w-[3px] h-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.4)]" />
        </div>

        {/* HANDLE */}
        <div
          className="absolute z-30 top-1/2 -translate-y-1/2"
          style={{ left: `${position}%` }}
        >
          <div
            className="w-12 h-12 -translate-x-1/2 rounded-full bg-white text-black
                       flex items-center justify-center shadow-lg font-bold"
          >
            ⇆
          </div>
        </div>

        {/* LABELS */}
        <div className="absolute bottom-4 left-4 z-40 text-xs bg-black/60 px-3 py-1 rounded">
          Old
        </div>
        <div className="absolute bottom-4 right-4 z-40 text-xs bg-black/60 px-3 py-1 rounded">
          New
        </div>
      </div>
    </div>
  );
}
