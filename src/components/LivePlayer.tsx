import { useRef, useState, useCallback, useEffect } from 'react';
import {
  Camera,
  Maximize2,
  Volume2,
  VolumeX,
  Settings,
  Grid2X2,
} from 'lucide-react';

import avrilVideo from '../assets/videos/avril-lavigne.mp4';

const PLAYBACK_SPEEDS = [1, 1.25, 1.5, 1.75, 2] as const;

const LIVE_META_DATA = {
  title: 'Avril Lavigne',
  tags: ['Live', 'Sunset', 'Singer camera'],
} as const;

export function LivePlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  const togglePictureInPicture = useCallback(async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else {
        await video.requestPictureInPicture();
      }
    } catch {
      return;
    }
  }, []);

  const applySpeed = useCallback((speed: number) => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = speed;
    }

    setPlaybackSpeed(speed);
    setShowSpeedMenu(false);
  }, []);

  useEffect(() => {
    if (!showSpeedMenu) {
      return;
    }

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowSpeedMenu(false);
      }
    };

    document.addEventListener('keydown', onEscape);

    return () => {
      document.removeEventListener('keydown', onEscape);
    };
  }, [showSpeedMenu]);

  return (
    <section
      ref={containerRef}
      role="region"
      aria-label="Live video player"
      className="relative w-full aspect-video max-h-[85vh] bg-black overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={avrilVideo}
          className="object-cover w-full h-full"
          playsInline
          muted={isMuted}
          loop
          autoPlay
          onEnded={() => videoRef.current?.play()}
        />
        <div
          className="absolute inset-0 bg-black/20 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none"
          aria-hidden
        />
      </div>

      <div className="absolute top-6 left-6 z-10 flex flex-col gap-0.5 pointer-events-none">
        <h2 className="text-lg font-semibold text-white tracking-tight drop-shadow-md">
          {LIVE_META_DATA.title}
        </h2>
        <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/80 font-medium drop-shadow-sm">
          {LIVE_META_DATA.tags.map((tag, index) => (
            <span key={tag}>
              {index > 0 && <span className="opacity-40 mx-0.5">•</span>}
              {tag}
            </span>
          ))}
        </p>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <button
            type="button"
            className="flex items-center gap-2 !bg-accent hover:!bg-accent-hover !text-white !rounded-full px-4 py-2 text-xs font-medium !border-none shadow-lg transition-colors transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
          >
            <Camera className="w-4 h-4 shrink-0" aria-hidden />
            <span className="whitespace-nowrap">Choose your camera</span>
          </button>
        </div>

        <div className="flex items-center gap-1 pointer-events-auto">
          <button
            type="button"
            onClick={togglePictureInPicture}
            className="!bg-white/10 hover:!bg-white/20 text-white/90 hover:!text-white transition-colors p-2 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Picture in picture"
          >
            <Grid2X2 className="w-4 h-4" aria-hidden />
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="!bg-white/10 hover:!bg-white/20 text-white/90 hover:!text-white transition-colors p-2 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Fullscreen"
          >
            <Maximize2 className="w-4 h-4" aria-hidden />
          </button>

          <button
            type="button"
            onClick={toggleMute}
            className="!bg-white/10 hover:!bg-white/20 text-white/90 hover:!text-white transition-colors p-2 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" aria-hidden />
            ) : (
              <Volume2 className="w-4 h-4" aria-hidden />
            )}
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowSpeedMenu((speedMenu) => !speedMenu)}
              className="!bg-white/10 hover:!bg-white/20 text-white/90 hover:!text-white transition-colors p-2 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Playback speed"
              aria-expanded={showSpeedMenu}
              aria-haspopup="listbox"
            >
              <Settings className="w-4 h-4" aria-hidden />
            </button>

            {showSpeedMenu && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  aria-hidden
                  onClick={() => setShowSpeedMenu(false)}
                />
                <ul
                  role="listbox"
                  aria-label="Playback speed"
                  className="absolute bottom-full right-0 mb-2 py-1 rounded-lg bg-black/80 backdrop-blur-sm border border-white/10 min-w-[100px] z-30"
                >
                  {PLAYBACK_SPEEDS.map((speed) => (
                    <li
                      key={speed}
                      role="option"
                      aria-selected={playbackSpeed === speed}
                    >
                      <button
                        type="button"
                        onClick={() => applySpeed(speed)}
                        className={`w-full text-left px-3 py-1.5 text-xs text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none ${
                          playbackSpeed === speed
                            ? 'bg-primary/30 text-primary-foreground'
                            : ''
                        }`}
                      >
                        {speed}x
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
