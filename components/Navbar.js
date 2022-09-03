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
				<Link href='/'>
					<a className='text-3xl cursor-pointer'>&#60;J&#62;</a>
				</Link>
				<nav className='hidden md:inline-block text-primary'>
					<Link href='/'>
						<a className='px-4 border-r border-dotted border-primary hover:underline underline-offset-2'>
							Home
						</a>
					</Link>
					<Link href='/about'>
						<a className='px-4 border-r border-dotted border-primary hover:underline underline-offset-2'>
							About
						</a>
					</Link>
					<Link href='/projects'>
						<a className='px-4 border-r border-dotted border-primary hover:underline underline-offset-2'>
							Projects
						</a>
					</Link>
					<Link href='/contact'>
						<a className='px-4 hover:underline underline-offset-2'>
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
							'absolute bg-primary left-0 w-full transition-all duration-300 ease-out',
						)}
					></span>
					<span
						className={cn(
							isMenuOpen
								? 'top-1/2 w-full h-[2px] -rotate-45'
								: 'absolute bg-primary top-[60%] left-0 w-full h-[0.1rem]',
							'absolute bg-primary left-0 w-full transition-all duration-300 ease-out',
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
				<ul className='w-full relative mx-auto flex flex-col items-start justify-center text-base gap-1'>
					<li className='animate-fade-in-down'>
						<Link href='/'>
							<a className='hover:underline' onClick={toggleMenu}>
								Home
							</a>
						</Link>
					</li>
					<li className='animate-fade-in-down'>
						<Link href='/about'>
							<a className='hover:underline' onClick={toggleMenu}>
								About
							</a>
						</Link>
					</li>
					<li className='animate-fade-in-down'>
						<Link href='/projects'>
							<a className='hover:underline' onClick={toggleMenu}>
								Projects
							</a>
						</Link>
					</li>
					<li className='animate-fade-in-down'>
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
