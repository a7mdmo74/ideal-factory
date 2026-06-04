'use client'

import { useState, useRef } from 'react'
import { Play, Pause } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  src: string
  label: string
}

export default function VideoPlayer({ src, label }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleToggle() {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
      setHasStarted(true)
    }
  }

  function handleEnded() {
    setIsPlaying(false)
    setHasStarted(false)
  }

  return (
    <div className="relative z-10 h-64 sm:h-96 md:h-136 w-full">
      <video
        ref={videoRef}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-300 pointer-events-none',
          hasStarted ? 'opacity-100' : 'opacity-0'
        )}
        playsInline
        preload="none"
        onEnded={handleEnded}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={handleToggle}
        aria-label={label}
        type="button"
        className={cn(
          'absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2',
          'flex items-center justify-center rounded-full border-2 md:border-4 border-white',
          'bg-transparent text-white transition hover:scale-105',
          'h-20 w-20 md:h-36 md:w-36',
          isPlaying && 'opacity-0 hover:opacity-100'
        )}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 md:h-12 md:w-12 fill-current ms-0" aria-hidden="true" />
        ) : (
          <Play className="h-6 w-6 md:h-12 md:w-12 fill-current ms-1" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
