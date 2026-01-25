import { useState } from "react";
import { Calendar, Clock, MapPin, Users, ChevronRight, Check } from "lucide-react";
import { toast } from "sonner";

const events = [
  {
    id: 1,
    title: "Christmas Carol Night",
    date: "December 24, 2024",
    time: "8:00 PM",
    location: "Main Church",
    description:
      "Join us for a beautiful evening of carols and candlelight as we prepare our hearts for the birth of Christ.",
    attendees: 245,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Christmas Day Mass",
    date: "December 25, 2024",
    time: "6:30 AM, 8:00 AM, 10:00 AM",
    location: "Main Church",
    description:
      "Celebrate the Nativity of Our Lord with three joyful Masses. Special children's blessing at 10 AM Mass.",
    attendees: 500,
    isFeatured: true,
  },
  {
    id: 3,
    title: "Parish Feast Day & Thanksgiving",
    date: "December 29, 2024",
    time: "10:00 AM",
    location: "Main Church & Parish Hall",
    description:
      "Annual thanksgiving Mass followed by reception and entertainment. All parishioners are invited.",
    attendees: 380,
    isFeatured: false,
  },
  {
    id: 4,
    title: "New Year's Eve Vigil Mass",
    date: "December 31, 2024",
    time: "11:00 PM",
    location: "Main Church",
    description:
      "End the year in prayer and thanksgiving. Mass followed by Eucharistic adoration until midnight.",
    attendees: 150,
    isFeatured: false,
  },
  {
    id: 5,
    title: "Solemnity of Mary, Mother of God",
    date: "January 1, 2025",
    time: "9:00 AM",
    location: "Main Church",
    description:
      "Holy Day of Obligation. Begin the new year honoring Our Blessed Mother.",
    attendees: 200,
    isFeatured: false,
  },
];

export function EventsList() {
  const [rsvpStatus, setRsvpStatus] = useState<Record<number, boolean>>({});

  const handleRSVP = (eventId: number, eventTitle: string) => {
    setRsvpStatus((prev) => ({ ...prev, [eventId]: true }));
    toast.success(`You've RSVP'd for "${eventTitle}". See you there!`);
  };

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Mark Your Calendar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            Upcoming Events
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Don't miss out on parish activities and celebrations. RSVP to help us plan better!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event) => (
            <article
              key={event.id}
              className={`rounded-2xl border overflow-hidden transition-shadow hover:shadow-lg ${
                event.isFeatured
                  ? "border-amber-200 bg-gradient-to-r from-amber-50 to-white"
                  : "border-zinc-100 bg-white"
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center ${
                        event.isFeatured ? "bg-amber-500 text-white" : "bg-rose-900 text-white"
                      }`}
                    >
                      <span className="text-xs font-medium opacity-80">
                        {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                      </span>
                      <span className="text-2xl font-bold">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {event.isFeatured && (
                          <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-semibold rounded mb-2">
                            Featured
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-zinc-800 mb-2">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-zinc-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {event.attendees} attending
                      </span>
                    </div>

                    <p className="text-zinc-600 mb-4">{event.description}</p>

                    {/* RSVP Button */}
                    {rsvpStatus[event.id] ? (
                      <button
                        disabled
                        className="flex items-center gap-2 px-5 py-2.5 bg-green-100 text-green-700 font-semibold rounded-lg"
                      >
                        <Check className="w-5 h-5" />
                        RSVP'd
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRSVP(event.id, event.title)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-rose-900 hover:bg-rose-800 text-white font-semibold rounded-lg transition-colors"
                      >
                        RSVP Now
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
