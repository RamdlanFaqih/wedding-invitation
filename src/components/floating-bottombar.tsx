"use client";

import { FileText, Gift, ImageIcon, MessageCircle, Play, Pause, Volume2, VolumeXIcon } from "lucide-react";
import { useNavigationStore } from "@/store/navigation-store";
import React, { useEffect, useState } from "react";

export function FloatingBottomBar() {
  const { activeSection, setActiveSection } = useNavigationStore();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const navItems = [
    { id: "invitation", icon: FileText, label: "Invitation" },
    { id: "gift", icon: Gift, label: "Gift" },
    { id: "messages", icon: MessageCircle, label: "Messages" },
  ];

  // sync status dari window.__musicPlayer (jika tersedia)
  useEffect(() => {
    let id: number | null = null;

    const tick = () => {
      const m = typeof window !== "undefined" ? window.__musicPlayer : undefined;
      if (m) {
        setIsPlaying(m.isPlaying());
        setIsMuted(m.isMuted());
      }
    };

    // check periodik untuk keep-in-sync (sederhana)
    id = window.setInterval(tick, 500);
    tick();

    return () => {
      if (id) window.clearInterval(id);
    };
  }, []);

  const handleMusicToggle = async () => {
    const m = typeof window !== "undefined" ? window.__musicPlayer : undefined;
    if (!m) return;
    await m.togglePlay();
    setIsPlaying(m.isPlaying());
  };

  const handleMuteToggle = () => {
    const m = typeof window !== "undefined" ? window.__musicPlayer : undefined;
    if (!m) return;
    m.toggleMute();
    setIsMuted(m.isMuted());
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/80 backdrop-blur-md rounded-full px-4 py-3 shadow-lg border border-border/50 flex items-center gap-4">
        <div className="flex items-center gap-6">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`p-2 rounded-full transition-colors ${activeSection === id ? "bg-primary text-primary-foreground" : "hover:bg-accent text-muted-foreground"
                }`}
              aria-label={label}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* spacer */}
        <div className="w-px h-6 bg-muted-foreground/10 mx-2" />

        {/* Music controls inside the bottom bar */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleMusicToggle}
            className="p-2 rounded-full hover:bg-accent transition"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <button
            onClick={handleMuteToggle}
            className="p-2 rounded-full hover:bg-accent transition"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeXIcon size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}
