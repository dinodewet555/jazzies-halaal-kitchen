import { ShieldCheck, Users, Soup, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "MJC Halaal Certified" },
  { icon: Users, label: "Family-owned and operated" },
  { icon: Soup, label: "Cape Malay heritage cooking" },
  { icon: Clock, label: "Open Tuesday to Sunday" },
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Trust signals"
      className="border-y border-edge bg-cream-warm"
    >
      <div className="container-prose py-5">
        <ul className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4 md:gap-6">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-ink-muted"
            >
              <Icon className="h-5 w-5 shrink-0 text-emerald-brand" aria-hidden="true" />
              <span className="font-medium text-ink">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
