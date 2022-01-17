import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Overlay } from '../Overlay';
import { PopoverWrapper } from './Popover.style';
import {
  PopoverProps, PopoverWrapperProps,
} from './Popover.types';
import { findPosition } from './utils/findPosition';

export const Popover:FC<PopoverProps> = (props) => {
  const {
    onClose = () => {},
    open,
    handleClosePopover = () => {},
    children,
    anchorEl,
    anchorOrigin,
    transformOrigin,
    offsetX,
    offsetY,
    ...htmlDivProps
  } = props;

  const [startTransition, setStartTransition] = useState(false);
  const [coords, setCoords] = useState<PopoverWrapperProps | null>(null);

  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (anchorEl && open) {
      const config = {
        anchorOrigin,
        transformOrigin,
        offsetX,
        offsetY,
      };

      setCoords(findPosition(popoverRef, anchorEl, config));
      setStartTransition(true);
    }
  }, [anchorEl, open]);

  const handleClose = () => {
    if (open && !startTransition) {
      handleClosePopover();
      onClose();
    }
  };

  if (!open) return null;

  return (
    <Overlay transparent onClick={() => setStartTransition(false)}>
      <PopoverWrapper
        ref={popoverRef}
        onClick={(e) => e.stopPropagation()}
        className={startTransition ? 'RuiPopover-animation' : ''}
        onTransitionEnd={handleClose}
        {...htmlDivProps}
        {...coords}
      >
        {children}
      </PopoverWrapper>
    </Overlay>
  );
};
