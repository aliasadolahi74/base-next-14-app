import { readFile } from 'fs/promises'
import { join } from 'path'

export async function getRuntimeConfig(): Promise<Record<string, string>> {
  const configPath = join(process.cwd(), 'public/runtime-config.json')
  const raw = await readFile(configPath, 'utf-8')
  return JSON.parse(raw)
}
