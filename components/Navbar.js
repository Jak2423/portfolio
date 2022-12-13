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
			<div className='flex items-center justify-between py-4 hover:text-primary transition-all duration-200'>
				<Link href='/' className='text-3xl cursor-pointer'>
					&#60;J&#62;
				</Link>
				<nav className='hidden md:inline-block text-primary'>
					<Link href='/' className='px-4 border-r border-dotted border-primary hover:underline underline-offset-2'>
						Home
					</Link>
					<Link href='/about' className='px-4 border-r border-dotted border-primary hover:underline underline-offset-2'>
						About
					</Link>
					<Link href='/projects' className='px-4 border-r border-dotted border-primary hover:underline underline-offset-2'>
						Projects
					</Link>
					<Link href='/contact' className='px-4 border-r border-dotted border-primary hover:underline underline-offset-2'>
						Contact
					</Link>
				</nav>
				<button className='visible md:hidden cursor-pointer absolute w-6 h-6 right-6' aria-label='Toggle menu' type='button' onClick={toggleMenu}>
					<span
						className={cn(
							isMenuOpen ? 'top-1/2 w-full h-[2px] -rotate-[135deg]' : 'absolute bg-primary top-1/4 left-0 w-full h-[0.1rem]',
							'absolute bg-primary left-0 w-full transition-all duration-300 ease-out',
						)}
					></span>
					<span
						className={cn(
							isMenuOpen ? 'top-1/2 w-full h-[2px] -rotate-45' : 'absolute bg-primary top-[60%] left-0 w-full h-[0.1rem]',
							'absolute bg-primary left-0 w-full transition-all duration-300 ease-out',
						)}
					></span>
				</button>
			</div>
			<nav className={cn(isMenuOpen ? 'visible' : 'hidden', 'md:hidden w-full top-0 text-primary')}>
				<ul className='w-full relative mx-auto flex flex-col items-start justify-center text-base gap-1'>
					<li className='animate-fade-in-down'>
						<Link href='/' className='hover:underline' onClick={toggleMenu}>
							Home
						</Link>
					</li>
					<li className='animate-fade-in-down'>
						<Link href='/about' className='hover:underline' onClick={toggleMenu}>
							About
						</Link>
					</li>
					<li className='animate-fade-in-down'>
						<Link href='/projects' className='hover:underline' onClick={toggleMenu}>
							Projects
						</Link>
					</li>
					<li className='animate-fade-in-down'>
						<Link href='/contact' className='hover:underline' onClick={toggleMenu}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
