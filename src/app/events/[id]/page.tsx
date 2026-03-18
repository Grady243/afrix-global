import { notFound } from "next/navigation";
import { getEventById, events } from "@/lib/events-data";
import { PageHeader } from "../../../components/page-header";
import { EventDetail } from "../../../components/event-detail";

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = getEventById(id)
  
  if (!event) {
    return {
      title: "Evenement non trouve - Afrix Global",
    }
  }
  
  return {
    title: `${event.title} - Afrix Global`,
    description: event.description,
  }
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = getEventById(id)

  if (!event) {
    notFound()
  }

  return (
    <main>
      <PageHeader
        title=""
        highlight={event.title}
        highlightColor="text-afrix-yellow"
        description={event.description}
      />
      <EventDetail event={event} />
    </main>
  )
}
