import { getProjects } from '../utils/data';

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
	const projects = getProjects();

	return (
		<div className='mt-4'>
			<h1 className='mb-8 text-xl md:text-2xl text-primary'>Projects</h1>
			<p className='mb-12'>Some Things I’ve Built</p>
			{projects.map((project) => (
				<ProjectContainer name={project.title} link={project.link}>
					<p>{project.description}</p>
				</ProjectContainer>
			))}
		</div>
	);
}
