import React from 'react';

export default function NotFound() {
	return (
		<div className='flex flex-col justify-center items-start mt-32'>
			<h1 className='font-bold text-primary text-3xl md:text-5xl mb-8'>
				404
			</h1>
			<p>This page could not be found.</p>
		</div>
	);
}
