import React from 'react';
import { vars } from '../../styles';

import { createIcon } from '../../utils';

const MicrophoneIcon = createIcon(
  'microphone',
  <svg fill="none">
    <path
      d="M11.9998 20.9986V18.1538M11.9998 18.1538C15.8668 18.1538 19 14.9142 19 10.9194M11.9998 18.1538C8.13383 18.1538 5 14.9142 5 10.9194M11.9998 14.5643C10.037 14.5643 8.44546 12.9207 8.44546 10.8925V6.67417C8.44546 4.64599 10.037 3.00146 11.9998 3.00146C13.9635 3.00146 15.5541 4.64599 15.5541 6.67417V10.8925C15.5541 12.9207 13.9635 14.5643 11.9998 14.5643Z"
      stroke={vars.colorTag}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
);

export default MicrophoneIcon;
