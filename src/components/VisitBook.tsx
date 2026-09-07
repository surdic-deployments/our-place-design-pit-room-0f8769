import { hours, restaurant } from "@/content/site";
import { Reveal } from "./Reveal";
import { ReservationButton } from "./ReservationButton";
import { ClockIcon, HangingSignIllustration, MapPinIcon, PhoneIcon } from "./icons";

export function VisitBook() {
  return (
    <section id="besuch" className="bg-kraft-50 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl text-char-900 sm:text-4xl">
          Besuch &amp; Buchung
        </h2>
        <span className="gingham-strip mb-10 mt-2" aria-hidden="true" />

        <Reveal as="div" className="paper reveal grid overflow-hidden sm:grid-cols-2">
          <span className="grain-kraft" aria-hidden="true" />

          <div className="relative flex flex-col gap-6 p-6 sm:p-10">
            <div className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 flex-none text-ember-600" />
              <div className="text-sm font-bold text-char-700">
                {hours.lines.map((line) => (
                  <div key={line.days} className="flex justify-between gap-6">
                    <span>{line.days}</span>
                    <span className="text-char-900">{line.time}</span>
                  </div>
                ))}
                <div className="mt-1 text-xs font-normal text-char-500">
                  Stand {hours.lastConfirmed}
                </div>
              </div>
            </div>

            <a
              href={restaurant.mapsUrl}
              className="flex items-start gap-3 text-sm font-bold text-char-900 hover:text-ember-600"
            >
              <MapPinIcon className="mt-0.5 h-5 w-5 flex-none text-ember-600" />
              <span>
                {restaurant.address.street}
                <br />
                {restaurant.address.postalCode} {restaurant.address.city}
              </span>
            </a>

            <a
              href={`tel:${restaurant.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-sm font-bold text-char-900 hover:text-ember-600"
            >
              <PhoneIcon className="h-5 w-5 flex-none text-ember-600" />
              {restaurant.phoneDisplay}
            </a>

            <div className="mt-2 flex flex-wrap items-center gap-6">
              <ReservationButton id="visit" />
              <a href={restaurant.takeawayUrl} className="link-quiet">
                Takeaway bestellen
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[260px] flex-col items-center justify-center gap-4 border-t-2 border-char-900 p-6 text-center sm:min-h-full sm:border-l-2 sm:border-t-0">
            <HangingSignIllustration className="h-36 w-auto" />
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet text-sm"
            >
              Route planen ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
