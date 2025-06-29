import React from "react";

export default function AboutMe(){

    return(
        <div className="min-h-screen bg-transparent text-center pb-24 font-rubik">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-300 px-4 pt-24 pb-2 underline-behind">
                About
            </h1>
                
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="flex flex-col justify-start transform transition-all duration-700 ease-out w-full max-w-5xl mx-auto">
                    
                    <img src="/person.svg" className="person-svg"/>
                    
                    <p className="px-12 text-left text-xl">
                        Hello! My name is Chase, and I recently graduated from the University of Minnesota–Twin Cities with a degree in Computer Science. 
                        I’m really into building things with code, learning new tech, and working on fun projects that actually make a difference. 
                        When I’m not at my computer, I like to stay active — running, hiking, camping, or getting a good game of basketball in with friends. 
                        I'm currently on the job hunt for a full-time software engineering position and would love to connect with you and discuss any opportunities. 
                        I'm always looking to meet new people, so please don't hesitate to reach out!
                    </p>


                </div>

                <div className="transform transition-all duration-700 ease-out w-full max-w-3xl mx-auto pt-20 skills-icons font-poppins font-space font-bold">
                    
                    <div className="skills-column">
                        <div className="icon-container">
                            <img src="/c_plus.svg" className="icon-image"/>
                            <p className="icon-label">C++</p>
                        </div>

                        <div className="icon-container">
                            <img src="/css.svg" className="icon-image"/>
                            <p className="icon-label">CSS</p>
                        </div>

                        <div className="icon-container">
                            <img src="/aws.svg" className="icon-image"/>
                            <p className="icon-label">AWS</p>
                        </div>

                    </div>
                    
                    <div className="skills-column">

                        <div className="icon-container">
                            <img src="/c.svg" className="icon-image"/>
                            <p className="icon-label">C</p>
                        </div>

                        <div className="icon-container outer">
                            <img src="/python.svg" className="icon-image"/>
                            <p className="icon-label">PYTHON</p>
                        </div>

                        <div className="icon-container">
                            <img src="/git.svg" className="icon-image"/>
                            <p className="icon-label">GIT</p>
                        </div>

                        <div className="icon-container">
                            <img src="/html.svg" className="icon-image"/>
                            <p className="icon-label">HTML</p>
                        </div>
                    </div>

                    <div className="skills-column">

                        <div className="icon-container">
                            <img src="/javascript.svg" className="icon-image"/>
                            <p className="icon-label">JAVASCRIPT</p>
                        </div>

                        <div className="icon-container">
                            <img src="/java.svg" className="icon-image"/>
                            <p className="icon-label">JAVA</p>
                        </div>

                        <div className="icon-container">
                            <img src="/mongodb.svg" className="icon-image"/>
                            <p>MONGODB</p>
                        </div>
                        
                        <div className="icon-container">
                            <img src="/nodejs.svg" className="icon-image"/>
                            <p className="icon-label">NODEJS</p>
                        </div>
                    </div>

                    <div className="skills-column">
                        <div className="icon-container outer">
                                <img src="/react.svg" className="icon-image" alt="React" />
                                <p className="icon-label">REACT</p>
                            </div>
                        <div className="icon-container outer">
                            <img src="/postgresql.svg" className="icon-image"/>
                            <p className="icon-label">POSTGRESQL</p>
                        </div>

                        <div className="icon-container">
                            <img src="/datadog.svg" className="icon-image"/>
                            <p className="icon-label">DATADOG</p>
                        </div>
                       
                    </div>
                   
                    
                </div>
            </div>
        </div>
    );
};