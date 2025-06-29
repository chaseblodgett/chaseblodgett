import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import TypingIntro from './components/TypingIntro';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { useRef, useState, useEffect } from 'react';

function App() {
  const aboutMe = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const [showNav, setShowNav] = useState(false);

  useEffect( () => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight- 50);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },[]);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop + 105,
      behavior: 'smooth',
    });
  
    setTimeout(() => {
      setShowNav(true);
    }, 500); 
  };
  

  return (
    <div className="relative overflow-auto text-white bg-gradient-to-br from-black via-gray-900 to-blue-950 z-[10] font-space">

      <ParticlesBackground />

      {showNav && (
      <nav className="fixed top-0 left-0 w-full bg-[#0d1117]/90 backdrop-blur-sm py-4 px-8 shadow-md z-50">
        <ul className="flex space-x-8 text-lg font-semibold justify-center">
          <li className="cursor-pointer hover:pink-500" onClick={() => scrollToSection(aboutMe)}>About</li>
          <li className="cursor-pointer hover:pink-500" onClick={() => scrollToSection(experience)}>Experience</li>
          <li className="cursor-pointer hover:pink-500" onClick={() => scrollToSection(projects)}>Projects</li>
        </ul>
      </nav>
    )}


      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-16 py-24 space-y-12 md:space-y-0 md:space-x-16">
        <div className="w-full md:w-[40%] flex flex-col space-y-6 text-center justify-center ">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold animate-slide-in-left delay-300">
            Hey, I'm <span className="text-pink-500">Chase.</span>
          </h1>
          <TypingIntro />
          <button
            className="w-fit self-center flex px-5 py-2 rounded-lg items-center space-x-2 text-lg border 
            font-bold text-pink-500 border-pink-500 transition duration-200 hover:bg-opacity-80 hover:bg-pink-500 hover:text-[#0d1117] animate-slide-up"
           
            onClick={() => scrollToSection(aboutMe)}
          >
            Check out my work ↓
          </button>
        </div>

        {/* <div className="w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center rounded-lg shadow-lg">
          <img
            src="/me.jpeg"
            alt="Chase Blodgett"
            className="w-full h-full rounded-3xl object-cover shadow-lg"
          />
        </div> */}
      </section>

     
      <section
        ref={aboutMe}
        className="relative clip-pentagon min-h-[calc(100vh+20rem)] mb-[-16]  px-6 py-24"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(17,24,39,0.9), rgba(23,37,84,0.9))',
          backgroundBlendMode: 'overlay',
        }}
      >
        <AboutMe />
      </section>


      <section
        ref={experience}
        className="relative clip-pentagon min-h-[calc(100vh+20rem)] -mt-48 px-6 py-24"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(17,24,39,0.9), rgba(23,37,84,0.9))',
          backgroundBlendMode: 'overlay',
        }}
      >
        <Experience/>
      </section>

      <section
        ref={projects}
        className="relative clip-pentagon min-h-[calc(100vh+20rem)] -mt-48 px-6 py-24"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(17,24,39,0.9), rgba(23,37,84,0.9))',
          backgroundBlendMode: 'overlay',
        }}
      >
        <Projects/>
      </section>

    </div>
  );
}

export default App;
