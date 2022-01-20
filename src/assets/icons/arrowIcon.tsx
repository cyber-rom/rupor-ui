import React from 'react';

const ArrowIcon = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    {...props}
  >
    <path
      d="M1 13L7 7L0.999999 1"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
