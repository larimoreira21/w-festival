import { useRef, useState, useCallback, useEffect } from 'react';
import {
  Camera,
  Maximize2,
  Volume2,
  VolumeX,
  Settings,
  Grid2X2,
} from 'lucide-react';

import { Button, DropdownButton } from './ui';

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
          <Button
            variant="primary"
            icon={<Camera className="shrink-0" aria-hidden />}
          >
            Choose your camera
          </Button>
        </div>

        <div className="flex items-center gap-1 pointer-events-auto">
          <Button
            variant="ghost"
            onClick={togglePictureInPicture}
            aria-label="Picture in picture"
            icon={<Grid2X2 aria-hidden />}
          />

          <Button
            variant="ghost"
            onClick={toggleFullscreen}
            aria-label="Fullscreen"
            icon={<Maximize2 aria-hidden />}
          />

          <Button
            variant="ghost"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            icon={isMuted ? <VolumeX aria-hidden /> : <Volume2 aria-hidden />}
          />

          <div className="relative">
            <Button
              variant="ghost"
              onClick={() => setShowSpeedMenu((speedMenu) => !speedMenu)}
              aria-label="Playback speed"
              aria-expanded={showSpeedMenu}
              aria-haspopup="listbox"
              icon={<Settings aria-hidden />}
            />

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
                      <DropdownButton
                        isSelected={playbackSpeed === speed}
                        onClick={() => applySpeed(speed)}
                      >
                        {speed}x
                      </DropdownButton>
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
