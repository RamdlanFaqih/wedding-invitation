"use client"

import { FileText, Gift, ImageIcon, MessageCircle } from "lucide-react"
import { useNavigationStore } from "@/store/navigation-store"

export function FloatingBottomBar() {
  const { activeSection, setActiveSection } = useNavigationStore()

  const navItems = [
    { id: "invitation", icon: FileText, label: "Invitation" },
    { id: "gift", icon: Gift, label: "Gift" },
    { id: "messages", icon: MessageCircle, label: "Messages" },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-border/50">
        <div className="flex items-center gap-6">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`p-2 rounded-full transition-colors ${
                activeSection === id ? "bg-primary text-primary-foreground" : "hover:bg-accent text-muted-foreground"
              }`}
              aria-label={label}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
