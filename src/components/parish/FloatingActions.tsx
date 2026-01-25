import { Heart, CreditCard } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
      <a
        href="#donate"
        className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/30 transition-colors"
        aria-label="Donate"
      >
        <CreditCard className="w-6 h-6" />
      </a>
      <a
        href="#prayer"
        className="w-14 h-14 rounded-full bg-rose-900 hover:bg-rose-800 text-white flex items-center justify-center shadow-lg shadow-rose-900/30 transition-colors"
        aria-label="Prayer Request"
      >
        <Heart className="w-6 h-6" />
      </a>
    </div>
  );
}
