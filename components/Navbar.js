import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className='flex items-center justify-between py-4 hover:text-primary'>
        <Link href='/'>
          <a className='text-3xl cursor-pointer'>&#60;J&#62;</a>
        </Link>
        <nav className='text-primary'>
          <Link href='/'>
            <a className='hidden md:inline-block px-4 border-r border-dotted border-primary hover:underline'>
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a className='hidden md:inline-block px-4 border-r border-dotted border-primary hover:underline'>
              About
            </a>
          </Link>
          <Link href='/projects'>
            <a className='hidden md:inline-block px-4 border-r border-dotted border-primary hover:underline'>
              Projects
            </a>
          </Link>
          <Link href='/contact'>
            <a className='hidden md:inline-block px-4 hover:underline'>
              Contact
            </a>
          </Link>
        </nav>
        <button
          className='visible md:hidden cursor-pointer absolute w-6 h-6 right-6'
          aria-label='Toggle menu'
          type='button'
          onClick={toggleMenu}
        >
          <span
            className={cn(
              isMenuOpen
                ? 'top-1/2 w-full h-[2px] -rotate-[135deg]'
                : 'absolute bg-primary top-1/4 left-0 w-full h-[0.1rem]',
              'absolute bg-primary left-0 w-full transition-all duration-200',
            )}
          ></span>
          <span
            className={cn(
              isMenuOpen
                ? 'top-1/2 w-full h-[2px] -rotate-45'
                : 'absolute bg-primary top-[60%] left-0 w-full h-[0.1rem]',
              'absolute bg-primary left-0 w-full transition-all duration-200',
            )}
          ></span>
        </button>
      </div>
      <nav
        className={cn(
          isMenuOpen ? 'visible' : 'hidden',
          'md:hidden w-full top-0 text-primary',
        )}
      >
        <ul className='flex flex-col mx-auto items-start justify-center'>
          <li>
            <Link href='/'>
              <a className='hover:underline' onClick={toggleMenu}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className='hover:underline' onClick={toggleMenu}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a className='hover:underline' onClick={toggleMenu}>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className='hover:underline' onClick={toggleMenu}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
