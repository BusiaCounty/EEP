import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  ChartColumn,
  CircleHelp,
  House,
  Phone,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const links: { to: "/" | "/facts" | "/learn" | "/myths" | "/help"; label: string; icon: LucideIcon }[] =
  [
    { to: "/", label: "Home", icon: House },
    { to: "/facts", label: "Facts", icon: ChartColumn },
    { to: "/learn", label: "Learn", icon: BookOpen },
    { to: "/myths", label: "Myths", icon: CircleHelp },
    { to: "/help", label: "Help", icon: Phone },
  ];

function isOn(path: string, to: string) {
  if (to === "/") return path === "/";
  return path === to || path.startsWith(`${to}/`);
}

export function Shell({
  tone,
  children,
}: {
  tone: "cover" | "page";
  children: ReactNode;
}) {
  const path = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div
      className={
        tone === "cover"
          ? "flex min-h-dvh flex-col bg-forest-deep text-cream"
          : "sheet min-h-dvh"
      }
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-cream/10 bg-forest-deep">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="min-w-0 press">
            <p className="text-xs font-semibold tracking-widest text-cream/70 uppercase">
              Busia County · 2026
            </p>
            <p className="truncate font-display text-lg leading-tight text-cream">
              End early pregnancies
            </p>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Handbook">
            {links.map((item) => {
              const on = isOn(path, item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={on ? "page" : undefined}
                  className={
                    on
                      ? "rounded-full bg-cream/15 px-3 py-2 text-sm font-semibold text-cream"
                      : "rounded-full px-3 py-2 text-sm font-medium text-cream/70 hover:bg-cream/10 hover:text-cream"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main
        id="content"
        className={tone === "cover" ? "flex flex-1 flex-col" : "pb-28 md:pb-12"}
      >
        {children}
      </main>
      <nav
        className="nav-safe fixed inset-x-0 bottom-0 z-30 border-t border-cream/10 bg-forest-deep md:hidden"
        aria-label="Handbook"
      >
        <ul className="mx-auto grid max-w-3xl grid-cols-5">
          {links.map((item) => {
            const on = isOn(path, item.to);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={on ? "page" : undefined}
                  className={
                    on
                      ? "flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-cream"
                      : "flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium text-cream/65"
                  }
                >
                  <Icon className="size-5" strokeWidth={on ? 2.4 : 1.8} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export function HelpStrip() {
  return (
    <Link
      to="/help"
      className="press mb-6 flex items-center justify-between gap-3 rounded-2xl bg-forest-deep px-4 py-3 text-cream"
    >
      <span className="text-sm leading-snug">
        In danger or under pressure? Free help on 116 and 1195.
      </span>
      <span className="shrink-0 text-sm font-semibold">Get help</span>
    </Link>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mb-6">
      <p className="text-xs font-semibold tracking-widest text-forest uppercase">{kicker}</p>
      <h1 className="mt-2 font-display text-4xl leading-none text-ink">{title}</h1>
      <p className="mt-3 text-base leading-relaxed text-muted">{lede}</p>
    </header>
  );
}
