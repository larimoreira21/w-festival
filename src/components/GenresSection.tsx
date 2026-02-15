import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button, Card } from './ui';

import appleAds from '../assets/ads/airpods.png';
import pop from '../assets/genres/genre-pop.png';
import rock from '../assets/genres/genre-rock.png';
import funk from '../assets/genres/genre-funk.png';

const genres = [
  { name: 'Rock', color: 'bg-blue-800', url: rock },
  { name: 'Pop', color: 'bg-green-800', url: pop },
  { name: 'Funk', color: 'bg-purple-900', url: funk },
  { name: 'Rock', color: 'bg-blue-800', url: rock },
  { name: 'Pop', color: 'bg-green-800', url: pop },
  { name: 'Funk', color: 'bg-purple-900', url: funk },
];

export function GenresSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-3 sm:px-4 lg:px-8 py-6 sm:py-8 flex flex-col lg:flex-row gap-6">
      <div className="flex-shrink-0 w-full lg:w-48 flex flex-col py-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
            Festival for you
          </h2>
          <p className="text-sm mt-3">
            Explore your favorite genres and discover new rhythms to love!
          </p>
        </div>
        <Button variant="primaryCompact" className="mt-4">
          See all
        </Button>
      </div>

      <div className="relative flex-1 min-w-0 group">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        >
          {genres.slice(0, 2).map((genre) => (
            <GenreCard key={genre.name} genre={genre} />
          ))}

          <div className="flex-shrink-0 w-[440px] h-[208px] min-w-[440px] min-h-[208px] box-content bg-black rounded-xl overflow-hidden border border-border relative snap-center">
            <img
              src={appleAds}
              alt="Airpods Ads"
              className="w-full h-full object-contain"
            />
          </div>

          {genres.slice(2).map((genre) => (
            <GenreCard key={genre.name} genre={genre} />
          ))}
        </div>

        <Button
          variant="scrollArrow"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          icon={<ChevronLeft className="w-5 h-5" />}
        />
        <Button
          variant="scrollArrowRight"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          icon={<ChevronRight className="w-5 h-5" />}
        />
      </div>
    </section>
  );
}

function GenreCard({
  genre,
}: {
  genre: { name: string; color: string; url: string };
}) {
  return (
    <Card
      variant="genre"
      className={`${genre.color} w-[208px] h-[208px] p-5 aspect-square sm:aspect-[4/3] flex flex-col justify-end group`}
    >
      <img
        src={genre.url}
        alt={genre.name}
        className="absolute inset-0 object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
      />
    </Card>
  );
}
