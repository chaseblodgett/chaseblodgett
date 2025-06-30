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
                
            <div className="flex flex-col lg:flex-row md:gap-16">
                <div
                    className={`flex flex-col justify-start transform transition-all duration-700 ease-out w-full max-w-5xl mx-auto ${
                        isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0 translate-y-8'
                    }`}
                    >
                    
                    <img src="/person.svg" className="person-svg"/>
                    
                    <p className="px-2 sm:px-4 md:px-8 lg:px-12 text-left text-md md:text-xl xl:px-20 2xl:px-40 text-slate-300">
                        Hello! My name is Chase, and I recently graduated from the University of Minnesota–Twin Cities with a degree in Computer Science. 
                        I’m really into building things with code, learning new tech, and working on fun projects that actually make a difference. 
                        When I’m not at my computer, I like to stay active — running, hiking, camping, or getting a good game of basketball in with friends. 
                        I'm currently on the job hunt for a full-time software engineering position and would love to connect with you and discuss any opportunities. 
                        I'm always looking to meet new people, so please don't hesitate to reach out!
                    </p>


                </div>

                <div 
                    className="transform transition-all duration-700 ease-out w-full max-w-3xl mx-auto pt-20 skills-icons font-poppins font-space font-bold">
                        
                    <div className="skills-column">
                     
                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[800ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/c_plus.svg" className="icon-image"/>
                            <p className="icon-label">C++</p>
                        </div>
                    
                        
                        <div  className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1000ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/css.svg" className="icon-image"/>
                            <p className="icon-label">CSS</p>
                        </div>

                        <div  className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1200ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/aws.svg" className="icon-image"/>
                            <p className="icon-label">AWS</p>
                        </div>

                    </div>
                    
                    <div className="skills-column">

                        <div  className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[800ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/c.svg" className="icon-image"/>
                            <p className="icon-label">C</p>
                        </div>

                        <div  className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1000ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/python.svg" className="icon-image"/>
                            <p className="icon-label">PYTHON</p>
                        </div>

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1200ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/git.svg" className="icon-image"/>
                            <p className="icon-label">GIT</p>
                        </div>

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1400ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/html.svg" className="icon-image"/>
                            <p className="icon-label">HTML</p>
                        </div>
                    </div>

                    <div className="skills-column">

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[800ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/javascript.svg" className="icon-image"/>
                            <p className="icon-label">JAVASCRIPT</p>
                        </div>

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1000ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/java.svg" className="icon-image"/>
                            <p className="icon-label">JAVA</p>
                        </div>

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1200ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/mongodb.svg" className="icon-image"/>
                            <p>MONGODB</p>
                        </div>
                        
                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1400ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/nodejs.svg" className="icon-image"/>
                            <p className="icon-label">NODEJS</p>
                        </div>
                    </div>

                    <div className="skills-column">
                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[800ms]' : 'opacity-0 translate-y-8'
                            }`}>
                                <img src="/react.svg" className="icon-image" alt="React" />
                                <p className="icon-label">REACT</p>
                            </div>
                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1000ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/postgresql.svg" className="icon-image"/>
                            <p className="icon-label">POSTGRESQL</p>
                        </div>

                        <div className={`icon-container ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[1200ms]' : 'opacity-0 translate-y-8'
                            }`}>
                            <img src="/datadog.svg" className="icon-image"/>
                            <p className="icon-label">DATADOG</p>
                        </div>
                       
                    </div>
                   
                    
                </div>
            </div>
        </div>
    );
};