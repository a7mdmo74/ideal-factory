'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Send } from 'lucide-react'

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    setMessage('')
  }
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute bottom-5 right-5 transition-transform hover:scale-105 cursor-pointer"
      >
        <Image
          src="/images/support.png"
          alt="Support"
          width={125}
          height={98}
          className="w-12 md:w-[125]"
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-12 md:bottom-32 right-5 z-50 flex h-[500px] w-[380px] flex-col overflow-hidden rounded-3xl border bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-primary px-5 py-4 text-white">
            <div>
              <h3 className="font-semibold">Chat Support</h3>
              <p className="text-sm text-white/80">We usually reply within minutes</p>
            </div>

            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-muted/30 p-4">
            <div className="max-w-[80%] rounded-2xl bg-primary p-3 text-sm text-white">
              Hello 👋 How can we help you today?
            </div>
          </div>

          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="h-11 flex-1 rounded-full border px-4 outline-none focus:ring-2 focus:ring-primary text-black"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />

              <button
                onClick={handleSendMessage}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
