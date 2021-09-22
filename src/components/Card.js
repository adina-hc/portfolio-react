import React, { useState } from 'react';
import projects from "../seeds/projects.js";

const Card = () => {
    const [project, setProject] = useState([projects]);

  return (
    <>
      <div className="flex">
        Cards with projects go here
        <div className="divide-y divide-gray-200">
          {projects.map}((project) => {
            <div key={projects.id} className="py-4 flex">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={projects.image}
              />
              <h2>{projects.title}</h2>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {projects.description}
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
