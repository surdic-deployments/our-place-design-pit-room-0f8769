import { occasion } from "@/content/site";
import { Reveal } from "./Reveal";
import { TornEdge } from "./icons";

export function Occasion() {
  return (
    <section id="unser-place" className="relative bg-char-900 px-5 py-16 text-kraft-50 sm:px-8 sm:py-24">
      <TornEdge className="torn-edge torn-edge-dark absolute inset-x-0 top-0 -translate-y-full" />

      <Reveal
        as="div"
        className="reveal mx-auto grid max-w-6xl gap-8 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-14"
      >
        <div className="flex items-start">
          <h2 className="font-display text-3xl leading-none text-mustard-400 sm:text-4xl">
            {occasion.heading}
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {occasion.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="max-w-2xl text-base leading-relaxed text-kraft-100 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <TornEdge flip className="torn-edge torn-edge-dark absolute inset-x-0 bottom-0 translate-y-full" />
    </section>
  );
}
