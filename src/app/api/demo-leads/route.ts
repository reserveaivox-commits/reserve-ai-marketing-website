import { appendFile, mkdir } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

const STORAGE_DIR = path.join(process.cwd(), ".data");
const STORAGE_FILE = path.join(STORAGE_DIR, "demo-leads.jsonl");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const lead = {
      name,
      email,
      source: "hero-demo",
      createdAt: new Date().toISOString(),
    };

    await mkdir(STORAGE_DIR, { recursive: true });
    await appendFile(STORAGE_FILE, `${JSON.stringify(lead)}\n`, "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to save lead" }, { status: 500 });
  }
}
