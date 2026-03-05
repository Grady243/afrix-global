import type { Metadata } from "next"
import { PageHeader } from "../../components/page-header"
import { ContactForm } from "../../components/contact-form"

export const metadata: Metadata = {
  title: "Contact - Afrix Global",
  description:
    "Contactez Afrix Global pour toute question, demande de formation ou collaboration. Nous sommes a votre ecoute.",
}

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="CONTACTEZ"
        highlight="NOUS"
        highlightColor="text-afrix-green"
        description="Vous avez une question, un projet ou souhaitez rejoindre nos formations ? N'hesitez pas a nous ecrire."
      />
      <ContactForm />
    </main>
  )
}
