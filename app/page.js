import Head from 'next/head';
import Navbar from './components/navbar/page';
import Hero from './components/hero/page';
import About from './components/about/page';
import Projects from './components/projects/page';
import Contact from './components/contact//page';
import Footer from './components/footer/page';

export default function Home() {
  return (
    <div className="font-poppins">
      <Head>
        <title>Portfolio of Muhammad Aun Afzal</title>
        <meta name="description" content="Portfolio of Muhammad Aun Afzal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
