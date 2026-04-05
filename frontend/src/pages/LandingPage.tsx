import { Link } from "react-router-dom";
import { SectionCard } from "../components/ui/SectionCard";


export function LandingPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[28px] border border-outline bg-surface-high/80 shadow-card backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-tertiary">
                Open Source Program Admin
              </p>
              <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">
                Run contributor education like a premium open source operations desk.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted">
                A modern admin platform for curriculum delivery, interactive Git practice, challenge scoring,
                and healthy community workflows that feel closer to a crafted IDE than a generic dashboard.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/dashboard"
                  className="rounded-xl bg-[linear-gradient(135deg,#4f46e5,#7c72ff)] px-5 py-3 font-semibold text-white shadow-card"
                >
                  Open Dashboard
                </Link>
                <Link
                  to="/signup"
                  className="rounded-xl border border-outline bg-surface-low px-5 py-3 font-semibold text-muted"
                >
                  Create Admin Account
                </Link>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(195,192,255,0.2),transparent_30%),linear-gradient(180deg,#141b30_0%,#0b1326_100%)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(79,70,229,0.16)_40%,transparent_65%)]" />
              <div className="absolute inset-y-0 right-8 flex items-center">
                <div className="h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.55),rgba(79,70,229,0.02)_65%)] blur-2xl" />
              </div>
            </div>
          </div>
        </div>
        <SectionCard eyebrow="Operational readiness" title="Built for high-trust public collaboration">
          <div className="space-y-4 text-sm leading-6 text-muted">
            <p>Contribution-safe repository docs, admin-friendly scaffolding, and clear room for mentors, organizers, and participants.</p>
            <p>Lessons, community visibility, challenge ops, and sandbox practice all sit in one cohesive control surface.</p>
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <SectionCard eyebrow="Curriculum" title="Structured tracks">
          <p className="text-sm leading-6 text-muted">Guide learners from first issue discovery to advanced Git recovery and review etiquette.</p>
        </SectionCard>
        <SectionCard eyebrow="Sandbox" title="Safe command practice">
          <p className="text-sm leading-6 text-muted">Verify Git commands against lesson goals without exposing a real shell or project filesystem.</p>
        </SectionCard>
        <SectionCard eyebrow="Community" title="Admin oversight">
          <p className="text-sm leading-6 text-muted">Monitor engagement, challenge throughput, and support load across your cohorts.</p>
        </SectionCard>
      </section>
    </div>
  );
}
