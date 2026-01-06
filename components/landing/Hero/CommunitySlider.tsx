import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { activities } from "./activities"
export function FadeEdges() {
  return (
    <>
      {/* Left fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24
                   bg-gradient-to-r from-background to-transparent"
      />

      {/* Right fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24
                   bg-gradient-to-l from-background to-transparent"
      />
    </>
  )
}

export function CommunitySlider() {
  return (
    <div className="relative overflow-hidden py-10">
      {/* fades */}
      <FadeEdges />

      {/* marquee */}
      <div className="flex">
        <div className="grid auto-cols-max grid-flow-col animate-horizontal-scroll gap-6">
          <CardsSet />
        </div>
      </div>
    </div>
  )
}

function CardsSet() {
  return (
    <div className="flex gap-6 px-6">
      {activities.map((item, index) => (
        <Card
          key={index}
          className="w-72 shrink-0 bg-card/80 backdrop-blur
                     transition hover:-translate-y-1
                     bg-gradient-to-br from-primary/10 to-secondary/10
                     ring-1 ring-primary/20"
        >
          <CardContent className="p-4">
            <div className="relative mb-3 h-36 w-full overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mb-1 text-sm font-semibold">
              {item.title}
            </h3>

            <p className="text-xs text-muted-foreground">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

