export default function Contact() {
  return (
    <div>
      <h1 className='text-xl md:text-2xl text-primary mt-4 mb-8'>Contact</h1>
      <p className='my-4'>
        Send me an email to:{' '}
        <a href='mailto:javhlan0420@gmail.com'>
          <span className='border-b border-black hover:border-b-2 hover:border-primary'>
            javhlan0420@gmail.com
          </span>
        </a>
      </p>
      <p className='my-4'>
        Visit my Github pages:{' '}
        <a href='https://github.com/Jak2423'>
          <span className='border-b border-black hover:border-b-2 hover:border-primary'>
            @Jak2423
          </span>
        </a>
      </p>
      <p className='my-4'>
        Follow me on Twitter:{' '}
        <a href='https://twitter.com/javhln'>
          <span className='border-b border-black hover:border-b-2 hover:border-primary'>
            @javhln
          </span>
        </a>
      </p>
      <p className='font-bold my-4'>Keep In Touch 🚀</p>
    </div>
  );
}
