import { X, Radio } from "lucide-react";

interface LivestreamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LivestreamModal({ isOpen, onClose }: LivestreamModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 rounded-2xl w-full max-w-4xl overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
              <Radio className="w-4 h-4 animate-pulse" />
              LIVE
            </div>
            <h2 className="text-white font-semibold">Morning Mass - Live Stream</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player */}
        <div className="aspect-video bg-black">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
            title="Live Mass Stream"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer Info */}
        <div className="px-6 py-4 bg-zinc-800/50">
          <p className="text-zinc-400 text-sm">
            <strong className="text-white">SS Peter & Paul Catholic Church</strong> • 
            Morning Mass • Celebrant: Fr. Michael Okonkwo
          </p>
          <p className="text-zinc-500 text-xs mt-1">
            Can't watch now? This Mass will be available in our recordings shortly after.
          </p>
        </div>
      </div>
    </div>
  );
}
