'use client'

import { useEffect, useState } from 'react'


export function useRuntimeConfig() {
  const [config, setConfig] = useState<Record<string, string> | null>(null)

  useEffect(() => {
      fetch('http://localhost:3000/api/env', {cache: "no-store"})
        .then((res) => res.json())
        .then((data) => setConfig(data))
        .catch((err) => console.error('Failed to load runtime config:', err))
  }, [])

  return config
}
