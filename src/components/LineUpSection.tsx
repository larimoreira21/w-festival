import { useRef, useEffect } from 'react';
import { InfiniteScroll } from './InfiniteScroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Card, CardMedia } from './ui';
import teslaAds from '../assets/ads/tesla.png';

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
            <Card
              key={`${artist.name}-${index}`}
              variant="interactive"
              className="w-[208px] group/item scroll-snap-align-start"
            >
              <div className="h-[288px]">
                <CardMedia
                  src={artist.image}
                  alt={artist.name}
                  overlay="gradient"
                  groupHover="item"
                />
              </div>
            </Card>
          ))}

          {hasSponsor && (
            <Card
              variant="sponsor"
              className="w-[440px] h-[288px]"
              style={{ backgroundImage: `url(${teslaAds})` }}
            />
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
