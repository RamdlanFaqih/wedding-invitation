"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-10-25T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center gap-4 my-8">
      <div className="countdown-circle rounded-full w-16 h-16 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-foreground">{timeLeft.days}</span>
        <span className="text-xs text-muted-foreground">Days</span>
      </div>
      <div className="countdown-circle rounded-full w-16 h-16 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-foreground">{String(timeLeft.hours).padStart(2, "0")}</span>
        <span className="text-xs text-muted-foreground">Hr</span>
      </div>
      <div className="countdown-circle rounded-full w-16 h-16 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-foreground">{String(timeLeft.minutes).padStart(2, "0")}</span>
        <span className="text-xs text-muted-foreground">Min</span>
      </div>
      <div className="countdown-circle rounded-full w-16 h-16 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-foreground">{String(timeLeft.seconds).padStart(2, "0")}</span>
        <span className="text-xs text-muted-foreground">Sec</span>
      </div>
    </div>
  )
}
