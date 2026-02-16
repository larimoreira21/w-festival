import { Card, CardMedia, HorizontalScrollSection } from './ui';

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
  const items = stages.map((stage, index) => ({
    id: `live-${index}`,
    content: (
      <Card variant="interactiveDark" className="flex-shrink-0">
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
    ),
  }));

  return (
    <HorizontalScrollSection
      title="In Live"
      titleVariant="compact"
      sectionClassName="pl-3 sm:pl-4 lg:pl-8 py-6 sm:py-8"
      items={items}
      scrollContainerClassName="flex gap-4 pb-4"
    />
  );
}
