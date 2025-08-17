"use client";

export function FloatingCodeLine({ index, code }: { index: number; code: string }) {
  return (
    <div
      className="absolute font-mono text-lg text-white/30"
      style={{
        left: `${(index * 12.5) % 95}%`,
        top: `${(index * 12.5) % 98}%`,
        transform: `rotate(${index * 15}deg)`,
      }}
    >
      {code}
    </div>
  );
}
