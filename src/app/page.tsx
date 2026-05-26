import PanelCard from "../components/ui/PanelCard";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";

type StatusTone = "alert" | "locked" | "online" | "synced";

const leftPanels = [
  {
    label: "SYS-ID",
    meta: "NODE 07 // SERVO CHAMBER",
    status: "ONLINE",
    statusTone: "online",
    title: "Auxiliary Feed Stack",
    lines: [
      "Signal integrity 98.2%",
      "Servo-link synchronized",
      "Relay cluster VII online",
    ],
  },
  {
    label: "NODE",
    meta: "ARMORIUM // CHAIN OF SEAL",
    status: "LOCKED",
    statusTone: "locked",
    title: "Armorium Relay",
    lines: [
      "Plating archive indexed",
      "Seal diagnostics stable",
      "Requisition lock cleared",
    ],
  },
] as const;

const rightPanels = [
  {
    label: "AUTH",
    meta: "TACTICAL NET // NOOSPHERE",
    status: "SYNCED",
    statusTone: "synced",
    title: "Strategic Uplink",
    lines: [
      "Mission codex mirrored",
      "Threat lattice active",
      "Squad telemetry inbound",
    ],
  },
  {
    label: "SYS-ID",
    meta: "RELIQUARY // VAULT ACCESS",
    status: "ONLINE",
    statusTone: "online",
    title: "Vault Access",
    lines: [
      "Reliquary seals intact",
      "Pattern cache available",
      "Command keys verified",
    ],
  },
] as const;

const statusStrip = [
  {
    label: "SYS-ID",
    meta: "COMMAND CORE",
    status: "ONLINE",
    statusTone: "online",
    value: "CMND-PRIME",
  },
  {
    label: "NODE",
    meta: "COGITATOR LINK",
    status: "SYNCED",
    statusTone: "synced",
    value: "THRONE-RELAY-07",
  },
  {
    label: "AUTH",
    meta: "SEAL TIER OMEGA",
    status: "LOCKED",
    statusTone: "locked",
    value: "MAG-LOCK SIGIL",
  },
] as const;

const directiveCells = [
  {
    label: "PRIMARY DIRECTIVE",
    meta: "WEAPON SCHEMAS // CLASS RITES",
    value: "Loadout Builder",
  },
  {
    label: "SECONDARY DIRECTIVE",
    meta: "PLATING PRESERVES // HERALDRY",
    value: "Armor Forge",
  },
] as const;

const deploymentQueue = [
  {
    label: "01",
    meta: "CLASS DOCTRINE PACKAGES",
    status: "SYNCED",
    statusTone: "synced",
    title: "Loadout matrix queued",
  },
  {
    label: "02",
    meta: "ARMOR SEAL COMPARTMENT",
    status: "ONLINE",
    statusTone: "online",
    title: "Forge presets available",
  },
  {
    label: "03",
    meta: "MISSION BRIEF PIPELINE",
    status: "ALERT",
    statusTone: "alert",
    title: "Threat pressure elevated",
  },
] as const;

const systemReadouts = [
  { label: "ARMOR INTEGRITY", value: "87%", tone: "text-emerald-200" },
  { label: "RELIC SYNC", value: "STABLE", tone: "text-cyan-200" },
  { label: "TACTICAL UPLINK", value: "GREEN", tone: "text-emerald-300" },
  { label: "THREAT FILTER", value: "SECTOR IV", tone: "text-red-300" },
] as const;

const commandNotes = [
  {
    label: "AUTH",
    value: "Command seal authenticated through reliquary gate.",
  },
  {
    label: "NODE",
    value: "Throne relay locked to battle barge command lattice.",
  },
  {
    label: "SYS-ID",
    value: "Hardened interface ready for loadout and armor directives.",
  },
] as const;

const lowerSystems = [
  {
    bar: "w-[82%] bg-emerald-300/80",
    label: "SYSTEM STATUS",
    meta: "MACHINE SPIRIT // FEED STABLE",
    readout: "MAG-LINK",
    status: "ONLINE",
    statusTone: "online",
    title: "Machine Spirit Stable",
    tone: "text-emerald-300",
    value: "99.4%",
  },
  {
    bar: "w-[66%] bg-red-300/80",
    label: "THREAT PRIORITY",
    meta: "AUSPEX FILTER // PRESSURE RISING",
    readout: "WARDEN",
    status: "ALERT",
    statusTone: "alert",
    title: "Xenos Contact Elevated",
    tone: "text-red-300",
    value: "SECTOR IV",
  },
  {
    bar: "w-[74%] bg-cyan-200/80",
    label: "COMMAND QUEUE",
    meta: "REQUISITION STACK // ACTIVE",
    readout: "SYNC BUS",
    status: "SYNCED",
    statusTone: "synced",
    title: "Loadout Orders Ready",
    tone: "text-cyan-200",
    value: "06",
  },
] as const;

function getStatusChipClassName(tone: StatusTone) {
  switch (tone) {
    case "alert":
      return "border-red-300/20 bg-red-500/8 text-red-200/80";
    case "locked":
      return "border-amber-300/20 bg-amber-400/8 text-amber-200/80";
    case "online":
      return "border-emerald-300/20 bg-emerald-400/8 text-emerald-200/85";
    case "synced":
      return "border-cyan-300/20 bg-cyan-400/8 text-cyan-100/85";
    default:
      return "border-white/15 bg-white/5 text-white/75";
  }
}

function StatusChip({
  label,
  tone,
}: {
  label: string;
  tone: StatusTone;
}) {
  return (
    <span
      className={`inline-flex items-center border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.24em] ${getStatusChipClassName(
        tone,
      )}`}
    >
      [{label}]
    </span>
  );
}

function Divider() {
  return (
    <div className="h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.14),rgba(255,255,255,0))]" />
  );
}

function SideTerminal({
  label,
  meta,
  status,
  statusTone,
  title,
  lines,
}: {
  label: string;
  meta: string;
  status: string;
  statusTone: StatusTone;
  title: string;
  lines: readonly string[];
}) {
  return (
    <PanelCard className="px-3 py-3">
      <div className="flex items-start justify-between gap-3 border-b border-white/8 pb-2.5">
        <div className="min-w-0 text-left">
          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-emerald-300/75">
            {label}
          </p>
          <h2 className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
            {title}
          </h2>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/38">
            {meta}
          </p>
        </div>
        <StatusChip label={status} tone={statusTone} />
      </div>

      <div className="mt-3 space-y-2">
        {lines.map((line, index) => (
          <div
            key={line}
            className="grid grid-cols-[18px_1fr] items-start gap-2 border border-white/7 bg-[linear-gradient(180deg,rgba(16,19,24,0.84),rgba(7,9,13,0.94))] px-2.5 py-2"
          >
            <span className="font-mono text-[10px] text-white/35">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-[10px] leading-5 text-emerald-200/74">
              {line}
            </span>
          </div>
        ))}
      </div>
    </PanelCard>
  );
}

function LowerSystemModule({
  bar,
  label,
  meta,
  readout,
  status,
  statusTone,
  title,
  tone,
  value,
}: {
  bar: string;
  label: string;
  meta: string;
  readout: string;
  status: string;
  statusTone: StatusTone;
  title: string;
  tone: string;
  value: string;
}) {
  return (
    <PanelCard className="px-3 py-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 text-left">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/42">
            {label}
          </p>
          <h3 className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
            {title}
          </h3>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/38">
            {meta}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <StatusChip label={status} tone={statusTone} />
          <p className={`text-sm font-black uppercase tracking-[0.18em] ${tone}`}>
            {value}
          </p>
        </div>
      </div>

      <div className="mt-3 h-px bg-white/10" />

      <div className="mt-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.26em] text-white/34">
        <span>AUTH</span>
        <span>{readout}</span>
      </div>

      <div className="mt-2 h-2.5 w-full border border-white/8 bg-black/35 p-[2px]">
        <div className={`h-full ${bar}`} />
      </div>
    </PanelCard>
  );
}

export default function HomePage() {
  return (
    <section className="relative min-h-[80vh] py-6 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(54,89,122,0.22),transparent_22%),radial-gradient(circle_at_center,rgba(7,14,20,0.56),rgba(4,6,10,0.82)_58%,rgba(2,3,5,0.96)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.38),rgba(0,0,0,0.08)_18%,rgba(0,0,0,0.08)_82%,rgba(0,0,0,0.42))]" />

      <div className="relative mx-auto grid max-w-7xl gap-4 xl:grid-cols-[260px_minmax(0,1.1fr)_260px]">
        <div className="space-y-4">
          {leftPanels.map((panel) => (
            <SideTerminal
              key={panel.title}
              label={panel.label}
              lines={panel.lines}
              meta={panel.meta}
              status={panel.status}
              statusTone={panel.statusTone}
              title={panel.title}
            />
          ))}
        </div>

        <PanelCard className="!border-cyan-300/16 px-4 py-4 !shadow-[0_32px_80px_rgba(0,0,0,0.62),0_0_0_1px_rgba(22,34,46,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-5 sm:py-5">
          <div className="space-y-4">
            <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_240px]">
              <div className="text-left">
                <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-emerald-300/78">
                  Tactical Command Interface
                </p>
                <h1 className="mt-2 text-3xl font-black uppercase tracking-[0.08em] text-white sm:text-4xl">
                  Space Marine 2 Companion
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62">
                  Battle-ready command terminal for sanctioned loadout
                  planning, armor rites, and live operational readouts.
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/38">
                  sys-id: cmnd-prime // node: throne-relay-07 // auth:
                  mag-lock
                </p>
              </div>
              <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(18,22,28,0.88),rgba(8,10,14,0.95))] px-3 py-3 text-left">
                <div className="flex items-center justify-between gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">
                  <span>Command Header</span>
                  <StatusChip label="LOCKED" tone="locked" />
                </div>
                <div className="mt-3 h-px bg-white/10" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                  Seal Status
                </p>
                <p className="mt-2 font-mono text-[10px] leading-5 text-emerald-200/74">
                  Operative link stable. Machine spirit aligned. Mission
                  schema ready for requisition input.
                </p>
              </div>
            </div>

            <Divider />

            <div className="grid gap-2 md:grid-cols-3">
              {statusStrip.map((item) => (
                <div
                  key={item.label}
                  className="border border-white/8 bg-[linear-gradient(180deg,rgba(17,21,26,0.84),rgba(7,9,12,0.94))] px-3 py-3 text-left"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/42">
                        {item.label}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                        {item.value}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
                        {item.meta}
                      </p>
                    </div>
                    <StatusChip label={item.status} tone={item.statusTone} />
                  </div>
                </div>
              ))}
            </div>

            <Divider />

            <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(15,20,27,0.9),rgba(6,8,12,0.98))] px-3 py-3 text-left">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/8 pb-3">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-emerald-300/72">
                      Main Action Area
                    </p>
                    <h2 className="mt-1.5 text-xl font-black uppercase tracking-[0.08em] text-white sm:text-2xl">
                      Mission Command Console
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/62">
                      Direct access to battle loadouts, armor configuration,
                      and field doctrine from a hardened command station.
                    </p>
                  </div>
                  <StatusChip label="SYNCED" tone="synced" />
                </div>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {directiveCells.map((cell) => (
                    <div
                      key={cell.label}
                      className="border border-white/7 bg-[linear-gradient(180deg,rgba(17,21,26,0.82),rgba(8,10,14,0.95))] px-3 py-3"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-emerald-300/72">
                        {cell.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                        {cell.value}
                      </p>
                      <p className="mt-2 font-mono text-[10px] leading-5 text-white/50">
                        {cell.meta}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <PrimaryButton
                    className="min-w-[190px]"
                    href="/loadout-builder"
                  >
                    Build Loadout
                  </PrimaryButton>
                  <SecondaryButton
                    className="min-w-[190px]"
                    href="/armor-forge"
                  >
                    Customize Armor
                  </SecondaryButton>
                </div>
              </div>

              <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(18,22,28,0.86),rgba(8,10,13,0.95))] px-3 py-3 text-left">
                <div className="flex items-start justify-between gap-3 border-b border-white/8 pb-2.5">
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/42">
                      Status Strip
                    </p>
                    <h2 className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                      Deployment Queue
                    </h2>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
                      node prime // tactical dispatch
                    </p>
                  </div>
                  <StatusChip label="ONLINE" tone="online" />
                </div>

                <div className="mt-3 space-y-2">
                  {deploymentQueue.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[24px_1fr_auto] items-center gap-2 border border-white/7 bg-[linear-gradient(180deg,rgba(14,17,22,0.84),rgba(7,9,12,0.94))] px-2.5 py-2"
                    >
                      <span className="font-mono text-[10px] text-white/34">
                        {item.label}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/82">
                          {item.title}
                        </p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/38">
                          {item.meta}
                        </p>
                      </div>
                      <StatusChip
                        label={item.status}
                        tone={item.statusTone}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Divider />

            <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(15,18,23,0.82),rgba(6,8,11,0.95))] px-3 py-3 text-left">
                <div className="flex items-start justify-between gap-3 border-b border-white/8 pb-2.5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-emerald-300/72">
                      System Readout
                    </p>
                    <h2 className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                      Machine Output
                    </h2>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
                      relay auspex // internal metrics
                    </p>
                  </div>
                  <StatusChip label="ONLINE" tone="online" />
                </div>

                <div className="mt-3 space-y-2 font-mono text-[10px] uppercase tracking-[0.16em]">
                  {systemReadouts.map((item, index) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between gap-4 py-2 ${
                        index !== systemReadouts.length - 1
                          ? "border-b border-white/8"
                          : ""
                      }`}
                    >
                      <span className="text-white/44">{item.label}</span>
                      <span className={`font-semibold ${item.tone}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(17,20,25,0.82),rgba(7,8,12,0.95))] px-3 py-3 text-left">
                <div className="flex items-start justify-between gap-3 border-b border-white/8 pb-2.5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/42">
                      System Notes
                    </p>
                    <h2 className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                      Command Routing
                    </h2>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
                      status litanies // command metadata
                    </p>
                  </div>
                  <StatusChip label="SYNCED" tone="synced" />
                </div>

                <div className="mt-3 space-y-2">
                  {commandNotes.map((note) => (
                    <div
                      key={note.label}
                      className="border border-white/7 bg-[linear-gradient(180deg,rgba(15,18,22,0.78),rgba(7,8,12,0.92))] px-2.5 py-2"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/38">
                        {note.label}
                      </p>
                      <p className="mt-2 font-mono text-[10px] leading-5 text-emerald-200/72">
                        {note.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PanelCard>

        <div className="space-y-4">
          {rightPanels.map((panel) => (
            <SideTerminal
              key={panel.title}
              label={panel.label}
              lines={panel.lines}
              meta={panel.meta}
              status={panel.status}
              statusTone={panel.statusTone}
              title={panel.title}
            />
          ))}
        </div>

        <div className="grid gap-3 xl:col-span-3 md:grid-cols-3">
          {lowerSystems.map((system) => (
            <LowerSystemModule
              key={system.label}
              bar={system.bar}
              label={system.label}
              meta={system.meta}
              readout={system.readout}
              status={system.status}
              statusTone={system.statusTone}
              title={system.title}
              tone={system.tone}
              value={system.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
