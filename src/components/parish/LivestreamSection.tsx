import { Play, Radio, Clock, ChevronRight } from "lucide-react";

interface LivestreamSectionProps {
  onOpenLivestream: () => void;
}

const pastMasses = [
  {
    id: 1,
    title: "2nd Sunday of Advent Mass",
    date: "Dec 8, 2024",
    duration: "1:15:32",
    thumbnail: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=400&h=225&fit=crop",
  },
  {
    id: 2,
    title: "Feast of the Immaculate Conception",
    date: "Dec 8, 2024",
    duration: "58:45",
    thumbnail: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=400&h=225&fit=crop",
  },
  {
    id: 3,
    title: "1st Sunday of Advent Mass",
    date: "Dec 1, 2024",
    duration: "1:22:10",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
  },
];

export function LivestreamSection({ onOpenLivestream }: LivestreamSectionProps) {
  return (
    <section id="livestream" className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-medium mb-4">
            <Radio className="w-4 h-4 animate-pulse" />
            Live Streaming Available
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Watch Mass Online
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Can't make it to church? Join us virtually for Mass and other services.
          </p>
        </div>

        {/* Live Stream CTA */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-rose-900/50 to-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700">
            <div className="aspect-video bg-zinc-800 flex items-center justify-center">
              <button
                onClick={onOpenLivestream}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-red-600/50">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-lg">Watch Live Now</p>
                  <p className="text-zinc-400 text-sm">Morning Mass in progress</p>
                </div>
              </button>
            </div>
            {/* Live Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white text-sm font-semibold rounded-full">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              LIVE
            </div>
          </div>
        </div>

        {/* Past Masses */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Recent Recordings</h3>
            <a
              href="#"
              className="flex items-center gap-1 text-amber-400 font-medium hover:underline text-sm"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastMasses.map((mass) => (
              <article
                key={mass.id}
                className="group bg-zinc-800/50 rounded-xl overflow-hidden hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <div className="relative aspect-video">
                  <img
                    src={mass.thumbnail}
                    alt={mass.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-5 h-5 text-zinc-800 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {mass.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {mass.title}
                  </h4>
                  <p className="text-zinc-500 text-sm mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {mass.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
