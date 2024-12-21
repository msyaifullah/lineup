import Lineup from "./lineup"



export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col gap-6 bg-pink-400 py-8 md:py-12 lg:py-24">
      <Lineup/>
    </section>
  )
}
