import { type HTMLAttributes } from 'react';
import { classNames } from '../../helpers/theme';

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export function CardBody({ className, ...props }: CardBodyProps) {
  return (
    <div
      className={classNames('p-4 flex flex-col gap-3', className)}
      {...props}
    />
  );
}
