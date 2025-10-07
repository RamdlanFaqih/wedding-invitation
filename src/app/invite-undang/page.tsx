"use client"

import React, { useState } from "react"

export default function InvitePage() {
  const [name, setName] = useState("")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    // primary: navigator.clipboard (https secure)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      return
    }

    // fallback: create textarea, select, execCommand
    const ta = document.createElement("textarea")
    ta.value = text
    // place off-screen
    ta.style.position = "fixed"
    ta.style.left = "-9999px"
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand("copy")
    } finally {
      document.body.removeChild(ta)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return

    const encoded = encodeURIComponent(trimmed)
    const url = `${window.location.origin}/?to=${encoded}`

    // buat isi undangan sesuai format yang diminta
    const invitationText = `Kepada Yth.
Bapak/Ibu/Saudara/i
${trimmed}
___________________

Assalamualaikum Warahmatullahi Wabarakatuh

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami.

Berikut link undangan kami, untuk info lengkap dari acara, bisa kunjungi :

${url}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Wassalamualaikum Warahmatullahi Wabarakatuh

Terima Kasih

Hormat kami,
Susi & Abdul
`

    try {
      await copyToClipboard(invitationText)
      setCopied(true)
      // beri waktu notifikasi visible (opsional)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      // kalau gagal menyalin, tetap navigasi dan beri info
      setCopied(false)
      alert("Gagal menyalin otomatis. Link dibuat: " + url)
      window.location.href = url
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-card/60 backdrop-blur-md rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Buat Link Undangan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm">
            Nama penerima (contoh: Faqih & Pasangan)
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

          {copied && <p className="text-sm text-emerald-600">Isi undangan disalin ke clipboard ✅</p>}

          <p className="text-xs text-muted-foreground">
            Catatan: siapa pun yang memiliki link ini bisa membuka undangan tersebut.
          </p>
        </form>
      </div>
    </div>
  )
}
