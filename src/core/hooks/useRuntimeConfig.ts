'use client'

import { useEffect, useState } from 'react'


// Client-side hook to fetch runtime config
export function useRuntimeConfig() {
  const [config, setConfig] = useState<Record<string, string> | null>(null)

  useEffect(() => {
    const isProduction = process.env.NODE_ENV === 'production'

    if (isProduction) {
      fetch('/runtime-config.json')
        .then((res) => res.json())
        .then((data) => setConfig(data))
        .catch((err) => console.error('Failed to load runtime config:', err))
    }
  }, [])

  return config
}
