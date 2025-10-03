import { FloralDecoration } from "./floral-decoration"

export function StorySection() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden px-8 py-12">
      <FloralDecoration className="top-0 right-0 text-accent" />

      <div className="text-center relative z-10">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Our Story</h2>

        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-accent/20 border-2 border-accent/30 overflow-hidden">
            <img
              src="/romantic-couple-photo-wedding-portrait.jpg"
              alt="Ajeng & Teddy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Story content */}
        <div className="space-y-6">
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-3">How We Met</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our love story began in the most unexpected way. What started as a chance encounter blossomed into a
              beautiful journey of love, laughter, and endless adventures together.
            </p>
          </div>

          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-3">Our Journey</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Through every season of life, we've grown stronger together. From late-night conversations to shared
              dreams, every moment has led us to this beautiful celebration of our love.
            </p>
          </div>

          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-3">Forever Together</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Today, we begin a new chapter as husband and wife. Thank you for being part of our story and for
              celebrating this special moment with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
