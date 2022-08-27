import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className='max-w-3xl mx-auto w-full px-8 py-8 min-h-screen'>
      <Navbar />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
}
