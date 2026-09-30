export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer" title="Sumanth Gajjela">
      {/* Geometric SG Monogram Icon matching Tomasz Gajda's TG style */}
      <svg
        className="w-10 h-10 md:w-11 md:h-11 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer geometric shield / angular frame */}
        <path
          d="M 20 28 L 50 12 L 80 28 L 80 72 L 50 88 L 20 72 Z"
          stroke="#111827"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        {/* Inner geometric 'S' & 'G' interlocking lines */}
        {/* Top bar and spine of S */}
        <path
          d="M 68 32 L 35 32 L 35 48 L 65 52 L 65 68 L 32 68"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Accent notch for G */}
        <path
          d="M 52 68 L 52 56 L 65 56"
          stroke="#111827"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
