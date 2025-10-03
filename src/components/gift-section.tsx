"use client"

import { FloralDecoration } from "./floral-decoration"
import { Copy, CreditCard, Smartphone } from "lucide-react"

export function GiftSection() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden px-8 py-12">
      <FloralDecoration className="top-0 right-0 text-accent" />

      <div className="text-center relative z-10">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Wedding Gift</h2>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we
          would be grateful for your contribution to our future together.
        </p>

        <div className="space-y-4">
          {/* Bank Account */}
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="text-accent mr-2" size={24} />
              <h3 className="text-lg font-semibold text-card-foreground">Bank Transfer</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Bank Name</p>
                <p className="font-medium text-foreground">Bank Central Asia (BCA)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Number</p>
                <div className="flex items-center justify-between bg-background/50 rounded p-2">
                  <span className="font-mono text-foreground">1234567890</span>
                  <button onClick={() => copyToClipboard("1234567890")} className="p-1 hover:bg-accent/20 rounded">
                    <Copy size={16} className="text-muted-foreground" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Name</p>
                <p className="font-medium text-foreground">Ajeng Sari Dewi</p>
              </div>
            </div>
          </div>

          {/* E-Wallet */}
          <div className="bg-card/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <Smartphone className="text-accent mr-2" size={24} />
              <h3 className="text-lg font-semibold text-card-foreground">E-Wallet</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">GoPay / OVO / DANA</p>
                <div className="flex items-center justify-between bg-background/50 rounded p-2">
                  <span className="font-mono text-foreground">+62 812-3456-7890</span>
                  <button onClick={() => copyToClipboard("+6281234567890")} className="p-1 hover:bg-accent/20 rounded">
                    <Copy size={16} className="text-muted-foreground" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Name</p>
                <p className="font-medium text-foreground">Ajeng Sari Dewi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-card/30 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Thank you for your love and generosity. Your gift will help us start our new journey together.
          </p>
        </div>
      </div>
    </div>
  )
}
