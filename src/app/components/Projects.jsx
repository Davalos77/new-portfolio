"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Real Estate Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Jarvis Ai",
    description:
      "ChatGPT variant ai utilizing Vercel OpenAI SDK. Created with NextJs, typescript and tailwindcss.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Davalos77/jarvis-ai",
    previewUrl: "https://jarvis-ai-mu.vercel.app/",
  },
  {
    id: 3,
    title: "Updated Portfolio Website",
    description:
      "Redesigned portfolio website utilizing NextJs. tailwindcss and framer motion",
    image: "/images/projects/3.JPG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Davalos77/new-portfolio",
    previewUrl: "https://davalos.vercel.app/",
  },
  {
    id: 4,
    title: "Rental Admin Dashboard",
    description: "Project 2 description",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davalos77/Rental_Website",
    previewUrl: "https://cabin-in-the-woods-project.vercel.app/dashboard",
  },
  {
    id: 5,
    title: "Travel tracking website",
    description:
      "React based location tracking website utilizing a simple api for database storage",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davalos77/around_the_world",
    previewUrl: "https://around-the-world-beta.vercel.app/",
  },
  {
    id: 6,
    title: "Travel Packing List",
    description: "React project ",
    image: "/images/projects/6.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Davalos77/travel_list",
    previewUrl: "https://travel-list-rust-three.vercel.app/",
  },
  {
    id: 7,
    title: "T-Rex game",
    description: "Offiline Chrome clone game designed in python",
    image: "/images/projects/7.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/Davalos77/dinosaur_game",
    previewUrl: "/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-10">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
