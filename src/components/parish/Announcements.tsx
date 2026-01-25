import { Megaphone, Clock, ChevronRight,Star, Calendar } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Christmas Carol Night Registration Open",
    content:
      "Join us for our annual Christmas Carol Night on December 24th at 8 PM. Register your family for the special candlelight procession. Children's choir rehearsals begin December 15th.",
    date: "Dec 10, 2024",
    category: "Event",
    isNew: true,
    isPinned: true,
    expiresIn: "14 days",
  },
  {
    id: 2,
    title: "Parish Thanksgiving Mass – December 29th",
    content:
      "Our annual Parish Feast Day Thanksgiving Mass will hold on December 29th. Special thanksgiving envelopes are available at the parish office. Let us come together in gratitude.",
    date: "Dec 8, 2024",
    category: "Mass",
    isNew: true,
    isPinned: false,
    expiresIn: "19 days",
  },
  {
    id: 3,
    title: "Confession Schedule for Advent",
    content:
      "Extra confession times available during Advent: Wednesdays 5-6 PM and Saturdays 4-5 PM. Prepare your hearts for the coming of the Lord.",
    date: "Dec 5, 2024",
    category: "Sacrament",
    isNew: false,
    isPinned: false,
    expiresIn: "20 days",
  },
];

export function Announcements() {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Event":
        return "bg-amber-100 text-amber-800";
      case "Mass":
        return "bg-rose-100 text-rose-800";
      case "Sacrament":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-zinc-100 text-zinc-800";
    }
  };

  return (
    <section id="announcements" className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-rose-700 mb-2">
              <Megaphone className="w-5 h-5" />
              <span className="font-medium">Parish Updates</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
              Announcements
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 text-rose-700 font-medium hover:underline"
          >
            View Archive
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((item) => (
            <article
              key={item.id}
              className={`bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow ${
                item.isPinned ? "border-amber-200 ring-2 ring-amber-100" : "border-zinc-100"
              }`}
            >
              <div className="p-6">
                {/* Labels Row */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {item.isPinned && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3" />
                      Pinned
                    </span>
                  )}
                  {item.isNew && (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      New
                    </span>
                  )}
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryStyles(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-zinc-800 mb-2 line-clamp-2">
                  {item.title}
                </h3>

                {/* Content */}
                <p className="text-zinc-600 text-sm mb-4 line-clamp-3">{item.content}</p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-zinc-500 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Expires in {item.expiresIn}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-rose-700 font-medium hover:underline"
          >
            View All Announcements
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
