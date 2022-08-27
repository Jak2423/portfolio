const ProjectContainer = ({ name, link, children }) => {
  return (
    <article>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <div className='text-base md:text-xl text-primary my-4'>
          <span># {name}</span>
        </div>
      </a>
      {children}
    </article>
  );
};

export default function Projects() {
  return (
    <div className='mt-4'>
      <h1 className='text-xl md:text-2xl text-primary mb-8'>Projects</h1>
      <p className='mb-12'>Some Things I’ve Built</p>
      <ProjectContainer name='Botgo' link='https://botgo.vercel.app/'>
        <p>
          Start your journey by exploring courses you could study, be inspired
          to find the perfect course for you.
        </p>
      </ProjectContainer>
    </div>
  );
}
