import { SectionCard } from "../components/ui/SectionCard";
import { challengeCards, dashboardStats, learningQueue } from "../lib/data";


export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <SectionCard eyebrow="7 day streak maintained" title="Welcome back, maintainer.">
          <p className="max-w-2xl text-base leading-7 text-muted">
            Your cohorts are moving steadily through contribution pathways. Next milestone is reducing
            average first-PR review time while keeping learning quality high.
          </p>
        </SectionCard>
        <SectionCard eyebrow="Program status" title="Operations overview">
          <div className="space-y-3 text-sm text-muted">
            <p>Admin view configured for contributor onboarding, Git practice, and challenge operations.</p>
            <p className="font-mono text-primary">sandbox mode: safe-verification-only</p>
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {dashboardStats.map((stat) => (
          <SectionCard key={stat.label} eyebrow={stat.meta} title={stat.value}>
            <p className="text-sm text-muted">{stat.label}</p>
          </SectionCard>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard eyebrow="Resume learning" title="Cohorts in motion">
          <div className="space-y-4">
            {learningQueue.map((item) => (
              <div key={item.title} className="rounded-2xl bg-surface-low p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                  </div>
                  <button className="rounded-xl bg-primary-container px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {item.cta}
                  </button>
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{item.meta}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Upcoming challenges" title="Recommended admin pushes">
          <div className="space-y-4">
            {challengeCards.map((item) => (
              <div key={item.title} className="rounded-2xl bg-surface-low p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-tertiary">{item.badge}</p>
                <h3 className="mt-2 text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
    </div>
  );
}
