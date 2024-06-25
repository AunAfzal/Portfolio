export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Left Section */}
      <div className="flex flex-col space-y-2 md:w-1/2">
        <h3 className="text-2xl font-bold font-poppins md:ml-12">Muhammad Aun Afzal</h3>
        <p className="text-sm max-w-sm ml-4 md:ml-12">
          As a full-stack developer, I excel in building both the frontend and backend of web applications using Next.js and a diverse range of technologies, ensuring seamless and efficient user experiences.
        </p>
      </div>
      
      {/* Right Section */}
      <div className="flex flex-col items-center md:items-end md:absolute md:right-8 space-y-2">
        <h3 className="text-2xl font-bold font-poppins mb-2">SOCIALS</h3>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/muhammad-aun-afzal/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98 3.5C4.98 2.12 3.86 1 2.5 1S0 2.12 0 3.5 1.12 6 2.5 6s2.48-1.12 2.48-2.5zM1 8.67h3V22H1V8.67zm5.9-4.17H9.6c.2 0 .36.15.4.35v.15c.3-.5 1.03-1.16 2.12-1.16C14.17 3.84 16 5.66 16 9.5v6.34H13V10c0-1.05-.27-1.9-1.7-1.9-1.7 0-1.96 1.03-1.96 1.9v6.34H7V8.67z"/>
            </svg>
          </a>
          <a href="https://github.com/AunAfzal" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.44 9.76 8.2 11.34.6.1.8-.26.8-.58V20.9c-3.34.73-4.03-1.66-4.03-1.66-.55-1.42-1.33-1.8-1.33-1.8-1.1-.75.08-.74.08-.74 1.22.08 1.86 1.26 1.86 1.26 1.08 1.86 2.84 1.32 3.54 1 .1-.78.42-1.32.76-1.63-2.66-.3-5.46-1.32-5.46-5.86 0-1.3.47-2.37 1.23-3.22-.1-.3-.53-1.52.12-3.17 0 0 1-.33 3.3 1.24a11.5 11.5 0 0 1 6 0c2.3-1.57 3.3-1.24 3.3-1.24.65 1.65.23 2.87.12 3.17.76.85 1.23 1.92 1.23 3.22 0 4.56-2.8 5.56-5.47 5.86.43.38.8 1.1.8 2.22v3.28c0 .32.2.68.8.57C20.56 22.26 24 17.78 24 12.5 24 5.87 18.63.5 12 .5z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
