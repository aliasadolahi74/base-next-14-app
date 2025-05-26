'use client'

import { useEffect, useState } from 'react'


export function useRuntimeConfig() {
  const [config, setConfig] = useState<Record<string, string> | null>(null)

  useEffect(() => {
      fetch("/api/env")
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data)
          setConfig(data);
        })
        .catch((err) => console.error("Failed to load runtime config:", err));
  }, [])

  return config
}
