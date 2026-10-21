import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Shell } from "@/components/shell";
import { placeStory, rateById, rates, searchTopics, type Topic } from "@/lib/content";
import { useStored } from "@/lib/use-stored";

export const Route = createFileRoute("/")({
  component: Home,
});

const chapters: {
  to: "/facts" | "/learn" | "/myths" | "/help";
  hash?: string;
  kicker: string;
  title: string;
  text: string;
}[] = [
  {
    to: "/facts",
    kicker: "01",
    title: "Know the facts",
    text: "Busia fell from 17.4 to 16.9. See your sub-county.",
  },
  {
    to: "/learn",
    kicker: "02",
    title: "Protect your future",
    text: "What early pregnancy is, why it happens, and how to say no.",
  },
  {
    to: "/myths",
    kicker: "03",
    title: "Myths and a short check",
    text: "Eight things people get wrong — then test yourself.",
  },
  {
    to: "/help",
    kicker: "04",
    title: "Talk and get help",
    text: "Free lines, a clinic, and adults you can name on this phone.",
  },
];

function Home() {
  const [placeId, setPlaceId] = useStored("sep-place", "busia");
  const place = rateById(placeId);
  const [query, setQuery] = useState("");
  const hits = useMemo(() => searchTopics(query), [query]);
  const subs = rates.filter((row) => row.kind === "sub");

  return (
    <Shell tone="cover">
      <section className="cover-hero px-4 pt-8 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full bg-cream px-3 py-1.5 text-xs font-semibold tracking-wide text-ember-deep uppercase">
            Stop early pregnancies · Busia County
          </p>
          <h1 className="mt-5 max-w-xl font-display text-5xl leading-none text-cream sm:text-6xl">
            Your future.
            <span className="block text-ember">Your choice.</span>
          </h1>
          <p className="mt-4 max-w-md font-display text-xl text-cream/85 italic">
            A campaign for all. A handbook for teenagers.
          </p>

          <div className="card mt-8 p-5 text-ink sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid grid-cols-10 gap-1" aria-hidden="true">
                {Array.from({ length: 100 }, (_, index) => (
                  <span
                    key={index}
                    className={
                      index < 17 ? "size-2 rounded-full bg-ember" : "size-2 rounded-full bg-line"
                    }
                  />
                ))}
              </div>
              <div className="min-w-0">
                <p className="font-display text-6xl leading-none text-ember tabular-nums">17</p>
                <p className="mt-1 text-sm font-semibold tracking-wide text-ink uppercase">
                  in every 100
                </p>
                <p className="mt-2 max-w-xs text-base leading-snug">
                  teenage girls in Busia get pregnant too early.
                </p>
                <p className="mt-2 font-semibold text-forest">It does not have to be you.</p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-base text-cream/85">Together we can change this number.</p>
        </div>
      </section>

      <div className="sheet relative z-10 -mt-6 flex-1 rounded-t-3xl pb-28 md:pb-12">
        <div className="mx-auto max-w-3xl px-4 py-7">
          <section aria-labelledby="place-heading">
            <h2 id="place-heading" className="font-display text-3xl text-ink">
              Where you live
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted">
              The number is not the same in every part of Busia. Tap your sub-county.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {subs.map((row) => {
                const on = row.id === place.id;
                return (
                  <button
                    key={row.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setPlaceId(row.id)}
                    className={
                      on
                        ? "press min-h-11 rounded-full bg-forest-deep px-3.5 text-sm font-semibold text-cream"
                        : "press min-h-11 rounded-full bg-paper px-3.5 text-sm font-semibold text-ink shadow-card"
                    }
                  >
                    {row.name}
                  </button>
                );
              })}
            </div>
            {place.kind === "sub" ? (
              <Link to="/facts" hash={place.id} className="card press mt-4 block p-4">
                <p className="text-xs font-semibold tracking-widest text-forest uppercase">
                  Your sub-county · 2026
                </p>
                <p className="mt-1 font-display text-2xl text-ink">{place.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{placeStory(place)}</p>
              </Link>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Choose a place to see how its number moved from 2025 to 2026.
              </p>
            )}
          </section>

          <h2 className="mt-8 font-display text-3xl text-ink">In short</h2>
          <p className="mt-2 text-base leading-relaxed text-muted">
            Early pregnancy takes away a girl’s health, her schooling and her dreams. This campaign
            gives you the facts so you can protect your future.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Brief
              title="Why it happens"
              points={["Pressure from friends, boys and men", "Little true information", "Gifts and money for sex"]}
              hash="causes"
            />
            <Brief
              title="The dangers"
              points={["Health risks for you and the baby", "Leaving school", "Stigma and rejection"]}
              hash="dangers"
            />
            <Brief
              title="What you can do"
              points={["Say NO and stay in school", "Tell a trusted adult", "See a health worker early"]}
              hash="protect"
            />
          </div>

          <label className="mt-8 block">
            <span className="text-xs font-semibold tracking-widest text-forest uppercase">
              Search the handbook
            </span>
            <span className="relative mt-2 block">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="field pl-11"
                placeholder="Try school, Nambale, pressure, 116"
                type="search"
              />
            </span>
          </label>
          {query.trim() ? (
            <ul className="mt-3 grid gap-2">
              {hits.length === 0 ? (
                <li className="rounded-2xl bg-cream-2 px-4 py-3 text-sm text-muted">
                  Nothing matches that. Try “school”, “Nambale”, or “116”.
                </li>
              ) : (
                hits.map((hit) => <Hit key={`${hit.to}-${hit.title}`} topic={hit} />)
              )}
            </ul>
          ) : null}

          <h2 className="mt-8 font-display text-3xl text-ink">The handbook</h2>
          <ul className="mt-4 grid gap-3">
            {chapters.map((chapter) => (
              <li key={chapter.title}>
                <Link
                  to={chapter.to}
                  hash={chapter.hash}
                  className="card press flex items-center gap-4 p-4"
                >
                  <span className="font-display text-2xl text-ember tabular-nums">{chapter.kicker}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xl leading-tight text-ink">
                      {chapter.title}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{chapter.text}</span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-forest" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/help" className="btn-ember">
              Need help now
            </Link>
            <Link to="/facts" className="btn-quiet">
              See the numbers
            </Link>
          </div>

          <footer className="mt-10 border-t border-line pt-5 text-sm leading-relaxed text-muted">
            <p>
              County Government of Busia · Handbook · 2026. Empowering girls, protecting futures,
              building hope.
            </p>
            <p className="mt-2">
              In partnership with Kenya Red Cross, tiko, KMET and community partners.
            </p>
          </footer>
        </div>
      </div>
    </Shell>
  );
}

function Brief({ title, points, hash }: { title: string; points: string[]; hash: string }) {
  return (
    <Link to="/learn" hash={hash} className="card press block p-4">
      <h3 className="font-display text-xl text-ink">{title}</h3>
      <ul className="ticks mt-3 text-sm">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Link>
  );
}

function Hit({ topic }: { topic: Topic }) {
  return (
    <li>
      <Link
        to={topic.to}
        hash={topic.hash}
        className="card press flex items-center justify-between gap-3 px-4 py-3"
      >
        <span>
          <span className="block text-xs font-semibold tracking-widest text-forest uppercase">
            {topic.group}
          </span>
          <span className="mt-0.5 block font-medium text-ink">{topic.title}</span>
        </span>
        <ArrowRight className="size-4 shrink-0 text-forest" aria-hidden="true" />
      </Link>
    </li>
  );
}
