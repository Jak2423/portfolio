import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const meta = {
    title: 'Jak - Developer',
    description: `Software Engineer based in Mongolia, a student at National University of Mongolia.`,
    // image: 'https://leerob.io/static/images/lee-banner.png',
    type: 'website',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        {/* <meta property='og:url' content={`https://leerob.io${router.asPath}`} />
        <link rel='canonical' href={`https://leerob.io${router.asPath}`} /> */}
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Jak' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        {/* <meta property='og:image' content={meta.image} /> */}
        <meta name='twitter:card' content='summary_large_image' />
        {/* <meta property='twitter:url' content='https://abdulrahman.id/' /> */}
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        {/* <meta name='twitter:image' content={meta.image} /> */}
      </Head>
      <div className='max-w-3xl mx-auto w-full px-8 py-8 min-h-screen'>
        <Navbar />
        <main>
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
