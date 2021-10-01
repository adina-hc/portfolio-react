import React from "react";
import { projects } from "../seeds/projectSeed";

const Projects = () => (
  <section id="projectCards">
    <div>
      <h1 className="projectName">Projects</h1>
      <div className="eachProject">
        {projects.map(
          ({ id, name, description, image, gitHubLink, deployedApp }) => (
            <div className="flex flex-wrap justify-center">
              <h2 className="font-bold text-xl text-center md:text-3xl md:mt-12">
                {name}
              </h2>
              <div className="divide-y divide-gray-200">
                <div key={id} className="py-4 flex">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={image}
                    alt=""
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {description}
                    </p>
                  </div>
                  <div className="externalLinks">
                    <a
                      href={gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >Code</a>
                    <a
                      href={deployedApp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >Deployed App</a>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

export default Projects;
