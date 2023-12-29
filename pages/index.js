import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';
import { getProjects } from '../utils/data';

const ExternalLink = ({ href, children }) => (
	<a href={href} target='_blank' rel='noopener noreferrer'>
		{children}
	</a>
);

export default function Home() {
	const projects = getProjects();

	return (
		<div>
			<div className='mb-10'>
				<h1 className='my-4 text-2xl text-black md:text-3xl'>
					👋 Hi,
					<Typewriter
						words={["I'm Javkhlan.", 'Намайг Жавхлан гэдэг.']}
						loop={true}
						cursor
						delaySpeed={5000}
						typeSpeed={100}
						deleteSpeed={100}
						cursorColor='#ff4545'
					/>
				</h1>
				<p>A self-taught developer with an interest in Computer Science.</p>
				<p className='flex items-center my-2'>
					Find me on
					<ExternalLink href='https://github.com/Jak2423'>
						<FaGithub className='ml-2 align-middle hover:text-primary' />
					</ExternalLink>
					,
					<ExternalLink href='https://twitter.com/javhln'>
						<FaXTwitter className='mx-2 align-middle hover:text-primary' />
					</ExternalLink>
					and
					<ExternalLink href='mailto:javhlan0420@gmail.com'>
						<FaEnvelope className='ml-2 align-middle hover:text-primary' />
					</ExternalLink>
					.
				</p>
			</div>
			<div>
				<h1 className='my-2 text-xl md:text-2xl text-primary'>Recent Projects</h1>
				<ul>
					{projects.slice(0, 3).map((project, i) => (
						<li key={i} className='mb-4'>
							<a href={project.link} target='_blank' rel='noopener noreferrer'>
								<span className='border-b border-black hover:border-b-2 hover:border-primary'>
									{project.title}
								</span>
							</a>
							: {project.description}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
