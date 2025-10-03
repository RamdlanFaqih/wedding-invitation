"use client"

import { FloralDecoration } from "./floral-decoration"
import { MapPin, Navigation, QrCode } from "lucide-react"

export function LocationSection() {
  const openMaps = () => {
    window.open("https://maps.google.com/?q=Grand+Ballroom+Hotel+Mulia+Jakarta", "_blank")
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden px-8 py-12">
      <FloralDecoration className="bottom-0 left-0 text-accent rotate-180" />

      <div className="text-center relative z-10">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Wedding Venue</h2>

        <div className="space-y-6">
          {/* Venue Details */}
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-accent mr-2" size={24} />
              <h3 className="text-lg font-semibold text-card-foreground">Ceremony & Reception</h3>
            </div>
            <div className="space-y-3 text-left">
              <div>
                <p className="text-sm text-muted-foreground">Venue Name</p>
                <p className="font-medium text-foreground">Grand Ballroom Hotel Mulia</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="text-sm text-foreground leading-relaxed">
                  Jl. Asia Afrika No. 8, Gelora, Tanah Abang
                  <br />
                  Jakarta Pusat 10270, Indonesia
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="text-sm text-foreground">
                  Saturday, October 25, 2025
                  <br />
                  Ceremony: 14:00 WIB | Reception: 18:00 WIB
                </p>
              </div>
            </div>
          </div>

          {/* Map & Navigation */}
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Get Directions</h3>

            {/* Map placeholder */}
            <div className="aspect-video rounded-lg overflow-hidden bg-accent/20 mb-4">
              <img
                src="/wedding-venue-map-location-jakarta-hotel.jpg"
                alt="Venue location map"
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={openMaps}
              className="w-full bg-accent text-accent-foreground py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
            >
              <Navigation size={20} />
              Open in Google Maps
            </button>
          </div>

          {/* QR Code */}
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Access</h3>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-background rounded-lg flex items-center justify-center mb-3">
                <QrCode size={80} className="text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">Scan QR code for venue location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
