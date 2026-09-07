import { signatureDishes } from "@/content/site";
import { Reveal } from "./Reveal";
import { BurgerIllustration, RibsIllustration, TomahawkIllustration } from "./icons";

const ILLUSTRATIONS = [RibsIllustration, BurgerIllustration, TomahawkIllustration];

export function SignatureDishes() {
  return (
    <section id="platte" className="bg-kraft-50 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl text-char-900 sm:text-4xl">
              Von der Platte
            </h2>
            <span className="gingham-strip mt-2" aria-hidden="true" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {signatureDishes.map((dish, i) => {
            const Illustration = ILLUSTRATIONS[i];
            return (
              <Reveal key={dish.index} as="article" className="paper reveal flex flex-col gap-3 p-6">
                <span className="grain-kraft" aria-hidden="true" />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="tag">Nr. {dish.index}</span>
                  <span className="tag !bg-mustard-400 !text-char-900">{dish.tag}</span>
                </div>
                <Illustration className="relative mx-auto h-24 w-auto" />
                <h3 className="relative font-display text-xl leading-tight text-char-900">
                  {dish.name}
                </h3>
                <p className="relative text-sm leading-relaxed text-char-700">
                  {dish.description}
                </p>
                <div className="relative mt-auto flex items-center justify-end pt-2">
                  <span className="font-display text-lg text-ember-600">
                    {dish.price}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
