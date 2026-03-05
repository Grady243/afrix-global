import type { Metadata } from "next"
import { PageHeader } from "../../components/page-header"
import { ServicesDetail } from "../../components/services-detail"
export const metadata: Metadata = {
  title: "Nos Services - Afrix Global",
  description:
    "Decouvrez nos services de developpement web, mobile, marketing digital, consultation informatique et communication visuelle.",
}

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="NOS"
        highlight="SERVICES"
        highlightColor="text-afrix-red"
        description="Nous proposons une gamme complete de services numeriques pour accompagner les entreprises et les individus dans leur transformation digitale."
      />
      <ServicesDetail />
    </main>
  )
}
