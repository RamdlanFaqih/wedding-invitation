"use client"

import { CountdownTimer } from "@/components/countdown-timer"
import { FloatingBottomBar } from "@/components/floating-bottombar"
import { StorySection } from "@/components/story-section"
import { GallerySection } from "@/components/galerry-section"
import { GiftSection } from "@/components/gift-section"
import { LocationSection } from "@/components/location-section"
import { MessagesSection } from "@/components/messages-section"
import { useNavigationStore } from "@/store/navigation-store"

function InvitationSection() {
  return (
    <div className="min-h-screen shadow-2xl max-w-md bg-background relative overflow-hidden pb-20">

      {/* Main content */}
      <div className="px-8 py-12 text-center relative z-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm tracking-widest text-muted-foreground mb-4">WEDDING INVITATION</p>
        </div>

        {/* Couple names */}
        <div className="mb-8">
          <h1 className="font-script text-5xl text-foreground mb-2">Susi Samsiah</h1>
          <p className="text-2xl text-muted-foreground mb-2">&</p>
          <h1 className="font-script text-5xl text-foreground">Abdul Munir</h1>
        </div>

        {/* Date */}
        <div className="mb-8">
          <p className="text-lg text-foreground mb-2">Saturday</p>
          <p className="text-2xl font-semibold text-foreground tracking-wider">25 • 10 • 2025</p>
        </div>

        {/* Countdown */}
        <CountdownTimer />

        {/* Recipient */}
        <div className="mt-12">
          <p className="text-sm text-muted-foreground mb-2">To</p>
          <p className="text-xl font-medium text-foreground">Dear Guest</p>
        </div>

        {/* Additional content */}
        <div className="mt-16 space-y-6">
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Save the Date</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We joyfully invite you to celebrate our wedding ceremony and reception. Your presence would make our
              special day even more meaningful.
            </p>
          </div>

          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Venue Details</h3>
            <p className="text-sm text-muted-foreground">
              Ceremony: 2:00 PM
              <br />
              Reception: 6:00 PM
              <br />
              Grand Ballroom Hotel Mulia, Jakarta
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WeddingInvitation() {
  const { activeSection } = useNavigationStore()

  const renderSection = () => {
    switch (activeSection) {
      case "story":
        return <StorySection />
      case "gallery":
        return <GallerySection />
      case "gift":
        return <GiftSection />
      case "location":
        return <LocationSection />
      case "messages":
        return <MessagesSection />
      default:
        return <InvitationSection />
    }
  }

  return (
    <div className="relative">
      {renderSection()}
      <FloatingBottomBar />
    </div>
  )
}
