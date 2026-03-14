import { PageHeader } from "../../components/page-header"
import { AboutContent } from "../../components/about-content"

export const metadata = {
  title: "A Propos - Afrix Global",
  description:
    "Decouvrez Afrix Global, notre mission, notre vision et nos valeurs pour transformer l'education numerique en Afrique.",
}

export default function AproposPage() {
  return (
    <>
      <PageHeader
        title="A Propos de"
        highlight="Nous"
        highlightColor="text-afrix-green"
        description="Decouvrez notre histoire, notre mission et notre vision pour transformer l'education numerique en Afrique."
      />
      <AboutContent />
    </>
  )
}
