import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { HelpStrip, PageIntro, Shell } from "@/components/shell";
import { myths, quiz } from "@/lib/content";
import { useStored } from "@/lib/use-stored";

export const Route = createFileRoute("/myths")({
  head: () => ({
    meta: [{ title: "Myths and facts — End Early Pregnancies" }],
  }),
  component: MythsPage,
});

function MythsPage() {
  return (
    <Shell tone="page">
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <HelpStrip />
        <PageIntro
          kicker="Page 6 · Myths"
          title="Myths, facts and key messages"
          lede="Tap a myth to read the fact. Then try the eight-question check."
        />
        <ul className="grid gap-3">
          {myths.map((item) => (
            <li key={item.myth}>
              <Myth myth={item.myth} fact={item.fact} />
            </li>
          ))}
        </ul>
        <Quiz />
      </div>
    </Shell>
  );
}

function Myth({ myth, fact }: { myth: string; fact: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        className="press flex w-full items-start gap-3 p-4 text-left"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="mt-0.5 shrink-0 rounded-md bg-ember px-2 py-1 text-xs font-bold tracking-wide text-forest-deep uppercase">
          Myth
        </span>
        <span className="flex-1 leading-snug font-medium">{myth}</span>
        <ChevronDown
          className={`mt-0.5 size-5 shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div className={`fold ${open ? "open" : ""}`}>
        <div className="overflow-hidden">
          <div className="flex items-start gap-3 border-t border-line px-4 py-4">
            <span className="shrink-0 rounded-md bg-forest px-2 py-1 text-xs font-bold tracking-wide text-cream uppercase">
              Fact
            </span>
            <p className="leading-relaxed">{fact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Quiz() {
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);
  const [best, setBest] = useStored("sep-quiz-best", 0);
  const current = quiz[answers.length];
  const score = answers.reduce((sum, answer, index) => sum + (answer === quiz[index]?.answer ? 1 : 0), 0);

  function choose(value: boolean) {
    const next = [...answers, value];
    setAnswers(next);
    if (next.length === quiz.length) {
      const nextScore = next.reduce(
        (sum, answer, index) => sum + (answer === quiz[index]?.answer ? 1 : 0),
        0,
      );
      setBest((previous) => Math.max(previous, nextScore));
      setDone(true);
    }
  }

  function again() {
    setAnswers([]);
    setDone(false);
  }

  return (
    <section id="check" className="mt-10 scroll-mt-24">
      <h2 className="font-display text-3xl text-ink">Check what you know</h2>
      <p className="mt-2 text-muted">
        True or false, from the handbook. {best > 0 ? `Best score on this phone: ${best} of ${quiz.length}.` : "Your score stays on this phone."}
      </p>

      {done ? (
        <div className="card mt-4 p-5" aria-live="polite">
          <p className="font-display text-5xl leading-none text-forest tabular-nums">
            {score}
            <span className="text-2xl text-muted"> / {quiz.length}</span>
          </p>
          <p className="mt-3 leading-relaxed">
            {score === quiz.length
              ? "You know the facts. Share them with a friend — and remember support, not stigma."
              : "Look again at the ones below. The facts are there to protect you, not to catch you out."}
          </p>
          <ul className="mt-4 grid gap-3">
            {quiz.map((item, index) =>
              answers[index] === item.answer ? null : (
                <li key={item.prompt} className="rounded-xl bg-cream-2 px-3 py-3">
                  <p className="font-medium">{item.prompt}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.answer ? "True. " : "False. "}
                    {item.why}
                  </p>
                </li>
              ),
            )}
          </ul>
          <button type="button" className="btn-ember mt-5" onClick={again}>
            Try again
          </button>
        </div>
      ) : current ? (
        <div className="card mt-4 p-5">
          <p className="text-xs font-semibold tracking-widest text-forest uppercase tabular-nums">
            {answers.length + 1} of {quiz.length}
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
            <div
              className="bar-fill h-full rounded-full bg-forest"
              style={{ width: `${(answers.length / quiz.length) * 100}%` }}
            />
          </div>
          <p className="mt-4 font-display text-2xl leading-snug text-ink">{current.prompt}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button type="button" className="btn-ember" onClick={() => choose(true)}>
              True
            </button>
            <button
              type="button"
              className="press min-h-12 rounded-full bg-forest-deep px-4 font-semibold text-cream"
              onClick={() => choose(false)}
            >
              False
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
