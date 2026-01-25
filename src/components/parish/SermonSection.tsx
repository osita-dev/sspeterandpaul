import { useState } from "react";
import { Play, Pause, Download, FileText, Clock, Calendar, Volume2 } from "lucide-react";

const latestSermon = {
  title: "Finding Rest in Christ This Advent",
  preacher: "Fr. Michael Okonkwo",
  date: "December 8, 2024",
  duration: "18:45",
  scripture: "Matthew 11:28-30",
  summary:
    "In the midst of Advent preparations, Jesus extends a timeless invitation: 'Come to me, all you who are weary.' Father Michael reflects on how we can find true rest not in the absence of activity, but in the presence of Christ. He challenges us to examine what burdens we're carrying that Jesus never asked us to bear, and invites us to exchange our heavy yokes for His gentle guidance.",
  keyPoints: [
    "Rest is not idleness but alignment with God's will",
    "The yoke of Christ is light because He carries it with us",
    "Advent is a season of joyful anticipation, not anxious preparation",
  ],
  audioUrl: "#",
  transcriptUrl: "#",
};

export function SermonSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  return (
    <section id="sermons" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            <Volume2 className="w-4 h-4" />
            Latest Homily
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            Sermon Notes & Audio
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Missed a homily? Catch up on recent teachings from our parish priests.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl border border-amber-100 overflow-hidden">
            {/* Header */}
            <div className="bg-rose-900 text-white p-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-rose-200 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {latestSermon.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {latestSermon.duration}
                </span>
                <span className="px-2 py-0.5 bg-white/20 rounded text-xs">
                  {latestSermon.scripture}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{latestSermon.title}</h3>
              <p className="text-rose-200">by {latestSermon.preacher}</p>
            </div>

            {/* Audio Player */}
            <div className="p-6 border-b border-amber-100">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-rose-900 hover:bg-rose-800 text-white flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" />
                  )}
                </button>
                <div className="flex-1">
                  <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-zinc-500">
                    <span>6:32</span>
                    <span>{latestSermon.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary & Key Points */}
            <div className="p-6">
              <h4 className="font-semibold text-zinc-800 mb-3">Summary</h4>
              <p className="text-zinc-600 leading-relaxed mb-6">
                {latestSermon.summary}
              </p>

              <h4 className="font-semibold text-zinc-800 mb-3">Key Points</h4>
              <ul className="space-y-2 mb-6">
                {latestSermon.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-zinc-600">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {idx + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={latestSermon.audioUrl}
                  className="flex items-center gap-2 px-4 py-2 bg-rose-900 hover:bg-rose-800 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Audio
                </a>
                <a
                  href={latestSermon.transcriptUrl}
                  className="flex items-center gap-2 px-4 py-2 border border-zinc-200 hover:bg-stone-50 text-zinc-700 rounded-lg text-sm font-medium transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Download Transcript
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
