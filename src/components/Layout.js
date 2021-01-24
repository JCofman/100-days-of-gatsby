import React from 'react';
import { GlobalStyles } from 'twin.macro';
import { Link } from 'gatsby';

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <nav tw='bg-gray-800'>
      <div tw='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div tw='relative flex items-center justify-between h-16'>
          <div tw='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              tw='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-expanded='false'
            >
              <span tw='sr-only'>Open main menu</span>

              <svg
                tw='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>

              <svg
                tw='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div tw='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <Link to='/'>
              <div tw='flex-shrink-0 flex items-center'>
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
                <span tw='text-white block px-3 py-2 rounded-md text-base font-medium'>AudioCore</span>
              </div>
            </Link>
            <div tw='hidden sm:block sm:ml-6'>
              <div tw='flex space-x-4'>
                <Link
                  to='/'
                  tw='text-white block px-3 py-2 rounded-md text-base font-medium'
                  activeStyle={{
                    backgroundColor: 'rgba(17, 24, 39, var(--tw-bg-opacity))',
                  }}
                >
                  Home
                </Link>
                <Link
                  to='/about'
                  tw='text-white block px-3 py-2 rounded-md text-base font-medium'
                  activeStyle={{
                    backgroundColor: 'rgba(17, 24, 39, var(--tw-bg-opacity))',
                  }}
                >
                  About
                </Link>
                <Link
                  to='/locations'
                  tw='text-white block px-3 py-2 rounded-md text-base font-medium'
                  activeStyle={{
                    backgroundColor: 'rgba(17, 24, 39, var(--tw-bg-opacity))',
                  }}
                >
                  Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div tw='hidden sm:hidden'>
        <div tw='px-2 pt-2 pb-3 space-y-1'>
          <Link to='/' tw='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'>
            Home
          </Link>
          <Link to='/about' tw='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'>
            About
          </Link>
          <Link to='/locations' tw='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'>
            Locations
          </Link>
        </div>
      </div>
    </nav>
    <div tw='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'> {children}</div>
  </div>
);

export default Layout;
