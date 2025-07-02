import {React, useRef, useEffect, useState} from "react";

export default function Projects(){
    const bodyRef = useRef(null);
    const headerRef = useRef(null);
    const [headIsVisible, setHeadIsVisible] = useState(false);
    const [bodyIsVisible, setBodyIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (entry.target === headerRef.current && !headIsVisible) {
                  setHeadIsVisible(true);
                  observer.unobserve(headerRef.current);
                } else if (entry.target === bodyRef.current && !bodyIsVisible) {
                  setBodyIsVisible(true);
                  observer.unobserve(bodyRef.current);
                }
              }
            });
          },
          { threshold: 0.2 }
        );
      
        if (headerRef.current) observer.observe(headerRef.current);
        if (bodyRef.current) observer.observe(bodyRef.current);
      
        return () => {
          if (headerRef.current) observer.unobserve(headerRef.current);
          if (bodyRef.current) observer.unobserve(bodyRef.current);
        };
      }, [headIsVisible, bodyIsVisible]);
      


    return(
        <div 
            className="min-h-screen bg-transparent text-center">
            <h1 
            ref={headerRef}
            className={`text-5xl md:text-6xl font-bold text-slate-300 px-4 pt-24 pb-2 underline-behind ${
                        headIsVisible ? 'animate-slide-in-right delay-[500ms' : 'opacity-0 translate-x-8'
                    }`}>
                Projects
            </h1>

            <div 
                ref={bodyRef}
                className="flex flex-col items-center justify-center gap-6 pt-16 md:flex-row md:items-stretch w-full px-0 sm:px-4 md:px-12 lg:px-20 font-rubik">

                <div
                className={`flex flex-col border-2 border-purple-500/50 rounded-xl md:w-1/3 overflow-hidden transition-all duration-700 ${
                    bodyIsVisible ? 'transform transition-all duration-700 ease-in delay-[700ms]' : 'opacity-0 translate-y-6'
                }`}>

                    
                    <div className="group relative w-full">
                        <img className="project-img rounded-t-xl w-full hover:pointer" src={`${process.env.PUBLIC_URL}/travelgram.jpeg`} alt="travelgram" />

                        
                        <div className="absolute inset-0 text-slate-300 flex flex-col items-center justify-center gap-4 px-4 
                                        transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-t-xl"
                            style={{
                                backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(17,24,39,0.9), rgba(23,37,84,0.9))',
                                backgroundBlendMode: 'overlay',
                                }}>
                            <a href="http://travelgram.us-east-1.elasticbeanstalk.com/home" target="_blank" rel="noopener noreferrer" className="text-lg">
                                Live App
                                <img src={`${process.env.PUBLIC_URL}/open.svg`} alt="Open" className="w-4 h-4 inline ml-1" />

                            </a>
                            <a href="https://github.com/chaseblodgett/travelgram" target="_blank" rel="noopener noreferrer" className="text-lg">
                                Source Code
                                <img src={`${process.env.PUBLIC_URL}/open.svg`} alt="Open" className="w-4 h-4 inline ml-1" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-slate-800/60 rounded-lg max-w-4xl mx-auto">
                        <h2 className="w-fit mx-auto text-center text-lg sm:text-xl md:text-2xl lg:text-3xl pt-2 underline-behind font-semibold">
                            Travelgram
                        </h2>
                        <p className="py-4 px-4 text-left text-xs sm:text-sm md:text-md 2xl:text-lg">
                            Travelgram is a full-stack social media app for travelers to share their trips, connect with friends, and explore new destinations. 
                            It features user authentication, photo uploads via Cloudinary, and real-time messaging using Socket.io. 
                            Utilizes the Google Maps API for interactive trip visualization, and features like a bucket list, friend system, and trip sharing to enhance the social experience.
                        </p>
                    </div>

                </div>


                <div
                className={`flex flex-col border-2 border-purple-500/50 rounded-xl md:w-1/3 overflow-hidden transition-all duration-700 ${
                    bodyIsVisible ? 'transform transition-all duration-700 ease-in delay-[850ms]' : 'opacity-0 translate-y-6'
                }`}>

                    
                    <div className="group relative w-full">
                        <img className="project-img rounded-t-xl w-full hover:pointer" src={`${process.env.PUBLIC_URL}/transfermybib.jpeg`} alt="transfermybib" />

                        
                        <div className="absolute inset-0 text-slate-300 flex flex-col items-center justify-center gap-4 px-4 
                                        transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-t-xl"
                            style={{
                                backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(17,24,39,0.9), rgba(23,37,84,0.9))',
                                backgroundBlendMode: 'overlay',
                                }}>
                            <a href="https://transfermybib-b27aa46b536b.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="text-lg">
                                Live App
                                <img src={`${process.env.PUBLIC_URL}/open.svg`} alt="Open" className="w-4 h-4 inline ml-1" />

                            </a>
                            <a href="https://github.com/chaseblodgett/transfermybib" target="_blank" rel="noopener noreferrer" className="text-lg">
                                Source Code
                                <img src={`${process.env.PUBLIC_URL}/open.svg`} alt="Open" className="w-4 h-4 inline ml-1" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-slate-800/60 rounded-lg max-w-4xl mx-auto">
                        <h2 className="w-fit mx-auto text-center text-lg sm:text-xl md:text-2xl lg:text-3xl pt-2 underline-behind font-semibold">
                            TransferMyBib
                        </h2>
                        <p className="py-4 px-4 text-left text-xs sm:text-sm md:text-md 2xl:text-lg">
                            A full-stack marketplace and forum designed to facilitate buying and selling race bibs for over 100 US-based road races. 
                            The platform supports user account management, threaded posts, comments, and community discussions.
                        </p>
                    </div>
                </div>


                <div
                className={`flex flex-col border-2 border-purple-500/50 rounded-xl md:w-1/3 overflow-hidden transition-all duration-700 ${
                    bodyIsVisible ? 'transform transition-all duration-700 ease-in delay-[1000ms]' : 'opacity-0 translate-y-6'
                }`}>

                    
                    <div className="group relative w-full">
                        <img className="project-img rounded-t-xl w-full hover:pointer" src={`${process.env.PUBLIC_URL}/checkers.jpg`} alt="checkers" />

                        
                        <div className="absolute inset-0 text-slate-300 flex flex-col items-center justify-center gap-4 px-4 
                                        transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-t-xl"
                            style={{
                                backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(17,24,39,0.9), rgba(23,37,84,0.9))',
                                backgroundBlendMode: 'overlay',
                                }}>
                            
                            <a href="https://github.com/chaseblodgett/checkers_bot" target="_blank" rel="noopener noreferrer" className="text-lg">
                                Source Code
                                <img src={`${process.env.PUBLIC_URL}/open.svg`} alt="Open" className="w-4 h-4 inline ml-1" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800/60 rounded-lg max-w-4xl mx-auto">
                        <h2 className="w-fit mx-auto text-center text-lg sm:text-xl md:text-2xl lg:text-3xl pt-2 underline-behind font-semibold">
                            Checkers AI Bot
                        </h2>
                        <p className="py-4 px-4 text-left text-xs sm:text-sm md:text-md 2xl:text-lg">
                            An AI-driven checkers bot leveraging the game theory alpha-beta pruning algorithm paired with multiple heuristics for board state evaluation. 
                            Features include a user vs. AI GUI with adjustable difficulty levels and AI tournaments to benchmark heuristic performance. 
                            Performance analysis was conducted using metrics such as win rates, average moves, and thinking time per move.
                        </p>
                    </div>
                </div>

            </div>
                      
        </div>
    );
};