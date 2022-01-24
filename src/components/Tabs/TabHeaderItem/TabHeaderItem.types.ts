import { HTMLAttributes } from 'react';

export interface ITabHeaderItemProps {
  text: string,
  selected?: boolean,
  onClick: () => void
}

export interface TabHeaderItemContentDivType extends HTMLAttributes<HTMLDivElement> {
  isSelected?: boolean
}
