"use client"

import { FloralDecoration } from "./floral-decoration"
import { MessageCircle, Send } from "lucide-react"

export function MessagesSection() {
  const sendWhatsAppMessage = () => {
    const message = encodeURIComponent(
      "Congratulations on your wedding! Wishing you both a lifetime of love and happiness. 💕",
    )
    const phoneNumber = "6281234567890" // Replace with actual phone number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden px-8 py-12">
      <FloralDecoration className="top-0 right-0 text-accent" />

      <div className="text-center relative z-10">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Send Your Wishes</h2>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Your warm wishes and blessings mean the world to us. Share your thoughts and congratulations as we begin this
          beautiful journey together.
        </p>

        <div className="space-y-6">
          {/* WhatsApp Message */}
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="text-accent mr-2" size={24} />
              <h3 className="text-lg font-semibold text-card-foreground">WhatsApp Message</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Send us your congratulations and well wishes directly through WhatsApp. We&apos;d love to hear from you!
            </p>
            <button
              onClick={sendWhatsAppMessage}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
            >
              <Send size={20} />
              Send WhatsApp Message
            </button>
          </div>

          {/* Sample Messages */}
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Message Ideas</h3>
            <div className="space-y-3 text-left">
              <div className="bg-background/50 rounded p-3">
                <p className="text-sm text-foreground italic">
                  &quot;Congratulations on your wedding! Wishing you both a lifetime of love and happiness.&quot;
                </p>
              </div>
              <div className="bg-background/50 rounded p-3">
                <p className="text-sm text-foreground italic">
                  &quot;May your marriage be filled with endless joy, laughter, and beautiful memories.&quot;
                </p>
              </div>
              <div className="bg-background/50 rounded p-3">
                <p className="text-sm text-foreground italic">
                  &quot;So happy to celebrate this special day with you. Best wishes for your future together!&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-card/30 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Can&apos;t make it to the ceremony? Your messages and prayers are just as meaningful to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
