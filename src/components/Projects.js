import React, { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

import { Container } from "./common"

import { projects } from "../data/projects"

import "./project.css"


const Project = () => {
  const projectsName = Object.keys(projects)
  const [selectedProject, setSelectedProject] = useState(projectsName[0])
  const selectedFeaturedProjects = projects[selectedProject].filter(
    project => project.type === "featured"
  )
  const selectedProjects = projects[selectedProject].filter(
    project => project.type === "regular"
  )
  return (
    <div id="portfolio" className="portfolio-area">
      <Container>
        <div className="title left" style={{ height: "160px" }}>
          <p>Work</p>
        </div>
        <div className="portfolios">
          <ul className="portfolio-nav">
            {projectsName.map(name => (
              <li
                onClick={() => setSelectedProject(name)}
                className={name === selectedProject ? "active" : ""}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
          <div className="portfolio-items portfolios-featured">
            {selectedFeaturedProjects.map((project, index) => (
               
              <div key={index} className="portfolio">
                <div className="portfolio-img">
                  <img alt={project.name} src={project.image} width="100%" height="300px" />
                </div>
                <div className="details">
                  <h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.demo}
                    >
                      {project.name}
                    </a>
                  </h4>
                  <p>{project.description}</p>
                  <div className="links">
                    <ul>
                      {project.source && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.source}
                          >
                            <FaGithub />
                          </a>
                        </li>
                      )}
                      {project.demo && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.demo}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ul className="portfolio-tools">
                    {project.tools.map(tool => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-items portfolios-regular">
            {selectedProjects.map((project, index) => (
              <div key={index} className="portfolio small">
                <div className="portfolio-img">
                  <img alt={project.name} src={project.image} />
                </div>
                <div className="details">
                  <h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.demo}
                    >
                      {project.name}
                    </a>
                  </h4>
                  <p>{project.description}</p>
                  <div className="links">
                    <ul>
                      {project.source && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.source}
                          >
                            <FaGithub />
                          </a>
                        </li>
                      )}
                      {project.demo && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.demo}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ul className="portfolio-tools">
                    {project.tools.map(tool => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </Container>
    </div>
  )
}

export { Project }