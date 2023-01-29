const ProjectContainer = ({ name, link, children }) => {
	return (
		<article>
			<div className='my-4 text-base transition duration-300 md:text-xl text-primary hover:translate-x-1'>
				<a href={link} target='_blank' rel='noopener noreferrer'>
					<span># {name}</span>
				</a>
			</div>
			{children}
		</article>
	);
};

export default function Projects() {
	return (
		<div className='mt-4'>
			<h1 className='mb-8 text-xl md:text-2xl text-primary'>Projects</h1>
			<p className='mb-12'>Some Things I’ve Built</p>
			<ProjectContainer name='Botgo' link='https://botgo.vercel.app/'>
				<p>
					Start your journey by exploring courses you could study, be inspired to find the
					perfect course for you.
				</p>
			</ProjectContainer>
			<ProjectContainer name='Aruarian' link='https://aruarian.vercel.app/'>
				<p>Image Gallery with Next.js, Supabase, and Tailwind CSS</p>
			</ProjectContainer>
		</div>
	);
}
