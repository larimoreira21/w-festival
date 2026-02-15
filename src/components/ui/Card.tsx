import { type HTMLAttributes } from 'react';
import { classNames } from '../../helpers/theme';

const variantClasses = {
  interactive:
    'rounded-lg border-2 border-transparent hover:border-accent transition-colors duration-300 cursor-pointer flex-shrink-0 snap-start',
  interactiveDark:
    'rounded-lg overflow-hidden snap-start border-2 border-transparent hover:border-accent transition-colors duration-300 cursor-pointer flex-shrink-0 bg-card-dark group/card',
  sponsor:
    'rounded-lg overflow-hidden border border-border border-2 border-transparent hover:border-accent transition-colors duration-300 flex-shrink-0 scroll-snap-align-start flex flex-col items-center justify-center p-6 bg-card bg-center bg-no-repeat bg-contain',
  genre:
    'rounded-xl overflow-hidden flex-shrink-0 cursor-pointer hover:brightness-110 transition-all snap-center relative',
} as const;

type CardVariant = keyof typeof variantClasses;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export function Card({
  variant = 'interactive',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={classNames(variantClasses[variant], className)}
      {...props}
    />
  );
}
