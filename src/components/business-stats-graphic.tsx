import { Card } from "@/components/ui/card"

export function BusinessStatsGraphic() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/professional-business-woman-working-on-laptop-in-m.png')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Autorità Callout */}
          <Card className="group relative transform bg-card/95 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-center">
              <div className="mb-3 text-4xl font-bold text-secondary md:text-5xl">+</div>
              <h3 className="text-2xl font-bold text-card-foreground md:text-3xl">Autorità</h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Costruisci la tua reputazione professionale
              </p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Card>

          {/* Fiducia Callout */}
          <Card className="group relative transform bg-card/95 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl md:translate-y-8">
            <div className="text-center">
              <div className="mb-3 text-4xl font-bold text-accent md:text-5xl">+</div>
              <h3 className="text-2xl font-bold text-card-foreground md:text-3xl">Fiducia</h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">Aumenta la credibilità del tuo brand</p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Card>

          {/* Clienti Callout */}
          <Card className="group relative transform bg-card/95 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl md:col-span-2 md:translate-y-4 lg:col-span-1">
            <div className="text-center">
              <div className="mb-3 text-4xl font-bold text-chart-2 md:text-5xl">+</div>
              <h3 className="text-2xl font-bold text-card-foreground md:text-3xl">Clienti</h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">Espandi la tua base clienti</p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-chart-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Card>
        </div>
      </div>

      {/* Bottom gradient overlay for better visual hierarchy */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  )
}
