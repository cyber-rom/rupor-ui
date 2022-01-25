import React, { useEffect } from 'react';
import { StyledOverlay } from './Overlay.style';
import { OverlayProps } from './Overlay.types';

export const Overlay = (props: OverlayProps) => {
  // useEffect Останавливает прокрутку страницы
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <StyledOverlay {...props} />
  );
};
