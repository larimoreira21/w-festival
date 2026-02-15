import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Card, CardMedia } from './ui';
import image1 from '../assets/artists/demi-lovato.png';
import image2 from '../assets/artists/demi-lovato2.png';
import image3 from '../assets/artists/demi-lovato3.png';

const stages = [
  {
    name: 'Stage Sunset',
    image: image1,
    artist: 'Demi Lovato',
    time: 'dd.mm.aa - 00:00 h',
  },
  {
    name: 'Stage World',
    image: image2,
    artist: 'Demi Lovato',
    time: 'dd.mm.aa - 00:00 h',
  },
  {
    name: 'Stage Favela',
    image: image3,
    artist: 'Demi Lovato',
    time: 'dd.mm.aa - 00:00 h',
  },
  {
    name: 'Stage Sunset 2',
    image: image1,
    artist: 'Demi Lovato',
    time: 'dd.mm.aa - 00:00 h',
  },
  {
    name: 'Stage World 2',
    image: image2,
    artist: 'Demi Lovato',
    time: 'dd.mm.aa - 00:00 h',
  },
  {
    name: 'Stage Favela 2',
    image: image3,
    artist: 'Demi Lovato',
    time: 'dd.mm.aa - 00:00 h',
  },
];

export function LiveSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;

    if (!el) {
      return;
    }

    const { scrollLeft, clientWidth, scrollWidth } = el;

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;

    if (!el) {
      return;
    }

    el.addEventListener('scroll', checkScroll, { passive: true });

    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;

    if (!el) {
      return;
    }

    const { clientWidth, scrollBy } = el;
    const scrollAmount = clientWidth * 0.8;

    scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-5">
        In Live
      </h2>

      <div className="relative group min-w-0">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20
            bg-secondary/40 backdrop-blur-md p-3 rounded-full shadow-xl
            hidden lg:flex items-center justify-center
            opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            hover:bg-secondary/80 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        >
          {stages.map((stage, index) => (
            <Card key={`${stage.name}-${index}`} variant="interactiveDark">
              <div className="relative w-[300px] sm:w-[440px] h-[160px] sm:h-[208px] overflow-hidden">
                <CardMedia
                  src={stage.image}
                  alt={stage.name}
                  overlay="dark"
                  groupHover="card"
                  className="group-hover/card:scale-105"
                />
              </div>

              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-live">
                    {stage.artist}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <h3 className="text-sm font-semibold text-foreground/90">
                    {stage.name}
                  </h3>
                  <span className="text-[10px] text-muted-foreground font-medium">
                    {stage.time}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20
            bg-secondary/40 backdrop-blur-md p-3 rounded-full shadow-xl
            hidden lg:flex items-center justify-center
            opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            hover:bg-secondary/80 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        )}
      </div>
    </section>
  );
}
