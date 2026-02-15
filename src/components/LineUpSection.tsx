import { useRef, useEffect } from 'react';
import { InfiniteScroll } from './InfiniteScroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import announcement from '../assets/announcement.png';

interface Artist {
  name: string;
  image: string;
}

interface ArtistRowProps {
  artists: Artist[];
  hasSponsor: boolean;
  title: string;
}

export function LineUpSection({ artists, hasSponsor, title }: ArtistRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.9;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const singleSetWidth = container.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;
    }
  }, []);

  return (
    <section className="relative group px-3 sm:px-4 lg:px-8 py-6 sm:py-8 overflow-hidden">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-4 sm:mb-5">
        {title}
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 w-12 lg:w-16 bg-black/40 hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10 hover:scale-125 transition-transform" />
        </button>

        <InfiniteScroll scrollRef={scrollRef} gap="gap-4">
          {artists.map((artist, index) => (
            <div
              key={`${artist.name}-${index}`}
              className="flex-shrink-0 w-[208px] group/item cursor-pointer scroll-snap-align-start"
            >
              <div className="relative h-[288px] rounded-lg overflow-hidden bg-muted">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="absolute inset-0 object-cover h-full w-full group-hover/item:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}

          {hasSponsor && (
            <div
              className="flex-shrink-0 w-[440px] h-[288px] bg-card rounded-lg overflow-hidden border border-border flex flex-col items-center justify-center p-6 bg-center bg-no-repeat bg-contain scroll-snap-align-start relative"
              style={{ backgroundImage: `url(${announcement})` }}
            ></div>
          )}
        </InfiniteScroll>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 w-12 lg:w-16 bg-black/40 hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10 hover:scale-125 transition-transform" />
        </button>
      </div>
    </section>
  );
}
