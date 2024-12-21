import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products",
}

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function ProductsPage() {
  const descriptions = [
    "Your future is being crafted, one pixel at a time.",
    "Stay tuned for the next big thing.",
    "Coming soon. Get ready to be amazed.",
    "We're hard at work, crafting a digital masterpiece just for you.",
    "Stay tuned for updates on our progress.",
  ]

  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-5xl md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Stay tune...
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {descriptions[randomIntFromInterval(0, descriptions.length - 1)]}
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Sportengine always in development.{" "}
          <strong>
            You can always comeback to seeing the progress or throw new
            Error(&quot;&quot;)
          </strong>
        </p>
      </div>
    </section>
  )
}
