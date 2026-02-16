import { Card, HorizontalScrollSection } from '@/components/ui';

import exclusiveContent from '@/assets/exclusive/exclusive-content1.jpg';
import exclusiveContent2 from '@/assets/exclusive/exclusive-content2.jpg';
import exclusiveContent3 from '@/assets/exclusive/exclusive-content3.png';

const images = [
  {
    name: 'BackStage',
    description: 'Festival',
    image: exclusiveContent,
    hasTitle: true,
  },
  {
    name: 'Interviews',
    description: 'Festival',
    image: exclusiveContent2,
    hasTitle: true,
  },
  { name: 'Nike', image: exclusiveContent3, hasTitle: false },
  {
    name: 'BackStage',
    description: 'Festival',
    image: exclusiveContent,
    hasTitle: true,
  },
  {
    name: 'Interviews',
    description: 'Festival',
    image: exclusiveContent2,
    hasTitle: true,
  },
  {
    name: 'Nike',
    description: 'Nike',
    image: exclusiveContent3,
    hasTitle: false,
  },
];

export function ExclusiveContent() {
  const items = images.map((item, index) => ({
    id: `exclusive-${index}`,
    content: (
      <Card variant="interactive" className="group/card flex-shrink-0">
        <div className="w-[410px] md:w-[440px] h-[208px] min-w-[410px] md:min-w-[440px] min-h-[208px] box-content rounded-lg overflow-hidden relative border border-white/5">
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pointer-events-none"
            aria-hidden
          />

          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
          />

          {item.name && item.hasTitle && (
            <div>
              <span className="absolute bottom-10 left-0 left-5 pb-4 text-center text-white text-3xl  font-bold drop-shadow-lg z-10">
                {item.name}
              </span>

              <span className="absolute bottom-3 left-0 left-5 pb-4 text-center text-gray-400 text-xl font-medium drop-shadow-lg z-10">
                {item.description}
              </span>
            </div>
          )}

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
      sectionClassName="group relative pl-3 sm:pl-4 lg:pl-8 py-6 sm:py-8 overflow-x-clip"
      items={items}
    />
  );
}
