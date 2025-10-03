import { FloralDecoration } from "./floral-decoration"

export function GallerySection() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden px-8 py-12">
      <FloralDecoration className="bottom-0 left-0 text-accent rotate-180" />

      <div className="text-center relative z-10">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Our Moments</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="aspect-square rounded-lg overflow-hidden bg-accent/20">
            <img
              src="/couple-engagement-photo-romantic-sunset.jpg"
              alt="Engagement photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden bg-accent/20">
            <img
              src="/couple-casual-photo-laughing-together.jpg"
              alt="Casual photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden bg-accent/20">
            <img
              src="/couple-travel-photo-vacation-beach.jpg"
              alt="Travel photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden bg-accent/20">
            <img
              src="/couple-formal-photo-elegant-dress-suit.jpg"
              alt="Formal photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-card/50 rounded-lg p-4 backdrop-blur-sm">
          <div className="aspect-video rounded-lg overflow-hidden bg-accent/20 mb-4">
            <img
              src="/couple-wedding-preparation-photo-getting-ready.jpg"
              alt="Wedding preparation"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground">Capturing precious moments as we prepare for our special day</p>
        </div>
      </div>
    </div>
  )
}
