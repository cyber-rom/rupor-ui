import React, { SVGAttributes } from 'react';

const DownArrowIcon = (props: SVGAttributes<SVGElement>) => (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    {...props}
  >
    <path
      d="M1 1L7 7L13 1"
      stroke="#80838C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

);

export default DownArrowIcon;
