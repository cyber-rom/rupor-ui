import { HTMLAttributes } from 'react';

export enum PaperVariants {
  outlined = 'outlined',
}

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: number;
  square?: boolean;
  variant?: PaperVariants;
}
