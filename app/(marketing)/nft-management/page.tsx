import { Metadata } from "next"

import { client } from "./client"
import NFTManagementPage from "./nft-management"

export const metadata: Metadata = {
  title: "Products nft",
}

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function NFTPage() {
  const descriptions = [
    "Your future is being crafted, one pixel at a time.",
    "Stay tuned for the next big thing.",
    "Coming soon. Get ready to be amazed.",
    "We're hard at work, crafting a digital masterpiece just for you.",
    "Stay tuned for updates on our progress.",
  ]

  return (
    <section >
      <NFTManagementPage client={client} />
    </section>
  )
}
