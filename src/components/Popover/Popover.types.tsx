import { HTMLAttributes } from 'react';

export enum VerticalVariants {
  top = 'top',
  center = 'center',
  bottom = 'bottom',
}

export enum HorizontalVariants {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface OriginVariant {
  vertical?: VerticalVariants;
  horizontal?: HorizontalVariants;
}
export interface PopoverConfig {
  anchorOrigin?: OriginVariant;
  transformOrigin?: OriginVariant;
  offsetX?: number;
  offsetY?: number;
}

export interface PopoverWrapperProps {
  top?: number;
  left?: number;
  transitionOrigin?: string;
}
export interface PopoverProps extends HTMLAttributes<HTMLDivElement>, PopoverConfig {
  onClose?: () => void;
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClosePopover: () => void;
}
