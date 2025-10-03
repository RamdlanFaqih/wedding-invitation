import { create } from "zustand"

interface NavigationStore {
  activeSection: string
  setActiveSection: (section: string) => void
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  activeSection: "invitation",
  setActiveSection: (section) => set({ activeSection: section }),
}))
