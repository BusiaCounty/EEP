import { createFileRoute } from "@tanstack/react-router";
import { HelpStrip, PageIntro, Shell } from "@/components/shell";
import {
  causes,
  dangers,
  healthyChoices,
  keyMessages,
  resistPressure,
  warningSigns,
} from "@/lib/content";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [{ title: "How to protect yourself — End Early Pregnancies" }],
  }),
  component: LearnPage,
});

const jumps = [
  ["what", "What it is"],
  ["causes", "Causes"],
  ["dangers", "Dangers"],
  ["protect", "Protect yourself"],
] as const;

function LearnPage() {
  return (
    <Shell tone="page">
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <HelpStrip />
        <PageIntro
          kicker="Pages 2 and 5 · Learn"
          title="What it is, and how to protect yourself"
          lede="Pregnancy during adolescence can affect a young person’s education, health, emotional well-being, relationships and future."
        />

        <div className="-mx-4 mb-8 px-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {jumps.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="shrink-0 rounded-full bg-forest-deep px-4 py-2.5 text-sm font-semibold text-cream"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <section id="what" className="scroll-mt-24">
          <h2 className="font-display text-3xl text-ink">What is teenage pregnancy?</h2>
          <div className="card mt-4 p-4">
            <p className="text-xs font-semibold tracking-widest text-ember-deep uppercase">
              Teenage pregnancy
            </p>
            <p className="mt-2 leading-relaxed">
              Pregnancy occurring during adolescence, generally among girls aged 10–19 years.
            </p>
          </div>
        </section>

        <section id="early" className="mt-8 scroll-mt-24">
          <h2 className="font-display text-3xl text-ink">It can happen early</h2>
          <p className="mt-3 leading-relaxed">
            A girl can become pregnant once ovulation begins, even if she has only recently started
            menstruating — and before she feels physically, emotionally or socially ready to be a
            mother.
          </p>
        </section>

        <section id="causes" className="mt-8 scroll-mt-24">
          <h2 className="font-display text-3xl text-ink">Why it happens</h2>
          <p className="mt-2 text-muted">Causes and what puts girls at risk.</p>
          <ul className="ticks mt-4 sm:grid-cols-2">
            {causes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="dangers" className="mt-8 scroll-mt-24">
          <h2 className="font-display text-3xl text-ink">Dangers of early pregnancy</h2>
          <ul className="ticks mt-4 sm:grid-cols-2">
            {dangers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="risk" className="card mt-8 scroll-mt-24 bg-forest-deep p-5 text-cream">
          <h2 className="font-display text-3xl">Sex at a young age is risky, with or without pregnancy</h2>
          <p className="mt-3 leading-relaxed text-cream/90">
            Sex at a young age is dangerous even when no pregnancy happens. It exposes girls to HIV
            and other infections, to pressure, sexual violence and exploitation, and to fear, shame
            and emotional hurt.
          </p>
          <p className="mt-3 font-semibold">
            Sex with a child under 18 is a crime in Kenya (defilement). It is never the girl’s fault.
          </p>
        </section>

        <section id="protect" className="mt-8 scroll-mt-24">
          <h2 className="font-display text-3xl text-ink">Make healthy choices</h2>
          <ul className="ticks mt-4 sm:grid-cols-2">
            {healthyChoices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="pressure" className="mt-8 scroll-mt-24">
          <h2 className="font-display text-3xl text-ink">Resist pressure from boys and men</h2>
          <ul className="ticks mt-4">
            {resistPressure.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="card mt-4 border-l-4 border-ember p-4">
            <h3 className="font-display text-2xl text-ink">Pressure is not love</h3>
            <p className="mt-2 leading-relaxed">
              No one has the right to pressure or force you. Gifts or money do not mean you owe
              anyone anything.
            </p>
          </div>
        </section>

        <section id="warnings" className="mt-8 scroll-mt-24">
          <h2 className="font-display text-3xl text-ink">Be careful when someone:</h2>
          <ul className="ticks mt-4 sm:grid-cols-2">
            {warningSigns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="contraceptives" className="card mt-8 scroll-mt-24 bg-forest p-5 text-cream">
          <h2 className="font-display text-3xl">If it is a must that you have sex, use contraceptives.</h2>
          <p className="mt-3 leading-relaxed text-cream/90">
            They are readily available at nearby hospitals and clinics. Ask a health worker which
            method is right for you. Condoms also protect against HIV and other infections.
          </p>
        </section>

        <section id="messages" className="mt-8 scroll-mt-24">
          <h2 className="font-display text-3xl text-ink">Key messages</h2>
          <ul className="mt-4 grid gap-3">
            {keyMessages.map((message) => (
              <li key={message} className="card px-4 py-3 leading-relaxed">
                {message}
              </li>
            ))}
          </ul>
          <div className="card mt-3 p-4">
            <h3 className="font-display text-2xl">Early care protects you</h3>
            <p className="mt-2 leading-relaxed">
              Think you may be pregnant? See a health worker quickly. It is private and you will be
              helped.
            </p>
          </div>
          <div className="card mt-3 p-4">
            <h3 className="font-display text-2xl">Pregnancy can stop your dreams</h3>
            <p className="mt-2 leading-relaxed">
              But it does not have to be the end. With support, a girl can go back to school.
            </p>
          </div>
        </section>
      </div>
    </Shell>
  );
}
