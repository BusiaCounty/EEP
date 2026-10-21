import { createFileRoute } from "@tanstack/react-router";
import { HelpStrip, PageIntro, Shell } from "@/components/shell";
import { helpSteps } from "@/lib/content";
import { useStored } from "@/lib/use-stored";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [{ title: "Get help — End Early Pregnancies" }],
  }),
  component: HelpPage,
});

type Adult = { name: string; phone: string };
type Notebook = { adults: Adult[]; clinic: string };

const emptyNotebook = (): Notebook => ({
  adults: [
    { name: "", phone: "" },
    { name: "", phone: "" },
    { name: "", phone: "" },
  ],
  clinic: "",
});

function HelpPage() {
  const [notebook, setNotebook] = useStored<Notebook>("sep-notebook", emptyNotebook());
  const stored = notebook?.adults?.length === 3 ? notebook : emptyNotebook();
  const adults = stored.adults;

  function updateAdult(index: number, patch: Partial<Adult>) {
    const next = adults.map((adult, item) => (item === index ? { ...adult, ...patch } : adult));
    setNotebook({ ...stored, adults: next });
  }

  return (
    <Shell tone="page">
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <HelpStrip />
        <PageIntro
          kicker="Page 7 · Help"
          title="What you can do and where to get help"
          lede="You deserve information, safety, respect, healthcare and a chance to learn and build your future."
        />

        <ol id="steps" className="grid scroll-mt-24 gap-3">
          {helpSteps.map((step, index) => (
            <li key={step.title} className="card flex gap-4 p-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest font-display text-lg text-cream">
                {index + 1}
              </span>
              <span>
                <span className="block font-display text-2xl leading-tight text-ink">{step.title}</span>
                <span className="mt-1 block leading-relaxed text-muted">{step.text}</span>
              </span>
            </li>
          ))}
        </ol>

        <section id="emergency" className="card mt-6 scroll-mt-24 bg-forest-deep p-5 text-cream">
          <h2 className="font-display text-3xl">If someone forces or pressures you</h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              "Get to a safe place.",
              "Tell a trusted adult.",
              "Report it. It is NOT your fault.",
            ].map((step, index) => (
              <li key={step} className="rounded-xl bg-cream/10 px-3 py-3">
                <span className="font-display text-2xl text-ember">{index + 1}</span>
                <p className="mt-1 leading-snug">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="lines" className="mt-6 scroll-mt-24">
          <h2 className="font-display text-3xl text-ink">Free lines</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href="tel:116" className="card press block p-5">
              <p className="font-display text-5xl leading-none text-forest tabular-nums">116</p>
              <p className="mt-2 font-semibold text-ink">Childline Kenya</p>
              <p className="text-sm text-muted">Free call. For children.</p>
            </a>
            <a href="tel:1195" className="card press block p-5">
              <p className="font-display text-5xl leading-none text-forest tabular-nums">1195</p>
              <p className="mt-2 font-semibold text-ink">GBV helpline</p>
              <p className="text-sm text-muted">Free call. Help and rescue.</p>
            </a>
          </div>

          <div className="card mt-3 p-5">
            <p className="text-xs font-semibold tracking-widest text-forest uppercase">
              County Government of Busia
            </p>
            <a href="tel:+254700106517" className="mt-2 block font-display text-3xl text-ink">
              +254 700 106 517
            </a>
            <p className="mt-1 text-sm text-muted">Mon–Fri, 8.00 am – 5.00 pm</p>
            <a href="mailto:info@busiacounty.go.ke" className="mt-3 inline-block font-semibold text-forest">
              info@busiacounty.go.ke
            </a>
          </div>
        </section>

        <section id="adults" className="mt-8 scroll-mt-24">
          <h2 className="font-display text-3xl text-ink">Adults I can talk to</h2>
          <p className="mt-2 leading-relaxed text-muted">
            Write a parent, teacher, counsellor or health worker. This list stays on this phone
            only. It is not sent anywhere.
          </p>
          <div className="mt-4 grid gap-3">
            {adults.map((adult, index) => (
              <div key={index} className="card grid gap-2 p-3 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold tracking-wide text-muted uppercase">
                    Name
                  </span>
                  <input
                    className="field mt-1"
                    value={adult.name}
                    maxLength={80}
                    autoComplete="name"
                    onChange={(event) => updateAdult(index, { name: event.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold tracking-wide text-muted uppercase">
                    Phone
                  </span>
                  <input
                    className="field mt-1"
                    value={adult.phone}
                    maxLength={24}
                    inputMode="tel"
                    autoComplete="tel"
                    onChange={(event) => updateAdult(index, { phone: event.target.value })}
                  />
                </label>
                {adult.phone.trim() ? (
                  <a
                    href={`tel:${adult.phone.replace(/[^\d+]/g, "")}`}
                    className="text-sm font-semibold text-forest sm:col-span-2"
                  >
                    Call {adult.name.trim() || "this person"}
                  </a>
                ) : null}
              </div>
            ))}
            <label className="card block p-3">
              <span className="text-xs font-semibold tracking-wide text-muted uppercase">
                My nearest hospital or clinic
              </span>
              <input
                className="field mt-1"
                value={stored.clinic ?? ""}
                maxLength={120}
                onChange={(event) => setNotebook({ ...stored, adults, clinic: event.target.value })}
              />
            </label>
            <button
              type="button"
              className="press min-h-11 self-start rounded-full px-3 text-sm font-semibold text-muted"
              onClick={() => setNotebook(emptyNotebook())}
            >
              Clear this list
            </button>
          </div>
        </section>

        <section className="card mt-6 bg-forest p-5 text-cream">
          <h2 className="font-display text-3xl">You can seek help at a nearby hospital or clinic.</h2>
          <p className="mt-3 leading-relaxed text-cream/90">
            If you think you may be pregnant, or you need advice, care or protection, go to your
            nearest hospital or youth-friendly clinic. Health workers will help you, and you will
            not be laughed at.
          </p>
        </section>
      </div>
    </Shell>
  );
}
