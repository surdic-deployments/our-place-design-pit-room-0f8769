import { proofPoints } from "@/content/site";
import { TornEdge } from "./icons";

export function ProofStrip() {
  return (
    <section className="relative bg-kraft-50 px-4 pb-6 pt-10 sm:px-8">
      {/* Attached here (not to Hero) so it paints on top: this section
          comes after Hero in DOM order, so a child translated up into
          Hero's space correctly overlaps it — the same pattern that
          already works for Occasion's two torn edges. */}
      <TornEdge className="torn-edge absolute inset-x-0 top-0 -translate-y-full" />
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {proofPoints.map((point) => (
          <li key={point} className="tag !bg-char-900">
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
