import { useRef, type ReactNode } from 'react';
import {
  ScrollMenu,
  type publicApiType,
} from 'react-horizontal-scrolling-menu';

function ScrollMenuItem({
  itemId: _itemId,
  children,
}: {
  itemId: string;
  children: ReactNode;
}) {
  return <>{children}</>;
}

export interface HorizontalScrollItem {
  id: string;
  content: ReactNode;
}

interface HorizontalScrollSectionProps {
  title?: string;
  titleVariant?: 'default' | 'compact';
  sidebar?: ReactNode;
  items: HorizontalScrollItem[];
  loop?: boolean;
  sectionClassName?: string;
  scrollContainerClassName?: string;
}

const titleClass = {
  default:
    'text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-4 sm:mb-5',
  compact: 'text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-5',
};

function EmptyArrow(_props: Record<string, unknown>) {
  return null;
}

function useMouseDrag() {
  const stateRef = useRef({
    isDown: false,
    startX: 0,
    startScrollLeft: 0,
  });

  const onMouseDown = (api: publicApiType) =>
    ((e: React.MouseEvent) => {
      const el = api.scrollContainer.current;
      if (!el) return;
      stateRef.current = {
        isDown: true,
        startX: e.clientX,
        startScrollLeft: el.scrollLeft,
      };
    }) as React.MouseEventHandler;

  const onMouseMove = (api: publicApiType) =>
    ((e: React.MouseEvent) => {
      if (!stateRef.current.isDown) return;
      const el = api.scrollContainer.current;
      if (!el) return;
      el.scrollLeft =
        stateRef.current.startScrollLeft -
        (e.clientX - stateRef.current.startX);
    }) as React.MouseEventHandler;

  const onMouseUp = () =>
    ((_e: React.MouseEvent) => {
      stateRef.current.isDown = false;
    }) as React.MouseEventHandler;

  const onMouseLeave = () =>
    ((_e: React.MouseEvent) => {
      stateRef.current.isDown = false;
    }) as React.MouseEventHandler;

  return { onMouseDown, onMouseMove, onMouseUp, onMouseLeave };
}

export function HorizontalScrollSection({
  title = '',
  titleVariant = 'default',
  sidebar,
  items,
  loop = true,
  sectionClassName,
  scrollContainerClassName = 'flex gap-4',
}: HorizontalScrollSectionProps) {
  const sectionClassNameResolved =
    sectionClassName ??
    'relative px-3 sm:px-4 lg:px-8 py-6 sm:py-8 overflow-x-clip';

  const mouseDrag = useMouseDrag();

  const displayItems: HorizontalScrollItem[] =
    loop && items.length > 0
      ? [...items, ...items].map((item, i) => ({
          ...item,
          id: `${item.id}-${i >= items.length ? 1 : 0}`,
        }))
      : items;

  const handleScroll = loop
    ? (api: publicApiType, _ev: React.UIEvent) => {
        const el = api.scrollContainer.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        const half = scrollWidth / 2;
        if (scrollLeft >= half - 1) {
          el.scrollLeft = scrollLeft - half;
        } else if (scrollLeft <= 1 && scrollWidth > clientWidth) {
          el.scrollLeft = half - (1 - scrollLeft);
        }
      }
    : undefined;

  const scrollContent = (
    <ScrollMenu
      LeftArrow={EmptyArrow}
      RightArrow={EmptyArrow}
      wrapperClassName="min-w-0 w-full"
      scrollContainerClassName={`scrollbar-hide overflow-x-auto overflow-y-hidden snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none ${scrollContainerClassName}`}
      itemClassName="snap-align-start"
      onMouseDown={mouseDrag.onMouseDown}
      onMouseMove={mouseDrag.onMouseMove}
      onMouseUp={mouseDrag.onMouseUp}
      onMouseLeave={mouseDrag.onMouseLeave}
      onScroll={handleScroll}
    >
      {displayItems.map(({ id, content }) => (
        <ScrollMenuItem itemId={id} key={id}>
          {content}
        </ScrollMenuItem>
      ))}
    </ScrollMenu>
  );

  if (sidebar !== undefined) {
    return (
      <section className={sectionClassNameResolved}>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-shrink-0 w-full lg:w-48 flex flex-col py-2">
            {sidebar}
          </div>
          <div className="relative flex-1 min-w-0 overflow-hidden">
            {scrollContent}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={sectionClassNameResolved}>
      {title ? <h2 className={titleClass[titleVariant]}>{title}</h2> : null}
      <div className="relative flex flex-1 items-center min-w-0 overflow-hidden">
        {scrollContent}
      </div>
    </section>
  );
}
