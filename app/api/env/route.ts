import { NextResponse } from 'next/server'
import { getRuntimeConfig } from "@/src/core/lib/getRuntimeConfig";

export async function GET() {
  try {
    const config = await getRuntimeConfig()
    return NextResponse.json(config)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to read config file' }, { status: 500 })
  }
}
