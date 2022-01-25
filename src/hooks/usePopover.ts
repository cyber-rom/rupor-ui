import { MouseEvent, useState } from 'react';

export const usePopover = (id: string) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchor(null);
  };

  return {
    handleOpenPopover,
    handleClosePopover,
    open: !!anchor,
    anchorElementProps: {
      'aria-describedby': id,
    },
    popoverProps: {
      anchorEl: anchor,
      open: !!anchor,
      id,
      handleOpenPopover,
      handleClosePopover,
    },
  };
};
