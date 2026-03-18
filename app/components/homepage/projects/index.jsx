'use client';

import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openProjectId, setOpenProjectId] = useState(null);

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <button
        type="button"
        className="sticky top-10 w-full text-left cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
      >
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </button>

      <div className="pt-24">
        <div
          className={`flex flex-col gap-6 transition-all duration-300 ${
            isExpanded ? 'lg:w-[calc(100%+6rem)] lg:-mx-12' : ''
          }`}
        >
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="w-full mx-auto"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard
                  project={project}
                  isOpen={openProjectId === project.id}
                  onToggle={() =>
                    setOpenProjectId((prev) => (prev === project.id ? null : project.id))
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
