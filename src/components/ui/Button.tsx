import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { classNames } from '../../helpers/theme';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'flex items-center justify-center gap-2 !bg-accent hover:!bg-accent-hover !text-white !rounded-full px-4 py-2 text-xs font-medium !border-none shadow-lg transition-colors transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black',
  primaryCompact:
    'flex items-center justify-center gap-2 w-[96px] h-[32px] !bg-accent hover:!bg-accent-hover !text-white !rounded-full text-xs font-medium !border-none shadow-lg transition-colors transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black',
  ghost:
    '!bg-white/10 hover:!bg-white/20 text-white/90 hover:!text-white transition-colors p-2 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50',
};

type ButtonVariant = 'primary' | 'primaryCompact' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconRight?: ReactNode;
  brandColor?: string;
  children?: ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  icon,
  iconRight,
  brandColor,
  children,
  className,
  style,
  ...props
}: ButtonProps) {
  const baseClass = variantClasses[variant];
  const mergedStyle = brandColor
    ? { ...style, backgroundColor: brandColor }
    : style;

  return (
    <button
      type="button"
      className={classNames(baseClass, className)}
      style={mergedStyle}
      {...props}
    >
      {icon && <span className="shrink-0 [&>svg]:w-4 [&>svg]:h-4">{icon}</span>}

      {children && (
        <span
          className={
            variant === 'primary' || variant === 'primaryCompact'
              ? 'whitespace-nowrap'
              : undefined
          }
        >
          {children}
        </span>
      )}

      {iconRight && (
        <span className="shrink-0 [&>svg]:w-3 [&>svg]:h-3">{iconRight}</span>
      )}
    </button>
  );
}
