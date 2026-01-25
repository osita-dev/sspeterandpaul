import { useState, useEffect } from "react";
import { Play, BookOpen, Clock, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

interface HeroProps {
  onOpenLivestream: () => void;
  onOpenReadings: () => void;
}

export function Hero({ onOpenLivestream, onOpenReadings }: HeroProps) {
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Next Mass at 6:30 AM
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const nextMass = new Date();
      nextMass.setHours(6, 30, 0, 0);

      if (now > nextMass) {
        nextMass.setDate(nextMass.getDate() + 1);
      }

      const diff = nextMass.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({ hours, minutes, seconds });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="hero" className="relative min-h-screen pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SS Peter & Paul Catholic Church Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950/80 via-rose-900/70 to-zinc-900/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 lg:py-24 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-3xl">
          {/* Date */}
          <p className="text-amber-400 font-medium mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {today}
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to <br />
            <span className="text-amber-400">SS Peter & Paul</span>
            <br />
            Catholic Church
          </h1>

          <p className="text-stone-200 text-lg md:text-xl mb-8 max-w-xl">
            Shomolu – A community of faith, hope, and love.
            Join us in worship and experience God's grace.
          </p>

          {/* Next Service Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
            <div className="flex items-center gap-2 text-amber-400 mb-3">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Next Mass Begins In</span>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <span className="text-4xl font-bold text-white">
                  {String(countdown.hours).padStart(2, "0")}
                </span>
                <p className="text-stone-300 text-sm">Hours</p>
              </div>
              <span className="text-3xl text-white">:</span>
              <div className="text-center">
                <span className="text-4xl font-bold text-white">
                  {String(countdown.minutes).padStart(2, "0")}
                </span>
                <p className="text-stone-300 text-sm">Minutes</p>
              </div>
              <span className="text-3xl text-white">:</span>
              <div className="text-center">
                <span className="text-4xl font-bold text-white">
                  {String(countdown.seconds).padStart(2, "0")}
                </span>
                <p className="text-stone-300 text-sm">Seconds</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenLivestream}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-lg transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Join Today's Mass
            </button>
            <button
              onClick={onOpenReadings}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-lg transition-all border border-white/30"
            >
              <BookOpen className="w-5 h-5" />
              See Today's Readings
            </button>
          </div>
        </div>

        {/* Service Times Quick View */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
          {[
            { day: "Mon - Fri", time: "6:30 AM" },
            { day: "Saturday", time: "6:30 AM & 6:00 PM" },
            { day: "Sunday", time: "6:30, 8:00, 10:00 AM" },
            { day: "Holy Hour", time: "Thursdays 5 PM" },
          ].map((item) => (
            <div key={item.day} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <p className="text-stone-300 text-xs mb-1">{item.day}</p>
              <p className="text-white font-semibold text-sm">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
