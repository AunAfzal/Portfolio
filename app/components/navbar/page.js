"use client";

import Image from 'next/image';
import profilePic from './professional pp.jpg'; // Replace with your actual image path

export default function Navbar() {
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
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center fixed w-full z-50">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="rounded-full"
            width={48}
            height={48}
          />
        </div>
        <span className="text-xl font-bold font-poppins">Muhammad Aun Afzal</span>
      </div>
      <div className="space-x-8 font-poppins">
        <button onClick={() => handleScroll('hero')} className="hover:text-gray-400">HOME</button>
        <button onClick={() => handleScroll('about')} className="hover:text-gray-400">ABOUT</button>
        <button onClick={() => handleScroll('projects')} className="hover:text-gray-400">PROJECTS</button>
        <button onClick={() => handleScroll('contact')} className="hover:text-gray-400">CONTACT</button>
      </div>
    </nav>
  );
}
