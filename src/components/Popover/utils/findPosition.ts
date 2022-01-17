import { HorizontalVariants, PopoverConfig, VerticalVariants } from '../Popover.types';

export function findPosition(
  popoverRef: React.MutableRefObject<HTMLDivElement | null>,
  anchor: HTMLElement,
  config: PopoverConfig,
) {
  const {
    x, y, height, width,
  } = anchor.getBoundingClientRect();

  const {
    height: popoverHeight, width: popoverWidth,
  } = popoverRef.current?.getBoundingClientRect() || { height: 0, width: 0 };

  const {
    anchorOrigin,
    transformOrigin,
    offsetX = 0,
    offsetY = 0,
  } = config;

  let top = 0 + offsetY;
  let left = 0 + offsetX;
  let transitionOrigin = '';

  switch (anchorOrigin?.horizontal) {
    case HorizontalVariants.left:
      left += x;
      break;
    case HorizontalVariants.center:
      left += x + width / 2;
      break;
    case HorizontalVariants.right:
      left += x + width;
      break;
    default:
      left += x + width;
      break;
  }

  switch (anchorOrigin?.vertical) {
    case VerticalVariants.bottom:
      top += y + height;
      break;
    case VerticalVariants.center:
      top += y + height / 2;
      break;
    case VerticalVariants.top:
      top += y;
      break;
    default:
      top += y + height;
      break;
  }

  switch (transformOrigin?.horizontal) {
    case HorizontalVariants.left:
      transitionOrigin += 'left ';
      break;
    case HorizontalVariants.center:
      left -= (popoverWidth * 10) / 2;
      break;
    case HorizontalVariants.right:
      left -= (popoverWidth * 10);
      transitionOrigin += 'right ';
      break;
    default:
      transitionOrigin += 'left ';
      break;
  }

  switch (transformOrigin?.vertical) {
    case VerticalVariants.bottom:
      top -= popoverHeight * 10;
      transitionOrigin += 'bottom';
      break;
    case VerticalVariants.center:
      top -= (popoverHeight * 10) / 2;
      break;
    case VerticalVariants.top:
      transitionOrigin += 'top';
      break;
    default:
      transitionOrigin += 'top';
      break;
  }

  return { top, left, transitionOrigin };
}
