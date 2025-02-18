import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar from './Navbar';

const variants = {
	hidden: { opacity: 0, x: 0, y: -10 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 10 },
};

export default function Layout({ children }) {
	const router = useRouter();
	const meta = {
		title: 'Jak - Developer',
		description: `Software Engineer based in Mongolia, a student at National University of Mongolia.`,
		image: 'https://javkhlan.vercel.app/static/images/banner.png',
		type: 'website',
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name='robots' content='follow, index' />
				<meta content={meta.description} name='description' />
				<meta property='og:url' content={`https://javkhlan.vercel.app${router.asPath}`} />
				<link rel='canonical' href={`https://javkhlan.vercel.app${router.asPath}`} />
				<meta property='og:type' content={meta.type} />
				<meta property='og:site_name' content='JakDev' />
				<meta property='og:description' content={meta.description} />
				<meta property='og:title' content={meta.title} />
				<meta property='og:image' content={meta.image} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://javkhlan.vercel.app' />
				<meta name='twitter:title' content={meta.title} />
				<meta name='twitter:description' content={meta.description} />
				<meta name='twitter:image' content={meta.image} />
			</Head>
			<div className='max-w-3xl mx-auto w-full px-8 py-8'>
				<Navbar />
				<AnimatePresence initial={false} exitBeforeEnter>
					<motion.main
						key={router.asPath}
						initial='hidden'
						animate='enter'
						exit='exit'
						variants={variants}
						transition={{ type: 'linear', duration: 0.3 }}
						className='animate-fade-in-up mb-8'
					>
						{children}
					</motion.main>
				</AnimatePresence>
				<Footer />
			</div>
		</>
	);
}
