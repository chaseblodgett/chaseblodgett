import { useRef, useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!isVisible && entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [isVisible]);

  return (
    
    <div 
        className="min-h-screen bg-transparent text-center">
        <h1 
        ref={ref}
        className={`text-5xl md:text-6xl font-bold text-slate-300 px-4 pt-24 pb-2 underline-behind ${
                    isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0 translate-x-8'
                }`}>
            Contact
        </h1>

        <div 
            ref={ref}
            className="flex flex-col items-center justify-center gap-6 pt-16 md:flex-row md:items-stretch w-full px-0 sm:px-4 md:px-12 lg:px-20 font-rubik">
            <div
                className={`bg-slate-800/60 border border-purple-500/40 rounded-2xl shadow-xl p-8 w-full max-w-lg transition-all duration-700 ${
                isVisible ? 'transform transition-all duration-700 ease-in delay-[850ms]' : 'opacity-0 translate-y-6'
                }`}
            >
                <p className="text-lg md:text-xl text-slate-300 mb-6">
                I'd love to hear from you! Feel free to reach out through any of the contact methods below.
                </p>

                <div className="flex flex-col gap-4 text-left text-slate-200 text-md md:text-lg">
                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-purple-400" />
                        <a href="mailto:blodg072@umn.edu" className="hover:text-purple-400 transition">
                        blodg072@umn.edu
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-purple-400" />
                        <span>+1 (651) 274 6618</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Github className="w-5 h-5 text-purple-400" />
                        <a
                        href="https://github.com/chaseblodgett"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                        >
                        github.com/chaseblodgett
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-purple-400" />
                        <a
                        href="https://www.linkedin.com/in/chase-blodgett/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                        >
                        linkedin.com/in/chase-blodgett
                        </a>
                    </div>
                </div>
            </div>
        </div>
                
    </div>
  );
}
