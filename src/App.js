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
  const home = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const [showNav, setShowNav] = useState(false);

  useEffect( () => {
    const options = {
      root: null,
      threshold: 0.6,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);
  
    const sections = [aboutMe.current, experience.current, projects.current];
  
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight- 50);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
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
      <nav className="fixed top-0 left-0 w-full bg-[#0a0f1a]/80 backdrop-blur-sm py-4 px-8 shadow-md z-50 text-slate-300">
        <ul className="flex space-x-3 md:space-x-4 text-sm sm:text-md md:text-lg font-semibold justify-end">
          <li
            className={`relative cursor-pointer transition-colors duration-300 text-sm sm:text-base
              ${activeSection === 'about' ? 'text-pink-500' : 'text-slate-300'}`}
            onClick={() => scrollToSection(aboutMe)}
          >
            <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
              About
            </span>
          </li>


          <li
            className={`relative cursor-pointer transition-colors duration-300 text-sm sm:text-base
              ${activeSection === 'experience' ? 'text-pink-500' : 'text-slate-300'}`}
            onClick={() => scrollToSection(experience)}
          >
            <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
              Experience
            </span>
          </li>

          <li
            className={`relative cursor-pointer transition-colors duration-300 text-sm sm:text-base
              ${activeSection === 'projects' ? 'text-pink-500' : 'text-slate-300'}`}
            onClick={() => scrollToSection(projects)}
          >
            <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
              Projects
            </span>
          </li>


          <li className="cursor-pointer group">
            <a
              href="https://www.linkedin.com/in/chase-blodgett/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
            >
              <svg 
                height="32" 
                width="32" 
                viewBox="0 0 382 382" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path 
                  className="fill-slate-300 group-hover:fill-pink-500 transition-colors duration-300"
                  d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                  L341.91,330.654L341.91,330.654z"
                />
              </svg>
            </a>
          </li>


          <li className="cursor-pointer group">
            <a
              href="https://github.com/chaseblodgett"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 98 96"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-6 md:h-6 fill-slate-300 group-hover:fill-pink-500 transition-colors duration-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
            </a>
          </li>

          
        </ul>
      </nav>
    )}

      <section 
        ref={home}
        className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-16 py-24 space-y-12 md:space-y-0 md:space-x-16">
        <div className="w-full flex flex-col space-y-6 text-center justify-center ">
          <h1 className="w-full text-3xl sm:text-4xl md:text-6xl animate-slide-in-left delay-300">
            Hey, I'm <span className="text-pink-500">Chase.</span>
          </h1>
          <TypingIntro />
          <button
            className="w-fit self-center flex px-5 py-2 rounded-lg items-center space-x-2 text-sm md:text-lg border 
            font-bold text-pink-500 border-pink-500 transition duration-200 hover:scale-110 hover:bg-opacity-90 hover:bg-pink-500 hover:text-[#0d1117] animate-slide-up"
           
            onClick={() => scrollToSection(aboutMe)}
          >
            Check out my work ↓
          </button>
        </div>

      </section>

     
      <section
        id="about"
        ref={aboutMe}
        className="relative clip-pentagon min-h-[calc(100vh+20rem)] mb-[-16]  px-6 py-24"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(17,24,39,0.7), rgba(23,37,84,0.7))',
          backgroundBlendMode: 'overlay',
        }}
      >
        <AboutMe />
      </section>


      <section
        id="experience"
        ref={experience}
        className="relative clip-pentagon min-h-[calc(100vh+20rem)] -mt-48 px-6 py-24"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(17,24,39,0.7), rgba(23,37,84,0.7))',
          backgroundBlendMode: 'overlay',
        }}
      >
        <Experience/>
      </section>

      <section
        id="projects"
        ref={projects}
        className="relative clip-pentagon min-h-[calc(100vh+12rem)] -mt-48 px-6 py-24"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(17,24,39,0.7), rgba(23,37,84,0.7))',
          backgroundBlendMode: 'overlay',
        }}
      >
        <Projects />

        <div className="w-full flex justify-center mt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center w-12 h-12 rounded-full hover:scale-110 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <img src={`${process.env.PUBLIC_URL}/arrow_up.svg`} alt="Scroll to top" className="w-10 h-10 hover:scale-110" />
          </button>
        </div>

      </section>

    </div>
  );
}

export default App;
