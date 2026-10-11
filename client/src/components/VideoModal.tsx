import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play, X } from 'lucide-react';
import { PORTFOLIO_CATEGORY_LABELS, PortfolioItem } from '@/data';

interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export function VideoModal({ item, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!item) return;
    setIsPlaying(false);

    const video = videoRef.current as (HTMLVideoElement & { webkitDisplayingFullscreen?: boolean }) | null;
    const onFullscreenChange = () => {
      if (!video) return;

      const fullscreenElement = document.fullscreenElement;
      const isFullscreen =
        fullscreenElement === video ||
        Boolean(fullscreenElement?.contains(video)) ||
        video.webkitDisplayingFullscreen === true;
      const nextSource = isFullscreen ? item.highVideoUrl : item.lowVideoUrl;

      if (video.getAttribute('src') === nextSource) return;

      const playbackPosition = video.currentTime;
      const wasPlaying = !video.paused && !video.ended;
      const restorePlayback = () => {
        if (Number.isFinite(playbackPosition) && Number.isFinite(video.duration)) {
          video.currentTime = Math.min(playbackPosition, video.duration);
        }
        if (wasPlaying) void video.play().catch(() => undefined);
      };

      video.addEventListener('loadedmetadata', restorePlayback, { once: true });
      video.src = nextSource;
      video.load();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('fullscreenchange', onFullscreenChange);
    video?.addEventListener('webkitbeginfullscreen', onFullscreenChange);
    video?.addEventListener('webkitendfullscreen', onFullscreenChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      video?.removeEventListener('webkitbeginfullscreen', onFullscreenChange);
      video?.removeEventListener('webkitendfullscreen', onFullscreenChange);
    };
  }, [item, onClose]);

  if (!item) return null;

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-video-title"
      onClick={onClose}
    >
      <div
        className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-400 text-black uppercase tracking-wider">
              {item.categories.map(category => PORTFOLIO_CATEGORY_LABELS[category]).join(' • ')}
            </span>
            <h3 id="portfolio-video-title" className="text-xl sm:text-2xl font-bold text-white mt-2 font-display">
              {item.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">{item.location} • {item.year}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Uždaryti vaizdo grotuvą"
            className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video bg-black overflow-hidden">
          <video
            ref={videoRef}
            src={item.lowVideoUrl}
            className="w-full h-full object-contain"
            controls
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            muted
            playsInline
            preload="none"
            poster={item.thumbnail}
            aria-label={item.title}
            onContextMenu={(event) => event.preventDefault()}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            Jūsų naršyklė nepalaiko HTML5 vaizdo įrašų.
          </video>

          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? 'Pristabdyti vaizdo įrašą' : 'Leisti vaizdo įrašą'}
            className={`absolute inset-0 m-auto w-20 h-20 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl shadow-amber-400/50 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 transition-all ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            {isPlaying ? <Pause className="w-8 h-8 fill-black" /> : <Play className="w-8 h-8 fill-black translate-x-0.5" />}
          </button>
        </div>

        <div className="p-6 bg-zinc-900/60 border-t border-zinc-800">
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
            {item.stats.map((s, idx) => (
              <div key={idx}>
                <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">{s.label}</span>
                <span className="text-white font-semibold text-sm text-amber-400">{s.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {item.tags.map((t, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 rounded bg-zinc-800 text-zinc-300">
                  #{t}
                </span>
              ))}
            </div>

            <a
              href="/kontaktai#poreikiu-vedlys"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black shadow transition-all"
            >
              Užsakyti panašų skrydį
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
