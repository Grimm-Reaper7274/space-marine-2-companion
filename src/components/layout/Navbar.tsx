"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/loadout-builder", label: "Loadout Builder" },
  { href: "/armor-forge", label: "Armor Forge" },
  { href: "/guides", label: "Guides" },
  { href: "/meta", label: "Meta" },
  { href: "/vault", label: "Vault" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full px-4">
      <div className="mx-auto mt-4 max-w-7xl rounded-xl border border-white/10 bg-slate-950/85 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
        <div className="rounded-[inherit] border border-white/5">
          <div className="flex flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
            <Link className="text-lg font-semibold tracking-[0.08em] text-white" href="/">
              Space Marine 2 Companion
            </Link>

            <nav className="flex flex-wrap items-center gap-3">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    className={`rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition duration-200 ${
                      isActive
                        ? "border-cyan-300/25 bg-cyan-400/10 text-white"
                        : "border-transparent bg-transparent text-white/65 hover:border-white/10 hover:bg-white/5 hover:text-white"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <div className="h-px bg-white/10" />
        <div className="px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
          Command Navigation
        </div>
      </div>
    </header>
  );
}
