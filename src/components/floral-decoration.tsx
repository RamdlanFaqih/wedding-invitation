export function FloralDecoration({ className }: { className?: string }) {
  return (
    <svg
      className={`floral-decoration ${className}`}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lily flower */}
      <path d="M60 20C50 30 40 40 30 50C40 40 50 30 60 20Z" fill="currentColor" opacity="0.3" />
      <path d="M60 20C70 30 80 40 90 50C80 40 70 30 60 20Z" fill="currentColor" opacity="0.3" />
      <path d="M60 20C60 35 60 50 60 65C60 50 60 35 60 20Z" fill="currentColor" opacity="0.2" />

      {/* Leaves */}
      <path d="M30 60C35 55 40 50 45 45C40 50 35 55 30 60Z" fill="currentColor" opacity="0.2" />
      <path d="M90 60C85 55 80 50 75 45C80 50 85 55 90 60Z" fill="currentColor" opacity="0.2" />
      <path d="M45 80C50 75 55 70 60 65C55 70 50 75 45 80Z" fill="currentColor" opacity="0.2" />
      <path d="M75 80C70 75 65 70 60 65C65 70 70 75 75 80Z" fill="currentColor" opacity="0.2" />
    </svg>
  )
}
