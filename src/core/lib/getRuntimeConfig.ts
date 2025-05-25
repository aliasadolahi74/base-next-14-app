import { readFile } from "fs/promises";
import { join } from "path";

export async function getRuntimeConfig(): Promise<Record<string, string>> {
  const configPath = join(process.cwd(), "/runtime-config.json");
  const raw = await readFile(configPath, "utf-8");
  return JSON.parse(raw);
}

export async function getPublicRuntimeConfig(): Promise<Record<string, string>> {
  const configPath = join(process.cwd(), "/runtime-config.json");
  const raw = await readFile(configPath, "utf-8");
  const obj = JSON.parse(raw);
  const filtered: Record<string, string> = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (key.includes("NILVA_APP_PUBLIC_")) {
      filtered[key] = value as string;
    }
  });
  return filtered;
}
