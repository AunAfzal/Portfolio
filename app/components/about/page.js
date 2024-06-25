export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-primary text-white p-8 flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold font-poppins mb-8">ABOUT ME</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl">
        {/* Know About Me Section */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold font-poppins">Know About Me!</h3>
          <p className="text-lg">
            Greetings! I'm Muhammad Aun Afzal, a dedicated full-stack developer with expertise in Next.js, React, and a range of other technologies. Currently pursuing a Bachelor of Software Engineering at COMSATS University Islamabad.
          </p>
          <p className="text-lg">
          I have a proven track record of crafting high-quality digital solutions, from creating seamless user interfaces with React.js to architecting robust backend systems using Node.js. My focus is always on delivering clean, efficient, and scalable code that exceeds expectations.
          </p>
          <p className="text-lg">
          Throughout my career, I've had the opportunity to professionaly work on a variety of projects, each presenting unique challenges and opportunities for growth. I thrive on the continuous learning and problem-solving inherent in the tech industry.
          </p>
        </div>
        
        {/* My Skills Section */}
        <div className="md:w-1/2 space-y-4 md:ml-8 mt-8 md:mt-0">
          <h3 className="text-2xl font-semibold font-poppins">My Skills</h3>
          <div className="flex flex-wrap justify-start space-x-2">
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">Next.js</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">React</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">Node.js</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">Express</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">MongoDB</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">JavaScript</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">TypeScript</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">C++</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">Python</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">HTML/CSS/Bootstrap</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">Figma</span>
          </div>
          <h4 className="text-xl font-bold mt-4">Developer Tools</h4>
          <div className="flex flex-wrap justify-start space-x-2">
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">Git</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">GitHub</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">VSCode</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">Pycharm</span>
            <span className="bg-gray-700 text-white px-4 py-2 my-2 rounded-lg">IntelliJ</span>
          </div>
          <h4 className="text-xl font-bold mt-4">Software Engineering Skills</h4>
          <p className="text-lg">
            I'm well-versed in Software Requirement Engineering, Software Project Management, Software Quality Engineering, and Software Design and Architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
