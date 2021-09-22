import React, { useState } from 'react';
import projectSeed from "../seeds/projects.js";

const Card = () => {
    const [projects, setProjects] = useState([projectSeed]);

  return (
    <>
      <div className="flex">
        Cards with projects go here
        <div className="divide-y divide-gray-200">
          {projects.map}((project) => {
            <div key={projectSeed.id} className="py-4 flex">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={projectSeed.image} alt=""/>
              <h2>{projectSeed.title}</h2>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {projectSeed.description}
                </p>
              </div>
            </div>
          }
          )
        </div>
      </div>
    </>
  );
}

export default Card;
