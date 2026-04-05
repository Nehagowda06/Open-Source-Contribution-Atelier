import { SectionCard } from "../components/ui/SectionCard";
import { communityStats } from "../lib/data";


export function CommunityPage() {
  return (
    <div className="space-y-6">
      <SectionCard eyebrow="Community" title="Leaderboards and cohort stats">
        <p className="max-w-2xl text-sm leading-6 text-muted">
          Track participation, mentor responsiveness, and support load across the program without losing the premium control-room feel.
        </p>
      </SectionCard>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {communityStats.map((item) => (
          <SectionCard key={item.label} title={item.value}>
            <p className="text-sm text-muted">{item.label}</p>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
