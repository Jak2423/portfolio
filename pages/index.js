import { FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

const ExternalLink = ({ href, children }) => (
  <a target='_blank' rel='noopener noreferrer' href={href}>
    {children}
  </a>
);

const projects = [
  {
    name: 'Botgo',
    link: 'https://botgo.vercel.app/',
    description:
      'Start your journey by exploring courses you could study, be inspired to find the perfect course for you.',
  },
];

export default function Home() {
  return (
    <div>
      <div className='mb-10'>
        <h1 className='text-2xl md:text-3xl text-black my-4'>
          👋 Hi, I&apos;m Jak.
        </h1>
        <p>
          Front-End Developer. A self-taught developer with an interest in
          Computer Science.
        </p>
        <p className='flex items-center my-2'>
          Find me on
          <ExternalLink href='https://github.com/Jak2423'>
            <FaGithub className='hover:text-primary align-middle ml-2' />
          </ExternalLink>
          ,
          <ExternalLink href='https://twitter.com/javhln'>
            <FaTwitter className='hover:text-primary align-middle mx-2' />
          </ExternalLink>
          and
          <ExternalLink href='mailto:javhlan0420@gmail.com'>
            <FaEnvelope className='hover:text-primary align-middle ml-2' />
          </ExternalLink>
          .
        </p>
      </div>
      <div>
        <h1 className='text-xl md:text-2xl text-primary my-2'>
          Recent Projects
        </h1>
        <ul>
          {projects.slice(0, 3).map((project, i) => (
            <li key={i}>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                <span className='border-b border-black hover:border-b-2 hover:border-primary'>
                  {project.name}
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
