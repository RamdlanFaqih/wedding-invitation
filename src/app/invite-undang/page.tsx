// app/invite/page.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function InvitePage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    const encoded = encodeURIComponent(name.trim())
    const url = `${window.location.origin}/?to=${encoded}`

    // navigasi ke link undangan
    router.push(`/?to=${encoded}`)

    // salin ke clipboard
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // kalau gagal salin, tetap navigasi dan beri info
      setCopied(false)
      alert("Link dibuat: " + url)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-card/60 backdrop-blur-md rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Buat Link Undangan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm">
            Nama penerima (contoh: Faqih dan Pasangan)
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama tamu"
              className="mt-2 w-full px-3 py-2 rounded-md border bg-background"
            />
          </label>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 px-4 py-2 rounded-md bg-emerald-600 text-white hover:opacity-90"
            >
              Buat & Buka Undangan
            </button>
            <button
              type="button"
              onClick={() => {
                const sample = "Faqih dan Pasangan"
                setName(sample)
              }}
              className="px-3 py-2 rounded-md border"
            >
              Contoh
            </button>
          </div>

          {copied && <p className="text-sm text-emerald-600">Link disalin ke clipboard ✅</p>}

          <p className="text-xs text-muted-foreground">
            Catatan: siapa pun yang memiliki link ini bisa membuka undangan tersebut.
          </p>
        </form>
      </div>
    </div>
  )
}
