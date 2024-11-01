import { headers } from "next/headers"


export async function POST(req: Request) {
  const body = await req.text()
  const signature = (await headers()).get("Testing-Signature") as string

  return new Response(null, { status: 200 })
}
