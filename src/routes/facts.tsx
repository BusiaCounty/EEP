import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { HelpStrip, PageIntro, Shell } from "@/components/shell";
import { placeStory, rates, rateById, type RateRow } from "@/lib/content";
import { useStored } from "@/lib/use-stored";

export const Route = createFileRoute("/facts")({
  head: () => ({
    meta: [{ title: "Know the facts — End Early Pregnancies" }],
  }),
  component: FactsPage,
});

type YearMode = "2025" | "2026" | "change";

function FactsPage() {
  const hash = useRouterState({ select: (state) => state.location.hash }).replace(/^#/, "");
  const [mode, setMode] = useStored<YearMode>("sep-year", "2026");
  const [placeId, setPlaceId] = useStored("sep-place", "busia");
  const [order, setOrder] = useStored<"handbook" | "high">("sep-order", "handbook");
  const selected = rateById(placeId);
  const subs = rates.filter((row) => row.kind === "sub");
  const shown = order === "high" ? [...rates].sort((a, b) => valueOf(b, mode) - valueOf(a, mode)) : rates;

  const highest = subs.reduce((best, row) => (row.y2026 > best.y2026 ? row : best));
  const lowest = subs.reduce((best, row) => (row.y2026 < best.y2026 ? row : best));
  const drop = subs.reduce((best, row) =>
    row.y2025 - row.y2026 > best.y2025 - best.y2026 ? row : best,
  );

  useEffect(() => {
    if (rates.some((row) => row.id === hash)) setPlaceId(hash);
  }, [hash, setPlaceId]);

  return (
    <Shell tone="page">
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <HelpStrip />
        <PageIntro
          kicker="Page 3 · Facts"
          title="Know the facts"
          lede="Good news: Busia County’s number is going down. Every sub-county has a role in bringing it down further."
        />

        <div className="grid grid-cols-3 gap-2">
          <Stat label="Busia 2026" value="16.9" note="was 17.4" />
          <Stat label="Lowest" value={lowest.y2026.toFixed(1)} note={lowest.name} />
          <Stat label="Biggest fall" value={(drop.y2025 - drop.y2026).toFixed(1)} note={drop.name} />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Highest in 2026 is {highest.name} at {highest.y2026.toFixed(1)}. The campaign line is 17 in
          every 100. The detailed count was 17.4 in 2025 and 16.9 in 2026.
        </p>

        <div className="mt-6 flex flex-wrap gap-2" role="radiogroup" aria-label="Which year to show">
          {(
            [
              ["2025", "2025"],
              ["2026", "2026"],
              ["change", "Change"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={mode === id}
              onClick={() => setMode(id)}
              className={
                mode === id
                  ? "press min-h-11 rounded-full bg-forest px-4 text-sm font-semibold text-cream"
                  : "press min-h-11 rounded-full bg-cream-2 px-4 text-sm font-semibold text-ink"
              }
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setOrder(order === "handbook" ? "high" : "handbook")}
            className="press min-h-11 rounded-full bg-cream-2 px-4 text-sm font-semibold text-ink"
          >
            {order === "handbook" ? "Handbook order" : "Highest first"}
          </button>
        </div>

        <p className="mt-4 text-xs font-semibold tracking-widest text-muted uppercase">
          {mode === "change"
            ? "Change from 2025 to 2026, out of every 100 girls"
            : `Teenage pregnancy in ${mode}, out of every 100 girls`}
        </p>

        <ul className="mt-2 grid gap-1">
          {shown.map((row) => (
            <li key={row.id}>
              <Bar
                row={row}
                mode={mode}
                active={row.id === selected.id}
                onSelect={() => setPlaceId(row.id)}
              />
            </li>
          ))}
        </ul>

        <article className="card mt-4 p-4">
          <p className="text-xs font-semibold tracking-widest text-forest uppercase">
            {selected.kind === "sub" ? "Sub-county" : selected.kind === "county" ? "County" : "Country"}
          </p>
          <h2 className="mt-1 font-display text-3xl text-ink">{selected.name}</h2>
          <p className="mt-2 text-base leading-relaxed">{placeStory(selected)}</p>
          <p className="mt-3 text-sm text-muted">
            Tap another bar to keep that place on your home screen.
          </p>
        </article>

        <div className="mt-4 flex flex-wrap gap-2">
          {subs.map((row) => (
            <button
              key={row.id}
              type="button"
              onClick={() => setPlaceId(row.id)}
              className={
                row.id === selected.id
                  ? "press min-h-11 rounded-full bg-forest-deep px-3 text-sm font-semibold text-cream"
                  : "press min-h-11 rounded-full bg-paper px-3 text-sm font-semibold text-ink shadow-card"
              }
            >
              {row.name}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted">
          Across Kenya, about 15% of women aged 15–19 have ever been pregnant, according to the
          Kenya National Bureau of Statistics figure printed in this handbook. Pregnancy can stop
          your dreams. It does not have to be the end. With support, a girl can go back to school.
        </p>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Source: County Government of Busia youth handbook, 2026. Rates are out of every 100 girls,
          as printed for 2025 and 2026.
        </p>
      </div>
    </Shell>
  );
}

function valueOf(row: RateRow, mode: YearMode): number {
  if (mode === "2025") return row.y2025;
  if (mode === "2026") return row.y2026;
  return row.y2026 - row.y2025;
}

function Bar({
  row,
  mode,
  active,
  onSelect,
}: {
  row: RateRow;
  mode: YearMode;
  active: boolean;
  onSelect: () => void;
}) {
  const delta = Math.round((row.y2026 - row.y2025) * 10) / 10;
  const amount = mode === "2025" ? row.y2025 : mode === "2026" ? row.y2026 : Math.abs(delta);
  const max = mode === "change" ? 6 : 25;
  const width = Math.max(2, Math.min(100, (amount / max) * 100));
  const label =
    mode === "change"
      ? delta === 0
        ? "0.0"
        : `${delta > 0 ? "+" : "−"}${Math.abs(delta).toFixed(1)}`
      : amount.toFixed(1);
  const direction = delta < 0 ? "fell" : delta > 0 ? "rose" : "same";
  const fill =
    row.kind === "county" ? "bg-ember" : row.kind === "national" ? "bg-muted" : "bg-forest";

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={
        active
          ? "press w-full rounded-xl bg-cream-2 px-3 py-2.5 text-left"
          : "press w-full rounded-xl px-3 py-2.5 text-left hover:bg-cream-2"
      }
    >
      <span className="flex items-baseline justify-between gap-3">
        <span className="font-medium text-ink">{row.name}</span>
        <span className="font-semibold text-forest tabular-nums">
          {label}
          {mode === "change" ? (
            <span className="ml-2 text-xs font-semibold tracking-wide text-muted uppercase">
              {direction}
            </span>
          ) : null}
        </span>
      </span>
      <span className="mt-1.5 block h-2.5 overflow-hidden rounded-full bg-line">
        <span
          className={`bar-fill block h-full rounded-full ${mode === "change" && delta > 0 ? "bg-ember-deep" : fill}`}
          style={{ width: `${width}%` }}
        />
      </span>
    </button>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="card px-3 py-3">
      <p className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 font-display text-3xl leading-none text-ink tabular-nums">{value}</p>
      <p className="mt-1 truncate text-xs text-muted">{note}</p>
    </div>
  );
}
