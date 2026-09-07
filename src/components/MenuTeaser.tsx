import { menuTeaser } from "@/content/site";
import { Reveal } from "./Reveal";

export function MenuTeaser() {
  return (
    <section id="speisekarte" className="bg-kraft-50 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-char-900 sm:text-4xl">
            Von der Karte
          </h2>
          <span className="tag">Stand {menuTeaser.updated}</span>
        </div>

        <Reveal as="div" className="paper reveal grid gap-8 p-6 sm:grid-cols-3 sm:gap-10 sm:p-10">
          <span className="grain-kraft" aria-hidden="true" />

          {menuTeaser.categories.map((category) => (
            <div key={category.name} className="relative flex flex-col gap-3">
              <h3 className="label-caps">{category.name}</h3>
              <ul className="flex flex-col gap-2.5">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline gap-2 border-b-2 border-dashed border-char-300/50 pb-2 text-sm font-bold text-char-900"
                  >
                    <span>{item.name}</span>
                    <span className="flex-1 border-b-2 border-dotted border-char-300/40 translate-y-[-3px]" aria-hidden="true" />
                    <span className="font-display text-ember-600">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <p className="mt-4 text-xs text-char-500">
          Preise &amp; Verfügbarkeit können sich ändern. Es gilt die Karte im
          Restaurant.
        </p>
      </div>
    </section>
  );
}
