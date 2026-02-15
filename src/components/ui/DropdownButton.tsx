import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { classNames } from '../../helpers/theme';

const baseClass =
  'w-full text-left px-3 py-1.5 text-xs text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none';
const isSelectedClass = 'bg-primary/30';

interface DropdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  children?: ReactNode;
  className?: string;
}

export function DropdownButton({
  isSelected = false,
  children,
  className,
  ...props
}: DropdownButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        baseClass,
        isSelected && isSelectedClass,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
