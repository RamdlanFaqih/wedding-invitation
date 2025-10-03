"use client"

import { useSearchParams } from "next/navigation"
import { CountdownTimer } from "@/components/countdown-timer"
import { FloatingBottomBar } from "@/components/floating-bottombar"
import { StorySection } from "@/components/story-section"
import { GallerySection } from "@/components/galerry-section"
import { GiftSection } from "@/components/gift-section"
import { LocationSection } from "@/components/location-section"
import { MessagesSection } from "@/components/messages-section"
import { useNavigationStore } from "@/store/navigation-store"

function DecorativeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* soft floral / gradient shapes */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[140%] opacity-10"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffd6e0" />
            <stop offset="100%" stopColor="#e6f7ff" />
          </linearGradient>
        </defs>
        <path d="M0,160 C200,40 400,280 600,160 C800,40 1000,280 1200,160 L1200,400 L0,400 Z" fill="url(#g1)" />
      </svg>

      {/* subtle blurred orb */}
      <div className="absolute right-6 bottom-6 w-56 h-56 blur-3xl opacity-20 bg-gradient-to-tr from-primary/70 to-transparent rounded-full mix-blend-soft-light transform rotate-6" />

      {/* little floating petals */}
      <svg className="absolute top-6 right-6 w-28 h-28 opacity-60" viewBox="0 0 100 100" aria-hidden>
        <g>
          <path d="M20 30 C30 10, 70 10, 80 30 C90 50, 60 60, 50 80 C40 60, 10 50, 20 30" fill="rgba(255, 214, 220, 0.6)" />
        </g>
      </svg>
    </div>
  )
}

function InvitationSection() {
  const searchParams = useSearchParams()
  const toParam = searchParams?.get("to")
  const rawRecipient = toParam ? decodeURIComponent(toParam) : "Tamu Undangan"

  // split but keep ampersand as its own item so it renders on a new line
  const recipientParts = rawRecipient.split(/(\s*&\s*)/)

  return (
    <div className="min-h-screen flex justify-center py-12 px-4">
      <div className="relative w-full max-w-md bg-background/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        <DecorativeBackground />

        {/* Main content */}
        <div className="px-8 py-10 text-center relative z-10">
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs tracking-widest text-muted-foreground mb-2">WEDDING INVITATION</p>
            <div className="mx-auto w-28 h-[1px] bg-muted-foreground/25 rounded" />
          </div>

          {/* Couple names */}
          <div className="mb-6">
            <h1 className="font-script text-4xl sm:text-5xl text-foreground leading-none">Susi Samsiah</h1>
            <p className="text-xl text-muted-foreground my-1">&</p>
            <h1 className="font-script text-4xl sm:text-5xl text-foreground leading-none">Abdul Munir</h1>
          </div>

          {/* Date */}
          <div className="mb-6">
            <p className="text-sm text-foreground mb-1">Saturday</p>
            <p className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-card/40 tracking-wider shadow-inner">25 • 10 • 2025</p>
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <div className="inline-block w-full rounded-xl p-4 bg-gradient-to-b from-white/10 to-transparent border border-muted-foreground/8 shadow-sm">
              <CountdownTimer />
            </div>
          </div>

          {/* Recipient */}
          <div className="mt-6 text-center">
            <div className="bg-primary/6 border border-primary/10 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font">Mengundang</p>
              {recipientParts.map((part, i) => {
                const trimmed = part.trim()
                if (!trimmed) return null

                // ensure ampersand is rendered as its own (smaller) line
                if (trimmed === "&") {
                  return (
                    <p key={i} className="text-2xl text-primary font-semibold leading-tight my-1">{trimmed}</p>
                  )
                }
                return (
                  <p key={i} className="text-3xl sm:text-4xl text-foreground leading-tight my-1">{trimmed}</p>
                )
              })}
            </div>
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
