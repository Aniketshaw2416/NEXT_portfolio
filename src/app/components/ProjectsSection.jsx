"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NEXT Portfolio Website",
    description: "It provides a dynamic and interactive representation of a my professional journey, skills, and achievements.",
    image: "/images/projects/1.png",
    tag: ["All", "WEB"],
    gitUrl: "/",
    previewUrl: "https://next-portfolio-6ytz.vercel.app/",
  },
  {
    id: 2,
    title: "COKE landing page",
    description: "Landing page of the Coco Cola website, built using HTML and CSS",
    image: "/images/projects/2.png",
    tag: ["All", "WEB"],
    gitUrl: "https://github.com/Aniketshaw2416/OIBSIP_intern/tree/main/oasisinfobyte/landing-coke",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Shows my professional journey",
    image: "/images/projects/3.png",
    tag: ["All", "WEB"],
    gitUrl: "https://github.com/Aniketshaw2416/CodeClauseInternship_Portfolio-Website",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Amazon Clone",
    description: "It provides a seamless experience of the amazon clone website",
    image: "/images/projects/4.png",
    tag: ["All", "WEB"],
    gitUrl: "https://github.com/Aniketshaw2416/amazon1",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Live DocS",
    description: "Live Editing and collabrative Docs",
    image: "/images/projects/5.png",
    tag: ["All", "WEB"],
    gitUrl: "https://github.com/Aniketshaw2416/Live-DocS",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Image to Braille",
    description: "Converts Image into Braille Scripts , that helps blind to Read and Understand",
    image: "/images/projects/6.jpgs",
    tag: ["All", "AI/ML"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
          name="WEB"
          isSelected={tag === "WEB"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
