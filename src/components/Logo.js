import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';

const Logo = () => (
  <Link to='/'>
    <AudioCoreLogo />
    <span tw='text-white block px-3 py-2 rounded-md text-base font-medium'>AudioCore</span>
  </Link>
);

const AudioCoreLogo = () => (
  <svg
    tw='h-6 w-6'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='#6366f1'
    aria-hidden='true'
  >
    <path
      tw='h-6 w-6'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
    />
  </svg>
);

export default Logo;
