import { BookOpen, Bell, ChevronRight } from "lucide-react";

interface ReadingsBlockProps {
  onSubscribe: () => void;
}

export function ReadingsBlock({ onSubscribe }: ReadingsBlockProps) {
  const todayReading = {
    liturgicalDay: "Wednesday of the Second Week of Advent",
    firstReading: {
      reference: "Isaiah 40:25-31",
      excerpt:
        "Those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    },
    gospel: {
      reference: "Matthew 11:28-30",
      excerpt:
        "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart.",
    },
    reflection:
      "Today's readings remind us that our strength comes from the Lord. In the busyness of Advent preparations, Jesus invites us to find rest in Him. Let us take a moment to surrender our burdens and trust in His gentle guidance.",
    saint: "St. Damasus I, Pope",
  };

  return (
    <section id="readings" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Daily Devotional
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-2">
              Today's Mass Readings
            </h2>
            <p className="text-amber-700 font-medium">{todayReading.liturgicalDay}</p>
            <p className="text-zinc-500 text-sm mt-1">
              Memorial of {todayReading.saint}
            </p>
          </div>

          {/* Readings Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* First Reading */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-rose-900 text-white text-xs font-semibold rounded">
                  First Reading
                </span>
                <span className="text-zinc-500 text-sm">{todayReading.firstReading.reference}</span>
              </div>
              <p className="text-zinc-700 italic leading-relaxed">
                "{todayReading.firstReading.excerpt}"
              </p>
            </div>

            {/* Gospel */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-amber-600 text-white text-xs font-semibold rounded">
                  Gospel
                </span>
                <span className="text-zinc-500 text-sm">{todayReading.gospel.reference}</span>
              </div>
              <p className="text-zinc-700 italic leading-relaxed">
                "{todayReading.gospel.excerpt}"
              </p>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-gradient-to-br from-rose-900 to-rose-800 rounded-2xl p-8 text-white mb-8">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="text-amber-400">✝</span> Today's Reflection
            </h3>
            <p className="leading-relaxed text-rose-100">{todayReading.reflection}</p>
          </div>

          {/* Subscribe CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-stone-50 rounded-xl p-6 border border-stone-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                <Bell className="w-6 h-6 text-rose-700" />
              </div>
              <div>
                <p className="font-semibold text-zinc-800">Never Miss Daily Readings</p>
                <p className="text-zinc-500 text-sm">Get readings & reflections in your inbox</p>
              </div>
            </div>
            <button
              onClick={onSubscribe}
              className="flex items-center gap-2 px-6 py-3 bg-rose-900 hover:bg-rose-800 text-white font-semibold rounded-lg transition-colors"
            >
              Subscribe
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
