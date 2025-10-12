// MusicPlayer.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  loop?: boolean;
};

declare global {
  interface Window {
    __musicPlayer?: {
      togglePlay: () => Promise<void>;
      toggleMute: () => void;
      isPlaying: () => boolean;
      isMuted: () => boolean;
    };
  }
}

export default function MusicPlayer({
  src = "/music.mp3",
  loop = true,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingRef = useRef<boolean>(false);
  const mutedRef = useRef<boolean>(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const a = new Audio(src);
    a.loop = loop;
    a.preload = "auto";
    audioRef.current = a;

    const onPlay = () => {
      playingRef.current = true;
      setIsPlaying(true);
    };
    const onPause = () => {
      playingRef.current = false;
      setIsPlaying(false);
    };
    const onVolumeChange = () => {
      mutedRef.current = !!a.muted;
      setIsMuted(mutedRef.current);
    };

    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    a.addEventListener("volumechange", onVolumeChange);

    window.__musicPlayer = {
      togglePlay: async () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (!playingRef.current) {
          try {
            await audio.play();
            playingRef.current = true;
            setIsPlaying(true);
          } catch (err) {
            console.warn("Play failed:", err);
          }
          return;
        }
        audio.pause();
        playingRef.current = false;
        setIsPlaying(false);
      },
      toggleMute: () => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.muted = !audio.muted;
        mutedRef.current = audio.muted;
        setIsMuted(audio.muted);
      },
      isPlaying: () => {
        const audio = audioRef.current;
        if (audio) return !audio.paused && !audio.ended;
        return playingRef.current;
      },
      isMuted: () => {
        const audio = audioRef.current;
        if (audio) return !!audio.muted;
        return mutedRef.current;
      },
    };

    return () => {
      // cleanup
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("volumechange", onVolumeChange);
      a.pause();
      a.src = "";
      audioRef.current = null;
      try {
        delete window.__musicPlayer;
      } catch {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // buka undangan (splash) lalu play
  const openInvitationAndPlay = async () => {
    setIsOpen(true);
    try {
      const a = audioRef.current;
      if (!a) return;
      a.muted = isMuted;
      await a.play();
      playingRef.current = true;
      setIsPlaying(true);
    } catch (e) {
      console.warn("Play failed:", e);
      playingRef.current = false;
      setIsPlaying(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-b from-white/90 to-white/80">
          <div className="max-w-sm w-[92%] mx-auto text-center p-6 rounded-3xl shadow-xl bg-white/90 backdrop-blur-sm border border-muted-foreground/8">
            <h2 className="font-script text-4xl mb-2">Susi &amp; Abdul Munir</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Dengan hormat mengundang Anda untuk hadir pada pernikahan kami
            </p>

            <button
              onClick={openInvitationAndPlay}
              className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg hover:scale-[1.02] transition-transform"
            >
              Buka Undangan
              <span className="text-sm opacity-80">▶</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
