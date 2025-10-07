import WeddingInvitation from "@/components/invitation-section"
import MusicPlayer from "@/components/music-player"
import { Suspense } from "react"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeddingInvitation />
      <MusicPlayer src="/music.mp3" />
    </Suspense>
  )
}
