import {React, useRef, useEffect, useState} from "react";
import { animate, stagger } from 'animejs'; 
import { useInView, InView} from 'react-intersection-observer';

export default function AboutMe(){
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting && !isVisible) {
                setIsVisible(true);
                if (ref.current) observer.unobserve(ref.current);
            }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [isVisible]);


    return(
        <div 
        ref={ref}
        className="min-h-screen bg-transparent text-center pb-24 font-rubik">
            <h1 className={`text-5xl md:text-6xl font-bold text-slate-300 px-4 pt-24 pb-2 underline-behind ${
                        isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0 translate-x-8'
                    }`}>
                About
            </h1>
                
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 2xl:gap-10">
                <div
                    className={`flex flex-col justify-start transform transition-all duration-700 ease-out w-full max-w-5xl mx-auto ${
                        isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0 translate-y-8'
                    }`}
                    >
                    
                    <img src={`${process.env.PUBLIC_URL}/person.svg`} className="person-svg"/>
                    
                    <p className="px-1 sm:px-2 md:px-6 lg:px-10 text-left text-sm md:text-lg 2xl:text-xl xl:px-20 2xl:px-40 text-slate-300">
                        Hello! My name is Chase, and I am a Computer Science graduate from the University of Minnesota–Twin Cities.
                        I'm currently working as a full-stack software engineer at Evadata.
                        I primarily work with Node.js and React.js, using AWS for infrastructure and deployments.
                        I really enjoy building things with code, learning new tech, and working on fun projects in my free time. 
                        I have a strong background working with Python, C, Java, and JavaScript, and I’ve built projects in each, from fun simple programs to full-stack web apps. 
                        Outside of tech, I like to stay active - running, hiking, camping, or getting a game of basketball in with friends whenever I can. 
                        I’d love to connect and discuss opportunities or just to chat. 
                        Always happy to meet new people, so don’t hesitate to reach out!
                        This website was coded using React.js and Tailwind CSS, I hope you like it!
                    </p> 


                </div>

                <div 
                    className="transform transition-all duration-700 ease-out w-full max-w-3xl mx-auto pt-20 skills-icons font-poppins font-space font-bold">
                        
                    <div className="skills-column">
                     
                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[800ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/c_plus.svg`} className="icon-image"/>
                            <p className="icon-label">C++</p>
                        </div>
                    
                        
                        <div  className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1000ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/css.svg`} className="icon-image"/>
                            <p className="icon-label">CSS</p>
                        </div>

                        <div  className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1200ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/aws.svg`} className="icon-image"/>
                            <p className="icon-label">AWS</p>
                        </div>

                    </div>
                    
                    <div className="skills-column">

                        <div  className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[800ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/c.svg`} className="icon-image"/>
                            <p className="icon-label">C</p>
                        </div>

                        <div  className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1000ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/Python.svg`} className="icon-image"/>
                            <p className="icon-label">PYTHON</p>
                        </div>

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1200ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/git.svg`} className="icon-image"/>
                            <p className="icon-label">GIT</p>
                        </div>

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1400ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/html.svg`} className="icon-image"/>
                            <p className="icon-label">HTML</p>
                        </div>
                    </div>

                    <div className="skills-column">

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[800ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/javascript.svg`} className="icon-image"/>
                            <p className="icon-label">JAVASCRIPT</p>
                        </div>

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1000ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/java.svg`} className="icon-image"/>
                            <p className="icon-label">JAVA</p>
                        </div>

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1200ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/mongodb.svg`} className="icon-image"/>
                            <p className="icon-label">MONGODB</p>
                        </div>
                        
                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1400ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/nodejs.svg`} className="icon-image"/>
                            <p className="icon-label">NODEJS</p>
                        </div>
                    </div>

                    <div className="skills-column">
                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[800ms]' : 'opacity-0 translate-y-8'
                            }`}>
                                <img src={`${process.env.PUBLIC_URL}/react.svg`} className="icon-image" alt="React" />
                                <p className="icon-label">REACT</p>
                            </div>
                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1000ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/postgresql.svg`} className="icon-image"/>
                            <p className="icon-label">POSTGRESQL</p>
                        </div>

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1200ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src={`${process.env.PUBLIC_URL}/datadog.svg`} className="icon-image"/>
                            <p className="icon-label">DATADOG</p>
                        </div>
                       
                    </div>
                   
                    
                </div>
            </div>
        </div>
    );
};