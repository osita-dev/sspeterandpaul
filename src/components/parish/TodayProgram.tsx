import { MapPin} from "lucide-react";

const todayEvents = [
  { time: "6:30 AM", title: "Morning Mass", location: "Main Church", isNow: true },
  { time: "8:00 AM", title: "Rosary Group", location: "Grotto", isNow: false },
  { time: "10:00 AM", title: "Catechism Class", location: "Parish Hall", isNow: false },
  { time: "5:00 PM", title: "Holy Hour Adoration", location: "Main Church", isNow: false },
  { time: "6:00 PM", title: "Evening Mass", location: "Main Church", isNow: false },
  { time: "7:00 PM", title: "Legion of Mary", location: "Meeting Room A", isNow: false },
];

const weekCalendar = [
  { day: "Mon", date: 9, events: 2 },
  { day: "Tue", date: 10, events: 3 },
  { day: "Wed", date: 11, events: 2, isToday: true },
  { day: "Thu", date: 12, events: 4 },
  { day: "Fri", date: 13, events: 2 },
  { day: "Sat", date: 14, events: 5 },
  { day: "Sun", date: 15, events: 6 },
];

export function TodayProgram() {
  return (
    <section id="program" className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            Today at the Parish
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            View today's schedule and plan your visit. All are welcome!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            <div className="bg-rose-900 text-white px-6 py-4 flex items-center justify-between">
              <h3 className="font-semibold text-lg">Today's Program</h3>
              <span className="text-rose-200 text-sm">
                {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>
            <div className="divide-y divide-zinc-100">
              {todayEvents.map((event, idx) => (
                <div
                  key={idx}
                  className={`px-6 py-4 flex items-center gap-4 transition-colors ${
                    event.isNow ? "bg-amber-50 border-l-4 border-amber-500" : "hover:bg-stone-50"
                  }`}
                >
                  <div className="w-20 text-center">
                    <span
                      className={`font-semibold ${
                        event.isNow ? "text-amber-600" : "text-zinc-800"
                      }`}
                    >
                      {event.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-zinc-800">{event.title}</p>
                    <p className="text-sm text-zinc-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </p>
                  </div>
                  {event.isNow && (
                    <span className="px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                      NOW
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mini Calendar */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            <div className="bg-rose-900 text-white px-6 py-4">
              <h3 className="font-semibold text-lg">This Week</h3>
              <p className="text-rose-200 text-sm">December 2024</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-7 gap-2">
                {weekCalendar.map((item) => (
                  <button
                    key={item.day}
                    className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                      item.isToday
                        ? "bg-rose-900 text-white"
                        : "hover:bg-stone-100 text-zinc-700"
                    }`}
                  >
                    <span className="text-xs font-medium opacity-70">{item.day}</span>
                    <span className="text-lg font-bold">{item.date}</span>
                    <div className="flex gap-0.5 mt-1">
                      {Array(Math.min(item.events, 3))
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full ${
                              item.isToday ? "bg-amber-400" : "bg-rose-400"
                            }`}
                          />
                        ))}
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-600">Upcoming Events</span>
                  <a href="#events" className="text-rose-700 font-medium hover:underline">
                    View All →
                  </a>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-zinc-700">Parish Feast Day - Dec 29</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-zinc-700">Christmas Carol Night - Dec 24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
