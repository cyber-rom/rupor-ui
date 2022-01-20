import React from 'react';

import { createIcon } from '../../utils';

const ExclamationMarkIcon = createIcon(
  'exclamation',
  <svg viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 4C8.54953 4 8.99502 4.44772 8.99502 5L9 8C9 8.55228 8.55451 9 8.00498 9C7.45544 9 7.00995 8.55228 7.00995 8L7.00497 5C7.00497 4.44772 7.45046 4 8 4ZM7 11C7 10.4477 7.44549 10 7.99502 10H8.00498C8.55451 10 9 10.4477 9 11C9 11.5523 8.55451 12 8.00498 12H7.99502C7.44549 12 7 11.5523 7 11Z"
      fill="currentColor"
    />
    <rect
      x="0.5"
      y="0.5"
      width="15"
      height="15"
      rx="7.5"
      stroke="currentColor"
    />
  </svg>,
);
export default ExclamationMarkIcon;
