import { Formation } from "./lineup"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-5xl md:py-12 lg:py-24">
      <Formation />
    </section>
  )
}
