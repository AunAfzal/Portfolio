'use client';
import Link from 'next/link';

export default function Projects() {
    const handleScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        const yOffset = -80; // Adjust this value to match your navbar height
        const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
        window.scrollTo({
          top: yCoordinate,
          behavior: 'smooth',
        });
      };
  return (
    <section
      id="projects"
      className="min-h-screen bg-primary text-white p-8 flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold font-poppins mb-8">PROJECTS</h2>
      <div className="space-y-8 w-full max-w-4xl">
        {/* Project: Hoop Master */}
        <Link href="/project/hoop-master" passHref>
          <div className="bg-gray-800 p-6 rounded-lg transition transform hover:scale-105 cursor-pointer">
            <h3 className="text-2xl font-semibold font-poppins mb-2">Hoop Master</h3>
            <p className="text-lg">
              Developing HoopMaster, a Basketball training app that helps athletes by designing specific courses for them. Implementing video analysis features to analyze the game and provide feedback for improvement. Integrated social platform functionalities and athlete portfolio management.
            </p>
            <p className="text-sm text-gray-400">Technologies: React Native, Next.js, Python, LLM, Deep Learning, Figma, MongoDB</p>
          </div>
        </Link>
        <br/>

        {/* Project: ConsoleHub */}
        <Link href="/project/consolehub" passHref>
          <div className="bg-gray-800 p-6 rounded-lg transition transform hover:scale-105 cursor-pointer">
            <h3 className="text-2xl font-semibold font-poppins mb-2">ConsoleHub</h3>
            <p className="text-lg">
              Developed ConsoleHub, an e-commerce platform for buyers and sellers to register and transact console games and accessories. Implemented a Node.js backend to handle authentication, product listings, and transaction management. Designed and developed a Next.js frontend for user-friendly navigation and interaction. Integrated secure payment gateways and managed user data with MongoDB.
            </p>
            <p className="text-sm text-gray-400">Technologies: Node.js, Next.js, MongoDB</p>
          </div>
        </Link>
        <br/>

        
        {/* Project: Blogging Site */}
        <Link href="/project/blog-reader" passHref>
          <div className="bg-gray-800 p-6 rounded-lg transition transform hover:scale-105 cursor-pointer">
            <h3 className="text-2xl font-semibold font-poppins mb-2">Blog Reader</h3>
            <p className="text-lg">
              Developed features for viewing, searching, and filtering blogs, managing personal profiles, and tracking views, comments, and likes on blogs.
            </p>
            <p className="text-sm text-gray-400">Technologies: MERN stack (MongoDB, Express, React, Node.js)</p>
          </div>
        </Link>
        <br/>

        {/* Project: Promptopia */}
        <Link href="/project/promptopia" passHref>
          <div className="bg-gray-800 p-6 rounded-lg transition transform hover:scale-105 cursor-pointer">
            <h3 className="text-2xl font-semibold font-poppins mb-2">Promptopia</h3>
            <p className="text-lg">
              Built a website where users can search, view, and add various AI prompts with authentication. Implemented dynamic routing and API routes for CRUD operations.
            </p>
            <p className="text-sm text-gray-400">Technologies: Next.js, MongoDB</p>
          </div>
        </Link>

        
        {/* Project: Personal Portfolio Site */}
        <div onClick={() => handleScroll('hero')}>
          <div className="bg-gray-800 p-6 rounded-lg transition transform hover:scale-105 cursor-pointer">
            <h3 className="text-2xl font-semibold font-poppins mb-2">Personal Portfolio Site</h3>
            <p className="text-lg">
              Created a personal portfolio website using Next.js to showcase projects, skills, and professional experience. Implemented responsive design and smooth navigation for an enhanced user experience. Integrated a blog section and contact form to engage with visitors and potential clients. Optimized the site for performance and search engine visibility.
            </p>
            <p className="text-sm text-gray-400">Technologies: Next.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}
