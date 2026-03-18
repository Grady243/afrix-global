import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin, Clock, Users, ArrowLeft } from "lucide-react"
import type { Event } from "@/lib/events-data"

interface EventDetailProps {
  event: Event
}

export function EventDetail({ event }: EventDetailProps) {
  return (
    <section className="w-full bg-afrix-dark py-16">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        {/* Back button */}
        <Link href="/#events" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} />
          <span>Retour aux evenements</span>
        </Link>

        {/* Main image */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white">
              <CalendarDays size={18} />
              <span className="text-sm font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white">
              <MapPin size={18} />
              <span className="text-sm font-medium">{event.location}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">A propos de l{"'"}evenement</h2>
              <p className="text-white/70 leading-relaxed text-lg">{event.fullDescription}</p>
            </div>

            {/* Schedule */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="text-afrix-yellow" size={24} />
                Programme
              </h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-afrix-yellow font-semibold min-w-[120px]">{item.time}</div>
                    <div className="text-white">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="text-afrix-blue" size={24} />
                Intervenants
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.speakers.map((speaker, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 overflow-hidden">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{speaker.name}</h3>
                        <p className="text-white/60 text-sm">{speaker.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {event.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Galerie</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {event.gallery.map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                      <Image
                        src={img}
                        alt={`Galerie ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white/5 border-white/10 sticky top-8">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold text-white">Inscription</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <CalendarDays size={20} className="text-afrix-yellow" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin size={20} className="text-afrix-red" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-sm mb-4">
                    Places limitees. Reservez votre place des maintenant pour ne pas manquer cet evenement exceptionnel.
                  </p>
                  <Button className="w-full bg-afrix-yellow hover:bg-afrix-yellow/90 text-black font-semibold">
                    S{"'"}inscrire maintenant
                  </Button>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-sm">
                    Des questions ? Contactez-nous a{" "}
                    <a href="mailto:events@afrixglobal.com" className="text-afrix-blue hover:underline">
                      events@afrixglobal.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
