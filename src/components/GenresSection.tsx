import { Button, Card, HorizontalScrollSection } from './ui';

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
  const genreItems = genres.slice(0, 2).map((genre, i) => ({
    id: `genre-${i}`,
    content: <GenreCard genre={genre} />,
  }));
  const adItem = {
    id: 'genre-ad',
    content: (
      <div className="flex-shrink-0 w-[440px] h-[208px] min-w-[440px] min-h-[208px] box-content bg-black rounded-xl overflow-hidden border border-border relative snap-center">
        <img
          src={appleAds}
          alt="Airpods Ads"
          className="w-full h-full object-contain"
        />
      </div>
    ),
  };

  const genreItemsAfter = genres.slice(2).map((genre, i) => ({
    id: `genre-${i + 2}`,
    content: <GenreCard genre={genre} />,
  }));

  const items = [...genreItems, adItem, ...genreItemsAfter];

  return (
    <HorizontalScrollSection
      sectionClassName="px-3 sm:px-4 lg:px-8 py-6 sm:py-8"
      items={items}
      scrollContainerClassName="flex gap-4 pb-4"
      sidebar={
        <>
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
        </>
      }
    />
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
      className={`${genre.color} w-[208px] h-[208px] p-5 aspect-square sm:aspect-[4/3] flex flex-col justify-end group flex-shrink-0`}
    >
      <img
        src={genre.url}
        alt={genre.name}
        className="absolute inset-0 object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
      />
    </Card>
  );
}
