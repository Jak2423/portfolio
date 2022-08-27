import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between py-8 hover:text-primary'>
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
          <a className='hidden md:inline-block px-4 hover:underline'>Contact</a>
        </Link>
      </nav>
    </div>
  );
}
