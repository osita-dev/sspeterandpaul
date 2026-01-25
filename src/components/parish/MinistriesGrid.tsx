import { Users, Clock, ChevronRight, Music, BookOpen, Heart, Sparkles, Cross, Mic } from "lucide-react";

const ministries = [
  {
    id: 1,
    name: "Parish Choir",
    icon: Music,
    meetingTime: "Thursdays, 6:00 PM",
    description: "Lead the congregation in worship through beautiful hymns and sacred music.",
    members: 45,
    color: "bg-amber-500",
  },
  {
    id: 2,
    name: "Legion of Mary",
    icon: Heart,
    meetingTime: "Wednesdays, 5:30 PM",
    description: "Marian devotion and apostolic works serving the parish and community.",
    members: 32,
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "Catholic Men Organisation",
    icon: Users,
    meetingTime: "1st & 3rd Sundays",
    description: "Brotherhood in faith, supporting men's spiritual growth and family life.",
    members: 78,
    color: "bg-rose-600",
  },
  {
    id: 4,
    name: "Catholic Women Organisation",
    icon: Sparkles,
    meetingTime: "2nd & 4th Sundays",
    description: "Empowering women in faith, charity works, and parish development.",
    members: 120,
    color: "bg-purple-500",
  },
  {
    id: 5,
    name: "Catechists",
    icon: BookOpen,
    meetingTime: "Saturdays, 4:00 PM",
    description: "Teaching the faith to children preparing for First Communion and Confirmation.",
    members: 18,
    color: "bg-green-600",
  },
  {
    id: 6,
    name: "Altar Servers",
    icon: Cross,
    meetingTime: "Saturdays, 3:00 PM",
    description: "Assisting priests during Mass and other liturgical celebrations.",
    members: 35,
    color: "bg-red-600",
  },
  {
    id: 7,
    name: "Lectors",
    icon: Mic,
    meetingTime: "Monthly (Last Saturday)",
    description: "Proclaiming the Word of God during Mass with clarity and reverence.",
    members: 24,
    color: "bg-indigo-500",
  },
  {
    id: 8,
    name: "Youth Ministry",
    icon: Sparkles,
    meetingTime: "Sundays, 3:00 PM",
    description: "Engaging young people in faith formation, fellowship, and service.",
    members: 65,
    color: "bg-orange-500",
  },
];

export function MinistriesGrid() {
  return (
    <section id="ministries" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Get Involved
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            Parish Ministries
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Find your place in our parish family. Each ministry offers unique ways
            to grow in faith and serve God's people.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry) => (
            <article
              key={ministry.id}
              className="group bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden hover:shadow-lg hover:border-rose-100 transition-all"
            >
              <div className={`${ministry.color} h-2`} />
              <div className="p-5">
                {/* Icon & Name */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${ministry.color} bg-opacity-10 flex items-center justify-center`}
                  >
                    <ministry.icon className={`w-5 h-5 ${ministry.color.replace("bg-", "text-")}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-800 group-hover:text-rose-700 transition-colors">
                      {ministry.name}
                    </h3>
                    <p className="text-xs text-zinc-500 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {ministry.members} members
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-600 mb-4 line-clamp-2">
                  {ministry.description}
                </p>

                {/* Meeting Time */}
                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
                  <Clock className="w-3 h-3" />
                  {ministry.meetingTime}
                </div>

                {/* Join Button */}
                <button className="w-full flex items-center justify-center gap-1 px-4 py-2.5 bg-stone-100 hover:bg-rose-900 text-zinc-700 hover:text-white rounded-lg text-sm font-medium transition-colors group-hover:bg-rose-900 group-hover:text-white">
                  Join Ministry
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
