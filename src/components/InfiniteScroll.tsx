import type { ReactNode, UIEvent } from 'react';

interface InfiniteScrollProps {
  children: ReactNode;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  gap?: string;
}

export function InfiniteScroll({
  children,
  scrollRef,
  gap = 'gap-4',
}: InfiniteScrollProps) {
  const handleInfiniteScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const { scrollLeft, scrollWidth } = container;

    const singleSetWidth = scrollWidth / 3;

    if (scrollLeft > singleSetWidth * 1.5) {
      container.scrollLeft = scrollLeft - singleSetWidth;
    } else if (scrollLeft < singleSetWidth * 0.5) {
      container.scrollLeft = scrollLeft + singleSetWidth;
    }
  };

  return (
    <div
      ref={scrollRef}
      onScroll={handleInfiniteScroll}
      className={`flex ${gap} overflow-x-auto scrollbar-hide pb-2 w-full max-w-full`}
      style={{ scrollSnapType: 'x proximity' }}
    >
      {[...Array(3)].map((_, i) => (
        <div key={i} className={`flex ${gap} flex-shrink-0`}>
          {children}
        </div>
      ))}
    </div>
  );
}
