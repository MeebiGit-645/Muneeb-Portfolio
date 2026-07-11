import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Projects({ data }) {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.1);

  // Image mapping based on project titles from mock data
  const projectImageMap = {
    "DIGITAL Legal Advisor - AI Legal Assistant":
      "/assets/digital-legal-advisor.jfif",
    "SkillSwap – Peer-to-Peer Skill Exchange Platform": "/assets/skillswap.jpg",
    "PitchPro – AI Automation & Content Generation Platform":
      "/assets/PitchPro.png",
    "Blog Summarizer & Quote Generator": "/assets/blog-summarizer.png",
    "UML Diagram Editor - Java Desktop Application": "/assets/uml.png",
    "Sustainable Life Assistance": "/assets/sustainable lifestyle.jpeg",
  };

  // Process projects from data and add images
  const processProjects = () => {
    if (!data?.projects || data.projects.length === 0) {
      return [];
    }

    return data.projects.map((project) => ({
      ...project,
      image:
        project.image || projectImageMap[project.title] || "/assets/Live coding demo.png",
      github:
        project.github ||
        `https://github.com/muneeb-codehub/${
          project.title.toLowerCase().split(" ")[0]
        }`,
      live: project.live || null,
    }));
  };

  const projects = processProjects();

  return (
    <section
      id="projects"
      className="min-h-screen py-32 px-6 sm:px-12 bg-dark-bg relative overflow-hidden"
      aria-label="Projects section"
    >
      {/* Wavy separator at top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 sm:h-32 md:h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,120 C150,20 350,120 600,70 C850,20 1050,120 1200,70 L1200,0 Z"
            fill="#171717"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-light-200 to-white bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="bg-gradient-to-r from-light-300 via-light-100 to-light-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-light-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work and experiments
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className={`group bg-gradient-to-br from-dark-700/50 to-dark-600/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-white/10 transition-all duration-500 border-2 border-dark-500/50 transform hover:-translate-y-3 hover:scale-105 ${
                projectsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image (clickable preview) */}
              <div className="relative h-52 md:h-56 lg:h-60 overflow-hidden bg-dark-900">
                {(project.github || project.live) ? (
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 block z-0"
                    aria-label={`Open ${project.title} (live / code)`}
                    title={`Open ${project.title} (live / code)`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                        onLoad={() => console.log(`✅ Image loaded: ${project.image}`)}
                        onError={(e) => {
                          console.error(`❌ Failed to load: ${project.image}`);
                          e.target.onerror = null;
                          e.target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23262626' width='600' height='400'/%3E%3Ctext fill='%239CA3AF' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ENo%20Preview%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-light-400">
                        <svg width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24" height="24" rx="4" fill="#1F2937" />
                          <path d="M7 14l3-3 2 2 5-5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </a>
                ) : (
                  project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-light-400">
                      <svg width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="4" fill="#1F2937" />
                        <path d="M7 14l3-3 2 2 5-5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-light-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-light-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack - Show all that fit, then count remaining */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/5 text-light-300 rounded-md text-xs border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* View Code Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white hover:text-dark-800 text-white rounded-lg font-semibold transition-all duration-300 border-2 border-white/20 hover:border-white group/btn"
                  >
                    <Github
                      size={18}
                      className="group-hover/btn: rotate-12 transition-transform"
                    />
                    <span>View Code</span>
                  </a>

                  {/* Live Demo Button - only show if live URL exists */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-dark-700 to-dark-600 hover:from-white hover:to-light-200 hover:text-dark-800 text-white rounded-lg font-semibold transition-all duration-300 border-2 border-dark-500 hover:border-white"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wavy separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 sm:h-32 md:h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 Z"
            fill="#171717"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
