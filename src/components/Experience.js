import {React, useRef, useEffect, useState} from "react";

export default function Experience(){
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


    return (
        <div 
        ref={ref}
        className="min-h-screen bg-transparent text-center pb-24 font-rubik">
            <h1 className={`text-5xl md:text-6xl font-bold text-slate-300 px-4 pt-24 pb-2 underline-behind ${
                        isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0 translate-x-8'
                    }`}>
                Experience
            </h1>
      
          <div className={`flex flex-col justify-start pt-12 ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[400ms]' : 'opacity-0 translate-y-6'
                            }`}>
            <div className="flex justify-between items-start gap-2 md:gap-6 w-full px-2 sm:px-12 md:px-24 lg:px-32 text-xs sm:text-sm md:text-lg">
             
              <div className="flex items-start gap-2 md:gap-4">
                <img
                  src={`${process.env.PUBLIC_URL}/thomsonreuters.jpg`}
                  alt="Thomson Reuters"
                  className="w-14 h-14 object-cover rounded-md shadow-sm work-logo"
                />
                <div className="text-left">
                  <h2 className="text-sm sm:text-md md:text-lg font-semibold text-slate-100">Thomson Reuters</h2>
                  <h4 className="text-xs sm:text-sm md:text-md text-slate-400">Software Engineer Intern</h4>
                </div>
              </div>
      
              <p className="text-xs md:text-sm text-slate-400 whitespace-nowrap">Jan 2024 – Jan 2025</p>
            </div>
      
            <div className="text-left text-xs sm:text-sm md:text-lg px-2 sm:px-12 md:px-24 lg:px-32 mt-4 text-slate-300 font-rubik">
                <p>
                Worked on a DevOps cloud engineering team at Thomson Reuters, helping manage cloud infrastructure for 40+ global services running on AWS. 
                Built a large-scale Python script that automated updates to over 100 CloudFormation pipelines, speeding up the setup and deployment of new testing environments.
                Analyzed and troubleshot issues with Spring Boot applications by conducting thorough root cause analysis of EC2 instance logs, increasing application uptime from 99.3% to 99.9%. 
                Developed and deployed AWS Lambda scripts to collect networking data across 40+ AWS accounts. Built and maintained multiple CodePipelines using tools like CodeBuild and CloudFormation.
                </p>
            </div>
          </div>

          <div className={`flex flex-col justify-start pt-12 ${
                                isVisible ? 'transform transition-all duration-700 ease-in delay-[400ms]' : 'opacity-0 translate-y-6'
                            }`}>
            <div className="flex justify-between items-start gap-2 md:gap-6 w-full px-2 sm:px-12 md:px-24 lg:px-32 text-xs sm:text-sm md:text-lg">
              <div className="flex items-start gap-2 md:gap-4">
                <img
                  src={`${process.env.PUBLIC_URL}/mn.jpg`}
                  alt="UofM"
                  className="w-14 h-14 object-cover rounded-md shadow-sm work-logo"
                />
                <div className="text-left">
                  <h2 className="text-sm sm:text-md md:text-lg font-semibold text-slate-100">University of Minnesota</h2>
                  <h4 className="text-xs sm:text-sm md:text-md text-slate-400">Undergraduate Teaching Assistant</h4>
                </div>
              </div>
      
              <p className="text-xs md:text-sm text-slate-400 whitespace-nowrap">Jan 2024 – Jan 2025</p>
            </div>
      
            <div className="text-left text-xs sm:text-sm md:text-lg px-2 sm:px-12 md:px-24 lg:px-32 mt-4 text-slate-300 font-rubik">
                <p>
                Assisted in the instruction and support of 200+ students in a Machine Architecture (CSCI 2021) course, helping students understand computer architecture better through applications of C and Assembly programming languages.
                Facilitated 2-3 weekly lab sessions for 40+ students, assisting with programming concepts, debugging code, and guiding them through 15+ labs and projects.
                Hosted weekly office hours, assisting 25+ students at a time.
                </p>
            </div>
          </div>


        </div>
      );
      
};