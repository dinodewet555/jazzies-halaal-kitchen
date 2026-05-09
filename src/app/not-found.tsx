import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="container-prose flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
        404
      </p>
      <h1 className="mt-3 text-balance text-4xl md:text-5xl">
        We can&apos;t find that page
      </h1>
      <p className="mt-4 max-w-md text-base text-ink-muted md:text-lg">
        The page may have moved, or the link may be broken. Try the menu or
        send us a message.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary" size="lg">
          Back home
        </Button>
        <Button href="/menu" variant="outline" size="lg">
          See the menu
        </Button>
        <WhatsAppButton size="lg" />
      </div>
    </section>
  );
}
