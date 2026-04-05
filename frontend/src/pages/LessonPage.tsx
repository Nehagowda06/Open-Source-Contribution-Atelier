import { SectionCard } from "../components/ui/SectionCard";
import { TerminalPanel } from "../components/ui/TerminalPanel";
import { lessonPreview } from "../lib/data";


export function LessonPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <SectionCard eyebrow="Lesson module" title={lessonPreview.title}>
        <p className="text-muted">{lessonPreview.summary}</p>
        <div className="mt-6 rounded-3xl bg-surface-low p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Micro explanation</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Good contributors inspect repository state before changing files so they can commit with intention and avoid noisy diffs.
          </p>
        </div>
        <div className="mt-4 rounded-3xl bg-surface-low p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-tertiary">Workflow note</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            This admin surface can later pull lesson text, expected commands, and scoring policy directly from the backend APIs.
          </p>
        </div>
      </SectionCard>
      <TerminalPanel expectedCommand={lessonPreview.expectedCommand} />
    </div>
  );
}
