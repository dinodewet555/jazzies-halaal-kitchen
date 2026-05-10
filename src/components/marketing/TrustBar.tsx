import { ShieldCheck, Users, Soup, Clock, Award } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "MJC Halaal Certified", color: "text-emerald-brand" },
  { icon: Users, label: "Family-owned and operated", color: "text-terracotta" },
  { icon: Soup, label: "Cape Malay heritage cooking", color: "text-saffron" },
  { icon: Clock, label: "Open Tuesday to Sunday", color: "text-emerald-brand" },
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Trust signals"
      className="border-b border-edge/20 bg-emerald-brand-dark"
    >
      <div className="container-prose py-6">
        <ul className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4 md:gap-8">
          {items.map(({ icon: Icon, label, color }) => (
            <li
              key={label}
              className="flex items-center gap-3 text-cream/80"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream/10 ${color}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="font-medium text-cream">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
