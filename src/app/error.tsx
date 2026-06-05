'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="p-6">
      <h1>Something went wrong.</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  )
}
