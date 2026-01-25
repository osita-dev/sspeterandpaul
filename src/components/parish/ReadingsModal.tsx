import { X, BookOpen, ChevronRight } from "lucide-react";

interface ReadingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const todayReadings = {
  date: "Wednesday, December 11, 2024",
  liturgicalDay: "Wednesday of the Second Week of Advent",
  firstReading: {
    reference: "Isaiah 40:25-31",
    text: `"To whom can you compare me, that I should be like?" says the Holy One. Lift up your eyes on high and see: Who created these? He who brings out their host by number, calling them all by name; by the greatness of his might and because he is strong in power, not one is missing.

Why do you say, O Jacob, and speak, O Israel, "My way is hidden from the LORD, and my right is disregarded by my God"? Have you not known? Have you not heard? The LORD is the everlasting God, the Creator of the ends of the earth. He does not faint or grow weary; his understanding is unsearchable.

He gives power to the faint, and to him who has no might he increases strength. Even youths shall faint and be weary, and young men shall fall exhausted; but they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.`,
  },
  psalm: {
    reference: "Psalm 103:1-4, 8, 10",
    response: "Praise the Lord, my soul!",
  },
  gospel: {
    reference: "Matthew 11:28-30",
    text: `At that time Jesus said, "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light."`,
  },
};

export function ReadingsModal({ isOpen, onClose }: ReadingsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl my-8 overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-rose-900 text-white px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">Today's Readings</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <h2 className="text-xl font-bold mt-2">{todayReadings.liturgicalDay}</h2>
          <p className="text-rose-200 text-sm mt-1">{todayReadings.date}</p>
        </div>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto">
          {/* First Reading */}
          <div className="p-6 border-b border-zinc-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-rose-100 text-rose-800 text-sm font-semibold rounded-full">
                First Reading
              </span>
              <span className="text-zinc-500 text-sm">
                {todayReadings.firstReading.reference}
              </span>
            </div>
            <p className="text-zinc-700 leading-relaxed whitespace-pre-line">
              {todayReadings.firstReading.text}
            </p>
          </div>

          {/* Responsorial Psalm */}
          <div className="p-6 bg-amber-50 border-b border-zinc-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full">
                Responsorial Psalm
              </span>
              <span className="text-zinc-500 text-sm">{todayReadings.psalm.reference}</span>
            </div>
            <p className="text-zinc-700 font-medium italic">
              R: {todayReadings.psalm.response}
            </p>
          </div>

          {/* Gospel */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-rose-900 text-white text-sm font-semibold rounded-full">
                Gospel
              </span>
              <span className="text-zinc-500 text-sm">{todayReadings.gospel.reference}</span>
            </div>
            <p className="text-zinc-700 leading-relaxed">{todayReadings.gospel.text}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-zinc-100">
          <a
            href="https://www.usccb.org/bible/readings"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-rose-900 hover:bg-rose-800 text-white font-semibold rounded-lg transition-colors"
          >
            View Full Readings on USCCB
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
