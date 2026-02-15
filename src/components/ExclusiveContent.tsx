import { Card, HorizontalScrollSection } from './ui';

import exclusiveContent from '../assets/exclusive/exclusive-content1.png';
import exclusiveContent2 from '../assets/exclusive/exclusive-content2.png';
import exclusiveContent3 from '../assets/exclusive/exclusive-content3.png';

const images = [
  { name: 'BackStage', image: exclusiveContent },
  { name: 'Interviews', image: exclusiveContent2 },
  { name: 'Nike', image: exclusiveContent3 },
  { name: 'BackStage', image: exclusiveContent },
  { name: 'Interviews', image: exclusiveContent2 },
  { name: 'Nike', image: exclusiveContent3 },
];

export function ExclusiveContent() {
  const items = images.map((item, index) => ({
    id: `exclusive-${index}`,
    content: (
      <Card variant="interactive" className="group/card flex-shrink-0">
        <div className="w-[440px] h-[208px] min-w-[440px] min-h-[208px] box-content rounded-lg overflow-hidden relative border border-white/5">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity"
            aria-hidden
          />
        </div>
      </Card>
    ),
  }));

  return (
    <HorizontalScrollSection
      title="Exclusive Content"
      sectionClassName="group relative px-3 sm:px-4 lg:px-8 py-6 sm:py-8 overflow-x-clip"
      items={items}
    />
  );
}
