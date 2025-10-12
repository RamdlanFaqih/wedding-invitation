"use client"

import { useState } from "react"
import { FloralDecoration } from "./floral-decoration"
import { MessageCircle, Send } from "lucide-react"

export function MessagesSection() {
  const [customMessage, setCustomMessage] = useState("")

  const phoneNumber = "6282117634360" // Ganti dengan nomor WhatsApp yang sebenarnya

  const sendWhatsAppMessage = () => {
    // Template dasar doa islami
    const baseTemplate =
      "Assalamu'alaikum, Barakallahu laka wa baraka ‘alaika wa jama‘a bainakuma fii khair. Semoga Allah memberkahi pernikahan kalian dan menyatukan dalam kebaikan."

    // Jika user mengisi pesan, gabungkan dengan template (pesan user ditempatkan setelah salam)
    const finalMessage = customMessage.trim()
      ? `${baseTemplate}\n\nPesan dari saya:\n${customMessage.trim()}`
      : baseTemplate

    const encoded = encodeURIComponent(finalMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank")
  }

  return (
    <div className="min-h-screen shadow-2xl max-w-md bg-background relative overflow-hidden pt-10 pb-20 mx-auto px-8">
      <FloralDecoration className="top-0 right-0 text-accent" />

      <div className="text-center relative z-10">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Kirim Doa & Ucapan</h2>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Doa dan restu dari Bapak/Ibu/Saudara/i merupakan hadiah terindah bagi kami. Silakan kirimkan ucapan dan doa terbaik melalui pesan berikut.
        </p>

        <div className="space-y-6">
          {/* WhatsApp Message */}
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="text-accent mr-2" size={24} />
              <h3 className="text-lg font-semibold text-card-foreground">Pesan via WhatsApp</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Ketik doa atau ucapan Anda di bawah ini. Jika kosong, kami akan mengirimkan doa standar.
            </p>

            <label htmlFor="message" className="sr-only">
              Pesan Anda
            </label>
            <textarea
              id="message"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Tulis doa / ucapan Anda di sini… (mis. Semoga diberkahi selalu)"
              className="w-full min-h-[96px] resize-none rounded-lg border border-muted-foreground/20 p-3 mb-4 text-sm placeholder:text-muted-foreground bg-background/60"
            />

            <button
              onClick={sendWhatsAppMessage}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
            >
              <Send size={20} />
              Kirim Pesan WhatsApp
            </button>
          </div>

          {/* Sample Messages */}
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Contoh Ucapan Doa</h3>
            <div className="space-y-3 text-left">
              <div className="bg-background/50 rounded p-3">
                <p className="text-sm text-foreground italic">
                  &quot;Barakallahu laka wa baraka ‘alaika wa jama‘a bainakuma fii khair.&quot;
                </p>
              </div>
              <div className="bg-background/50 rounded p-3">
                <p className="text-sm text-foreground italic">
                  &quot;Semoga Allah menjadikan rumah tangga kalian sakinah, mawaddah, wa rahmah.&quot;
                </p>
              </div>
              <div className="bg-background/50 rounded p-3">
                <p className="text-sm text-foreground italic">
                  &quot;Doaku semoga pernikahan ini menjadi jalan menuju surga-Nya.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-card/30 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Jika berhalangan hadir, doa dan ucapan yang dikirimkan insyaAllah tetap menjadi berkah bagi kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
