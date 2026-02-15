import { Card, CardMedia, HorizontalScrollSection } from './ui';
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
  const artistItems = artists.map((artist, index) => ({
    id: `artist-${index}`,
    content: (
      <Card
        variant="interactive"
        className="w-[208px] group/item flex-shrink-0"
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
    ),
  }));

  const sponsorItem = hasSponsor
    ? [
        {
          id: 'sponsor',
          content: (
            <Card
              variant="sponsor"
              className="w-[440px] h-[288px] flex-shrink-0"
              style={{ backgroundImage: `url(${teslaAds})` }}
            />
          ),
        },
      ]
    : [];

  const items = [...artistItems, ...sponsorItem];

  return (
    <HorizontalScrollSection
      title={title}
      items={items}
      scrollContainerClassName="flex gap-4 pb-2"
    />
  );
}
