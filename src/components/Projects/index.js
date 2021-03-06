import React from "react";
import Card from '../Projects/Card';
import { projectData } from "../../seeds/projectSeed";


const Projects = () => {
  
  return (
    <>
      <div className="bg-yellow-100 opacity-90">
        
          <div className=" ">
            {projectData.map((project, index) => {
              return <Card {...project} />;
            })}
          </div>

      </div>
    </>
  );
};

export default Projects;
