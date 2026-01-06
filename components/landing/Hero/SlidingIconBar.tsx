import { Users, ShoppingCart, Settings, Shield, Globe, Rocket } from "lucide-react"

const icons = [
  Users,
  ShoppingCart,
  Settings,
  Shield,
  Globe,
  Rocket,
]

export function SlidingIconBar() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade left */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />

      {/* Fade right */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

      {/* Track */}
      <div className="flex w-[200%] animate-horizontal-scroll">
        {/* First copy */}
        <div className="flex w-1/2 justify-around gap-8">
          {icons.map((Icon, i) => (
            <Icon key={i} className="h-6 w-6 text-muted-foreground opacity-70" />
          ))}
        </div>

        {/* Second copy (clone) */}
        <div className="flex w-1/2 justify-around gap-8">
          {icons.map((Icon, i) => (
            <Icon
              key={`clone-${i}`}
              className="h-16 w-16 text-muted-foreground opacity-70"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
