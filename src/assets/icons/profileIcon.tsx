import React from 'react';

const ProfileIcon = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8ZM17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8ZM3 20C3 17.2386 5.23858 15 8 15H16C18.7614 15 21 17.2386 21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 18.3431 17.6569 17 16 17H8C6.34315 17 5 18.3431 5 20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20Z"
      fill="currentColor"
    />
  </svg>

);

export default ProfileIcon;
