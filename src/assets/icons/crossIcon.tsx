import React from 'react';

import { createIcon } from '../../utils';

const CrossIcon = createIcon(
  'cross',
  <svg fill="none">
    <path
      d="M16 8L8 16M8 8L16 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
);
export default CrossIcon;
