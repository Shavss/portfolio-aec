const INSTITUTIONS = [
  'Technical University of Munich',
  'Siemens',
  'David Chipperfield Architects',
  'Zilch + Müller Ingenieure',
  'Innovia Partners',
  'MIT Senseable City Lab',
]

function MarqueeSet() {
  return (
    <>
      {INSTITUTIONS.map((name, i) => (
        <span key={i} className="flex-shrink-0 flex items-center">
          <span
            className="font-mono uppercase text-accent whitespace-nowrap"
            style={{ fontSize: '11px', letterSpacing: '0.12em' }}
          >
            {name}
          </span>
          <span
            className="text-muted mx-3 select-none"
            aria-hidden="true"
            style={{ fontSize: '11px' }}
          >
            /
          </span>
        </span>
      ))}
    </>
  )
}

export default function InstitutionsBanner() {
  return (
    <div className="mt-16">
      <p
        className="font-mono uppercase text-muted mb-3"
        style={{ fontSize: '11px', letterSpacing: '0.12em' }}
      >
        Already worked with
      </p>

      <div className="overflow-hidden">
        <div className="marquee-track" style={{ animationDuration: '50s' }}>
          <MarqueeSet />
          <MarqueeSet />
        </div>
      </div>
    </div>
  )
}
