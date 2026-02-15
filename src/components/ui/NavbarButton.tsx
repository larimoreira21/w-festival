import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { classNames } from '../../helpers/theme';

const variantClasses = {
  nav: 'px-3 py-1.5 text-sm font-medium text-white flex items-center gap-1 hover:text-orange-500 transition-colors focus:outline-none',
  navIcon: 'p-2 text-white focus:outline-none',
  menuItem:
    'text-white hover:text-primary transition-colors justify-start focus:outline-none',
} as const;

type NavbarButtonVariant = keyof typeof variantClasses;

interface NavbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: NavbarButtonVariant;
  icon?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function NavbarButton({
  variant = 'nav',
  icon,
  iconRight,
  children,
  className,
  ...props
}: NavbarButtonProps) {
  const baseClass = variantClasses[variant];

  return (
    <button
      type="button"
      className={classNames(baseClass, className)}
      {...props}
    >
      {icon && <span className="shrink-0 [&>svg]:w-4 [&>svg]:h-4">{icon}</span>}

      {children && <span>{children}</span>}

      {iconRight && (
        <span className="shrink-0 [&>svg]:w-3 [&>svg]:h-3">{iconRight}</span>
      )}
    </button>
  );
}
