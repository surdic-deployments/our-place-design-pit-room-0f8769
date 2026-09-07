// Procedural kraft-paper grain (SVG feTurbulence), a real produced texture
// rather than a flat gradient standing in for material.
export function TextureDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="kraft-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.85"
            numOctaves={3}
            seed={11}
            stitchTiles="stitch"
            result="n"
          />
          <feColorMatrix in="n" type="saturate" values="0" />
        </filter>
      </defs>
    </svg>
  );
}
