import type { Metadata } from "next"; 
import { PageHeader } from "../../components/page-header";
import { TeamGrid } from "../../components/Team"

export const metadata: Metadata = {
  title: "Notre Equipe - Afrix Global",
  description:
    "Decouvrez l'equipe passionnee d'Afrix Global qui forme et accompagne les talents africains dans le numerique.",
}

export default function EquipePage() {
  return (
    <main>
      <PageHeader
        title="NOTRE"
        highlight="EQUIPE"
        highlightColor="text-afrix-green"
        description="Une equipe passionnee et diversifiee, engagee a former la prochaine generation de talents numeriques en Afrique."
      />
      <TeamGrid />
    </main>
  )
}
