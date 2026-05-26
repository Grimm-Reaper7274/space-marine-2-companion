import type { HTMLAttributes, ReactNode } from "react";

type PanelCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export default function PanelCard({
  children,
  className,
  ...props
}: PanelCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(20,24,30,0.98)_0%,rgba(11,14,19,0.99)_52%,rgba(5,7,10,1)_100%)] shadow-[0_26px_60px_rgba(0,0,0,0.58),0_0_0_1px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] ${className ?? ""}`}
      {...props}
    >
      <div className="pointer-events-none absolute inset-[1px] rounded-[7px] border border-white/6" />
      <div className="pointer-events-none absolute inset-[6px] rounded-[4px] border border-black/45" />
      <div className="pointer-events-none absolute inset-x-[10px] top-[10px] h-7 rounded-[2px] border border-white/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(43,50,59,0.2)_48%,rgba(11,13,17,0.02)_100%)]" />
      <div className="pointer-events-none absolute left-[14px] top-[14px] h-1.5 w-12 bg-[linear-gradient(90deg,rgba(110,231,183,0.2),rgba(110,231,183,0))]" />
      <div className="pointer-events-none absolute right-[14px] top-[14px] h-1.5 w-10 bg-[linear-gradient(270deg,rgba(96,165,250,0.16),rgba(96,165,250,0))]" />
      <div className="pointer-events-none absolute inset-y-[18px] left-[10px] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-y-[18px] right-[10px] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_80%,rgba(0,0,0,0.2)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.22),transparent_46%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_56%,rgba(0,0,0,0.18)_100%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l border-t border-cyan-300/24" />
      <div className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r border-t border-cyan-300/24" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b border-l border-white/12" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-white/12" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/14" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
