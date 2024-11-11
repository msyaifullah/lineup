import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import Counter from "./box"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/msyaifullah/beda",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer mma`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <div className="flex">
      <Counter />
      <section className="w-dvw space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 z-20">
        <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Let's Create Something{" "}
            <span className="text-violet-500">Amazing</span>
            <span className="text-orange-500">&nbsp;Together&nbsp;</span>.
          </h1>
          <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Building Immersive Digital Experiences, Pixel Pushing, Paradigm
            Shifting.
          </p>
        </div>
      </section>
    </div>
  )
}
