import { nav, restaurant } from "@/content/site";
import { ReservationButton } from "./ReservationButton";
import { MenuGlyph } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-char-900 bg-kraft-50/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="font-display text-xl text-char-900 sm:text-2xl">
          {restaurant.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-quiet text-sm uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ReservationButton id="header-desktop" className="!text-sm !px-4 !py-2" />
        </div>

        <details className="relative md:hidden">
          <summary
            className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-char-900 text-char-900 [&::-webkit-details-marker]:hidden"
            aria-label="Menü öffnen"
          >
            <MenuGlyph className="h-5 w-5" />
          </summary>
          <div className="paper absolute right-0 top-12 flex w-56 flex-col gap-3 p-4">
            <span className="grain-kraft" aria-hidden="true" />
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-bold uppercase tracking-wide text-char-900"
              >
                {item.label}
              </a>
            ))}
            <span className="relative">
              <ReservationButton id="header-mobile" className="justify-center !text-sm" />
            </span>
          </div>
        </details>
      </div>
    </header>
  );
}
