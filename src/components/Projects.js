import {React, useRef, useEffect, useState} from "react";
import ProjectCard from "./ProjectCard";
import { Container, Stack, Box } from "@mui/material";

const projects = [
    {
        name: "Travelgram", 
        description: "Travelgram is a full-stack social media app for travelers to share their trips, connect with friends, and explore new destinations. It features user authentication, photo uploads via Cloudinary, and real-time messaging using Socket.io. Utilizes the Google Maps API for interactive trip visualization, and features like a bucket list, friend system, and trip sharing to enhance the social experience.",
        technologies: ["Express.js", "React", "MongoDB", "Tailwind CSS", "Socket.io", "Cloudinary"],
        picture: `${process.env.PUBLIC_URL}/travelgram.jpeg`,
        githubUrl: "https://github.com/chaseblodgett/travelgram",
        liveUrl: "https://travelgram-app-0bcf3d977e1b.herokuapp.com/home"
    },
    {
        name: "Transfer My Bib", 
        description: "A full-stack marketplace and forum designed to facilitate buying and selling race bibs for over 100 US-based road races. The platform supports user account management, threaded posts, comments, and community discussions.",
        technologies: ["Express.js", "React", "MongoDB", "Tailwind CSS"],
        picture: `${process.env.PUBLIC_URL}/transfermybib.jpeg`,
        githubUrl: "https://github.com/chaseblodgett/transfermybib",
        liveUrl: "https://transfermybib-b27aa46b536b.herokuapp.com/"
    },
    {
        name: "AI Chess & Checkers Mobile App", 
        description: "A mobile app where users play checkers or chess against an AI powered by alpha-beta pruning and custom heuristics. It includes a custom-built chess engine designed for efficient move generation and evaluation. Features include adjustable difficulty, AI tournaments, and performance tracking using metrics like win rate, move count, and thinking time.",
        technologies: ["Python", "Flask", "React Native", "Tailwind CSS"],
        picture:`${process.env.PUBLIC_URL}/checkers.jpg`,
        githubUrl: "https://github.com/chaseblodgett/checkers_mobile",
    },
    {
        name: "Personal Portfolio Site", 
        description: "Personal portfolio website to showcase my projects, skills, experience, and achievements in an interactive and professional way.",
        technologies: ["React", "Tailwind CSS", "MUI"],
        picture:`${process.env.PUBLIC_URL}/portfolio.png`,
        githubUrl: "https://github.com/chaseblodgett/chaseblodgett/recipeapp",
        liveUrl: "https://chaseblodgett.github.io/chaseblodgett/"
    },
    {
        name: "Recipe Finder", 
        description: "Mobile app to find recipes given a certain ingredient list. Allows user to search for dishes to make with the ingredients they have.",
        technologies: ["Python", "Flask", "React Native", "Tailwind CSS"],
        picture:`${process.env.PUBLIC_URL}/recipeapp.png`,
        githubUrl: "https://github.com/chaseblodgett/",
    }
]


export default function Projects() {
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

  return (
    <Box className="min-h-screen bg-transparent text-center">
        <h1
        ref={headerRef}
        className={`text-5xl md:text-6xl font-bold text-slate-300 px-4 pt-24 pb-2 underline-behind ${
            headIsVisible
            ? "animate-slide-in-right delay-[500ms]"
            : "opacity-0 translate-x-8"
        }`}
        >
        Projects
        </h1>

        <Container
            ref={bodyRef}
            maxWidth={false} 
            sx={{
                pt: 8,
                display: "flex",
                justifyContent: "center",
            }}
        >
        <Stack
            spacing={4}
            sx={{
            width: "100%",
            alignItems: "center",
            }}
        >
            {projects.map((project, index) => (
            <Box
                key={index}
                sx={{
                width: {
                    xs: "100%", 
                    sm: "90%",
                    md: "85%",
                    lg: "80%",
                },
                transition: "all 700ms ease",
                transitionDelay: `${index * 150 + 400}ms`,
                transform: bodyIsVisible
                    ? "translateY(0px)"
                    : "translateY(24px)",
                opacity: bodyIsVisible ? 1 : 0,
                }}
            >
                <ProjectCard {...project} />
            </Box>
            ))}
        </Stack>
        </Container>
    </Box>
    );
}