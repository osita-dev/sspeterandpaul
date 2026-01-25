import { Globe, ExternalLink, Calendar } from "lucide-react";

const churchNews = [
  {
    id: 1,
    title: "Pope Francis Announces 2025 Jubilee Year Theme",
    source: "Vatican News",
    date: "Dec 9, 2024",
    excerpt:
      "The Holy Father has revealed the theme for the upcoming Jubilee Year: 'Pilgrims of Hope,' inviting the faithful to embrace renewal.",
    url: "#",
  },
  {
    id: 2,
    title: "Advent: A Season of Joyful Expectation",
    source: "Catholic Bishops' Conference",
    date: "Dec 7, 2024",
    excerpt:
      "The bishops remind the faithful that Advent is not merely preparation but a celebration of Christ's coming in history, mystery, and majesty.",
    url: "#",
  },
  {
    id: 3,
    title: "Universal Church Celebrates Feast of the Immaculate Conception",
    source: "EWTN",
    date: "Dec 8, 2024",
    excerpt:
      "Catholics worldwide honor Mary's Immaculate Conception, a holy day of obligation in many countries.",
    url: "#",
  },
];

export function ChurchUpdates() {
  return (
    <section id="church-updates" className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            SS Peter & Paul Church
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            This Week in the Church
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Stay connected with news and updates from the Catholic Church worldwide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {churchNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-xl border border-zinc-100 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm text-zinc-500 mb-2">
                    <span className="font-medium text-blue-700">{news.source}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-zinc-800 mb-2 text-lg">
                    {news.title}
                  </h3>
                  <p className="text-zinc-600 text-sm line-clamp-2">{news.excerpt}</p>
                </div>
                <a
                  href={news.url}
                  className="flex-shrink-0 p-2 rounded-lg hover:bg-stone-100 text-zinc-400 hover:text-rose-700 transition-colors"
                  aria-label="Read full article"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
