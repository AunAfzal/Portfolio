'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'Hoop Master',
    description: 'Hoop Master is a Basketball training app that helps athletes by designing specific courses for them. It includes video analysis features to analyze the game and provide feedback for improvement. It also integrates social platform functionalities and athlete portfolio management.',
    technologies: ['React Native', 'Next.js', 'Python', 'LLM', 'Deep Learning', 'Figma', 'MongoDB'],
    pictures: [
      'https://i.imgur.com/lybYkFc.jpg',
      'https://i.imgur.com/LB44bWE.jpg',
      'https://i.imgur.com/dMXoBTF.jpg',
      'https://i.imgur.com/dmEIoYx.jpg',
      'https://i.imgur.com/bf9V5Ee.jpg',
      'https://i.imgur.com/ZLqvsUB.jpg',
      'https://i.imgur.com/9Po2Xfb.jpg'
    ],
    video: ''
  },
  {
    name: 'Promptopia',
    description: 'Promptopia is a website where users can search, view, and add various AI prompts with authentication. It implements dynamic routing and API routes for CRUD operations.',
    technologies: ['Next.js', 'MongoDB'],
    pictures: [
      'https://i.imgur.com/5fcmlFp.jpg',
      'https://i.imgur.com/txiW3HD.jpg',
      'https://i.imgur.com/7cAvHW2.jpg',
      'https://i.imgur.com/3mvy3nm.jpg',
      'https://i.imgur.com/HCZBqZ6.jpg'
    ],
    video: '/media/p/vid.mp4'
  },
  {
    name: 'ConsoleHub',
    description: 'ConsoleHub is an e-commerce platform for buyers and sellers to register and transact console games and accessories. It features a Node.js backend to handle authentication, product listings, and transaction management, and a Next.js frontend for user-friendly navigation and interaction. Secure payment gateways and user data management with MongoDB are integrated.',
    technologies: ['Node.js', 'Next.js', 'MongoDB'],
    pictures: [
      'https://i.imgur.com/iG4I4bq.jpg',
      'https://i.imgur.com/htLaKTk.jpg',
      'https://i.imgur.com/upRgnU9.jpg',
      'https://i.imgur.com/Gnbi1fn.jpg',
      'https://i.imgur.com/ChouSqB.jpg',
      'https://i.imgur.com/tkr55IU.jpg',
      'https://i.imgur.com/wxM1pXZ.jpg',
      'https://i.imgur.com/t5aFgEi.jpg'
    ],
    video: '/media/ch/vid.mp4'
  },
  {
    name: 'Blog Reader',
    description: 'Blog Reader is a platform that allows users to view, search, and filter blogs. It includes features for managing personal profiles and tracking views, comments, and likes on blogs.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    pictures: [
      'https://i.imgur.com/VyfjTF7.jpg',
      'https://i.imgur.com/j25OW3u.jpg',
      'https://i.imgur.com/GzblT8B.jpg',
      'https://i.imgur.com/8u1RwsO.jpg',
      'https://i.imgur.com/iIPIhTS.jpg'
    ],
    video: '/media/br/vid.mp4'
  }
];


const Project = ({ params }) => {
  const router = useRouter();
  const name = decodeURIComponent(params.name);
  const [project, setProject] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (name) {
      const selectedProject = projects.find(proj => proj.name.toLowerCase().replace(/\s+/g, '-') === name);
      setProject(selectedProject);
    }
  }, [name]);

  const scrollToSlide = (index) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: carouselRef.current.offsetWidth * index, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    const newIndex = (currentSlide - 1 + project.pictures.length) % project.pictures.length;
    scrollToSlide(newIndex);
  };

  const scrollRight = () => {
    const newIndex = (currentSlide + 1) % project.pictures.length;
    scrollToSlide(newIndex);
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-primary text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">{project.name}</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-lg">{project.description}</p>
      </div>
      <br/>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-800 p-2 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <br/>
      <br/>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="relative">
          <div ref={carouselRef} className="flex overflow-x-scroll snap-x snap-mandatory pb-4">
            {project.pictures.map((pic, index) => (
              <div key={index} className="snap-center flex-shrink-0 w-full h-96 relative bg-black flex items-center justify-center">
                {index === currentSlide && (
                  <Image src={pic} alt={`Project Image ${index + 1}`} layout="fill" objectFit="contain" />
                )}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button onClick={scrollLeft} className="text-white bg-gray-800 p-2 rounded-full">‹</button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button onClick={scrollRight} className="text-white bg-gray-800 p-2 rounded-full">›</button>
          </div>
        </div>
        <div>
          {project.video ? (
            <iframe
              className="w-full h-96"
              src={`${project.video}?playbackRate=2`}
              title={project.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-lg">Project is being implemented</p>
          )}
        </div>
      </div>
      </div>
  );
};

export default Project;
