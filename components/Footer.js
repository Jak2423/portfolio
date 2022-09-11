export default function Footer() {
	return (
		<div className='flex flex-col items-center justify-center absolute left-0 right-0 bottom-0 h-8 mb-4 max-w-3xl mx-auto w-full px-8'>
			<p className='text-xs text-gray-500 font-thin'>
				&copy; {new Date().getFullYear()} Designed & Built 💪 by Jak.
			</p>
		</div>
	);
}
