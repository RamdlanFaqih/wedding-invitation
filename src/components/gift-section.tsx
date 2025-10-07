"use client"

import { FloralDecoration } from "./floral-decoration"
import { Copy, CreditCard, Smartphone } from "lucide-react"

export function GiftSection() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen shadow-2xl max-w-md bg-background relative overflow-hidden  pt-10 pb-20 mx-auto px-8">
      <FloralDecoration className="top-0 right-0 text-accent" />

      <div className="text-center relative z-10">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Hadiah Pernikahan</h2>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Kehadiran dan doa restu Bapak/Ibu/Saudara/i merupakan anugerah yang paling berarti bagi kami. 
          Namun, apabila berkenan untuk memberikan tanda kasih, dapat melalui cara berikut:
        </p>

        <div className="space-y-4">
          {/* E-Wallet */}
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <Smartphone className="text-accent mr-2" size={24} />
              <h3 className="text-lg font-semibold text-card-foreground">Dana</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between bg-background/50 rounded p-2 border-2">
                  <span className="font-mono text-foreground">+62 821-1763-4360</span>
                  <button onClick={() => copyToClipboard("+6281234567890")} className="p-1 hover:bg-accent/20 rounded">
                    <Copy size={16} className="text-muted-foreground" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Atas Nama</p>
                <p className="font-medium text-foreground">Ajeng Sari Dewi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-card/30 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Jazakumullahu khairan katsiran atas doa, perhatian, dan tanda kasih yang diberikan. 
            Semoga Allah SWT membalas dengan keberkahan dan pahala yang berlipat ganda.
          </p>
        </div>
      </div>
    </div>
  )
}
