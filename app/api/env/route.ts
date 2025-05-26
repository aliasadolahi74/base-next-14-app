import { NextResponse } from 'next/server'
import { getRuntimeConfig } from "@/src/core/lib/getRuntimeConfig";


export const dynamic = 'force-dynamic'; // Force dynamic rendering for this route

export async function GET() {
  try {
    const config = await getRuntimeConfig();
    const response = NextResponse.json(config);
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to read config file' }, { status: 500 });
  }
}
