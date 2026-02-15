import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) {
      return;
    }
    const { scrollLeft, clientWidth, scrollWidth } = el;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;

    if (!el) {
      return;
    }

    el.addEventListener('scroll', checkScroll, { passive: true });
    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      observer.disconnect();
    };
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;

    if (!el) {
      return;
    }

    const { clientWidth } = el;

    const amount =
      direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="group/section relative px-3 sm:px-4 lg:px-8 py-6 sm:py-8 overflow-hidden">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-4 sm:mb-5">
        Exclusive Content
      </h2>

      <div className="relative flex items-center">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-40 w-12 lg:w-16 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10 transition-transform hover:scale-125" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {images.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group/card cursor-pointer flex-shrink-0 snap-start rounded-lg border-2 border-transparent hover:border-accent transition-colors duration-300"
            >
              <div className="w-[440px] h-[208px] min-w-[440px] min-h-[208px] box-content rounded-lg overflow-hidden relative border border-white/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-40 w-12 lg:w-16 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10 transition-transform hover:scale-125" />
          </button>
        )}
      </div>
    </section>
  );
}
