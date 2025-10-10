"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import { CountdownTimer } from "@/components/countdown-timer"
import { FloatingBottomBar } from "@/components/floating-bottombar"
import { StorySection } from "@/components/story-section"
import { GallerySection } from "@/components/galerry-section"
import { GiftSection } from "@/components/gift-section"
import { LocationSection } from "@/components/location-section"
import { MessagesSection } from "@/components/messages-section"
import { useNavigationStore } from "@/store/navigation-store"

/*
  Improved mobile-first InvitationSection.
  - Keeps fonts & colors untouched (uses existing utility classes)
  - No extra dependencies
  - Keeps layout intentionally 'mobile only' by constraining widths and using mobile-friendly spacing
  - Small accessibility improvements (aria, semantic tags)
*/

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

function InvitationCard({ children }: { children: React.ReactNode }) {
  return (
    <article
      className="w-full max-w-xs mx-auto bg-background/80 backdrop-blur-sm rounded-3xl shadow-[0_10px_30px_rgba(2,6,23,0.35)] overflow-hidden border border-muted-foreground/6"
      role="region"
      aria-label="Wedding invitation card"
    >
      {children}
    </article>
  )
}

function InvitationSection() {
  const searchParams = useSearchParams()
  const toParam = searchParams?.get("to")
  const rawRecipient = toParam ? decodeURIComponent(toParam) : "Tamu Undangan"

  // split but keep ampersand as its own item so it renders on a new line
  const recipientParts = rawRecipient.split(/(\s*&\s*)/)
  const addressText = "Dusun Winangun Blok Cipeteuy • RT/RW 35/10 • Desa Dayeuhluhur Kec. Jatinagara"

  return (
    <section className="min-h-screen flex items-start justify-center py-10 px-4">
      <div className="relative w-full">
        <DecorativeBackground />

        <InvitationCard>
          {/* Top accent bar */}
          <div className="px-6 pt-6 text-center relative z-10">
            <p className="text-xs tracking-widest text-muted-foreground mb-2">WEDDING INVITATION</p>
            <div className="mx-auto w-20 h-[1px] bg-muted-foreground/25 rounded mb-4" />

            {/* Couple names */}
            <div className="mb-4">
              <h1 className="font-script text-3xl text-foreground leading-none">Susi Samsiah</h1>
              <p className="text-xs text-muted-foreground mt-2 leading-snug">
                <span className="block">Putri kedua dari</span>
                <span className="block mt-1 text-[11px] italic font-medium">Bapak Maman & Ibu Oom</span>
              </p>
              <p className="text-lg text-muted-foreground my-0.5">&</p>
              <h1 className="font-script text-3xl text-foreground leading-none">Abdul Munir</h1>
              <p className="text-xs text-muted-foreground mt-2 leading-snug">
                <span className="block">Putra kedua dari</span>
                <span className="block mt-1 text-[11px] italic font-medium">Bapak Uned Junaedi & Ibu Encih(almh) / Nur Hasanah</span>
              </p>
            </div>

            {/* Date badge */}
            <div className="mb-4">
              <p className="text-sm text-foreground mb-1">Sabtu</p>
              <p className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-card/40 tracking-wider shadow-inner">25 • 10 • 2025</p>
            </div>

            {/* Akad Nikah time (added) */}
            <div className="mb-4" aria-label="Waktu akad nikah">
              <p className="text-xs text-muted-foreground mb-1">Akad Nikah</p>
              <p className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-card/40 tracking-wider shadow-inner">09.00 WIB</p>
            </div>
          </div>

          {/* Countdown - elevated */}
          <div className="px-4 pb-4">
            <div className="w-full rounded-xl p-3 bg-gradient-to-b from-white/6 to-transparent border border-muted-foreground/8 shadow-sm">
              <CountdownTimer />
            </div>
          </div>

          {/* Recipient box with subtle motion */}
          <div className="px-5 pb-8">
            <div
              className="bg-primary/6 border border-primary/10 rounded-2xl p-5 shadow-xl backdrop-blur-sm transform-gpu transition-transform duration-300 hover:-translate-y-1"
              aria-live="polite"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 text-center">Mengundang</p>

              <div className="flex flex-col items-center justify-center">
                {recipientParts.map((part, i) => {
                  const trimmed = part.trim()
                  if (!trimmed) return null

                  // ensure ampersand is rendered as its own (smaller) line
                  if (trimmed === "&") {
                    return (
                      <p key={i} className="text-2xl text-primary font-semibold leading-tight">{trimmed}</p>
                    )
                  }

                  return (
                    <p key={i} className="text-2xl text-center text-foreground leading-tight break-words">{trimmed}</p>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="px-5 pb-16">
            <div
              className="bg-card/20 border border-muted-foreground/8 rounded-2xl p-4 shadow-sm backdrop-blur-sm"
              role="contentinfo"
              aria-label="Alamat acara"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 text-center">Alamat</p>
              <p className="text-xs text-muted-foreground text-center font-semibold">{addressText}</p>
            </div>
          </div>
        </InvitationCard>
      </div>
    </section>
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
