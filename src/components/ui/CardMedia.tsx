import { type ImgHTMLAttributes } from 'react';
import { classNames } from '../../helpers/theme';

type CardMediaOverlay = 'gradient' | 'dark' | 'none';

interface CardMediaProps extends ImgHTMLAttributes<HTMLImageElement> {
  overlay?: CardMediaOverlay;
  groupHover?: string;
  hasTitle?: boolean;
}

const overlayClasses: Record<CardMediaOverlay, string> = {
  gradient:
    'absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300',
  dark: 'absolute inset-0 bg-black/20',
  none: '',
};

export function CardMedia({
  overlay = 'gradient',
  groupHover = 'item',
  className,
  hasTitle = false,
  ...imgProps
}: CardMediaProps) {
  const hoverPrefix = groupHover ? `group-hover/${groupHover}:` : '';

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden bg-muted">
      <img
        className={classNames(
          'absolute inset-0 object-cover h-full w-full transition-transform duration-500',
          groupHover && `${hoverPrefix}scale-110`,
          className,
        )}
        {...imgProps}
      />

      {overlay !== 'none' && (
        <div
          className={classNames(
            overlayClasses[overlay],
            overlay === 'gradient' && groupHover && `${hoverPrefix}opacity-100`,
          )}
          aria-hidden
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent pointer-events-none"
        aria-hidden
      />

      {imgProps.alt && hasTitle && (
        <span className="absolute bottom-7 left-0 right-0 pb-4 text-center text-white text-lg font-bold drop-shadow-lg z-10">
          {imgProps.alt}
        </span>
      )}
    </div>
  );
}
