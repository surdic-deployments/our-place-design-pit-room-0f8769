const STROKE = 1.75;

export function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 19.5 4.5 13.5 4.5 5.5c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

export function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function MenuGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/** Torn-paper section edge: an authored jagged tear, not a generic wave. */
export function TornEdge({
  flip = false,
  className = "torn-edge",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <path
        d="M0,48 L0,22 L38,34 L78,12 L118,30 L158,8 L198,32 L238,16 L278,36 L318,10 L358,28 L398,18 L438,38 L478,14 L518,30 L558,20 L598,40 L638,12 L678,32 L718,16 L758,34 L798,10 L838,28 L878,22 L918,36 L958,14 L998,30 L1038,18 L1078,34 L1118,10 L1158,26 L1200,20 L1200,48 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** An offset barrel smoker with rising smoke — the hero's signature
 * illustration. Side profile: firebox low-left, barrel body, chimney with
 * smoke wisps top-right — the classic American BBQ-pit silhouette. */
export function SmokerIllustration({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 -14 220 190"
      fill="none"
      stroke="var(--char-900)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`draw-in ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* barrel body */}
      <rect x="44" y="66" width="130" height="58" rx="27" fill="var(--kraft-100)" />
      <circle cx="160" cy="95" r="5" fill="var(--ember-500)" stroke="none" />
      <path d="M56 82h96" opacity={0.5} />
      <path d="M56 108h96" opacity={0.5} />
      {/* firebox */}
      <rect x="14" y="90" width="36" height="32" rx="12" fill="var(--kraft-100)" />
      <circle cx="32" cy="106" r="3" fill="var(--mustard-400)" stroke="none" />
      {/* legs */}
      <path d="M74 124v22M150 124v22" />
      <path d="M64 146h20M140 146h20" />
      {/* chimney */}
      <rect x="134" y="18" width="12" height="48" fill="var(--kraft-100)" />
      {/* smoke */}
      <path d="M140 18c-12-8 12-16 0-24" stroke="var(--char-700)" opacity={0.75} />
      <path d="M140 -6c-10-8 10-15 1-22" stroke="var(--char-700)" opacity={0.5} />
    </svg>
  );
}

/** A rack of ribs, flat-lay from above — signature dish 01. A slab with
 * evenly spaced bones reads unambiguously as ribs where a curved profile
 * risks looking like an abstract blob. */
export function RibsIllustration({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 100"
      fill="none"
      stroke="var(--char-900)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`draw-in ${className}`}
      aria-hidden="true"
      {...props}
    >
      <rect x="16" y="14" width="128" height="72" rx="20" fill="var(--kraft-100)" />
      <path d="M40 22v56M62 20v60M84 20v60M106 20v60M128 22v56" opacity={0.75} />
    </svg>
  );
}

/** A burger cross-section — signature dish 02. */
export function BurgerIllustration({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      stroke="var(--char-900)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`draw-in ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M20 46c0-20 120-20 120 0Z" fill="var(--kraft-100)" />
      <path d="M14 46h132" />
      <path d="M18 46c-6 8 4 8 0 0" opacity={0} />
      <path d="M20 54c14-6 106-6 120 0" stroke="var(--pine-600)" />
      <path d="M16 62h128v10c0 4-4 8-8 8H24c-4 0-8-4-8-8Z" fill="var(--ember-500)" fillOpacity={0.85} stroke="var(--char-900)" />
      <path d="M18 80c0 10 124 10 124 0" />
      <path d="M22 88c8 12 108 12 116 0" />
    </svg>
  );
}

/** A tomahawk steak — signature dish 03. A rounded meat portion with an
 * unmistakable dog-bone-shaped handle, the exact detail that names the cut. */
export function TomahawkIllustration({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 170 100"
      fill="none"
      stroke="var(--char-900)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`draw-in ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M14 50c0-22 20-34 42-34 24 0 40 16 40 34s-16 32-40 32c-22 0-42-10-42-32Z"
        fill="var(--kraft-100)"
      />
      <path d="M24 34c12 8 46 8 60 4" opacity={0.55} />
      <path d="M20 62c14 8 48 10 64 0" opacity={0.55} />
      {/* bone handle: shaft + two rounded knob ends, an unmistakable dog-bone silhouette */}
      <rect x="96" y="42" width="46" height="12" rx="6" fill="var(--kraft-100)" />
      <circle cx="100" cy="42" r="8" fill="var(--kraft-100)" />
      <circle cx="100" cy="54" r="8" fill="var(--kraft-100)" />
      <circle cx="146" cy="41" r="10" fill="var(--kraft-100)" />
      <circle cx="146" cy="57" r="10" fill="var(--kraft-100)" />
    </svg>
  );
}

/** A hanging wooden roadside sign — replaces the compass/signpost devices
 * used in the other two shipped worlds. Carries the name and a directional
 * arrow so it reads as a real sign, not an abstract board. */
export function HangingSignIllustration({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 170 160"
      fill="none"
      stroke="var(--char-900)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`draw-in ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M28 10v140" />
      <path d="M28 44l14-8M28 84l14 8" opacity={0.7} />
      <path d="M42 44h96l14 20-14 20H42Z" fill="var(--kraft-100)" />
      <text
        x="90"
        y="59"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="16"
        fill="var(--ember-600)"
        stroke="none"
      >
        OUR
      </text>
      <text
        x="90"
        y="76"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="16"
        fill="var(--char-900)"
        stroke="none"
      >
        PLACE
      </text>
    </svg>
  );
}
