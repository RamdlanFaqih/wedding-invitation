import WeddingInvitation from "@/components/invitation-section"
import { Suspense } from "react"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeddingInvitation />
    </Suspense>
  )
}
