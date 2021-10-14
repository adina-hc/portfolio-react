import React, {useState} from "react";
import Card from '../Projects/Card';
import Background from "../Background";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const Projects = (projectData) => {
  const [current, setCurrent] = useState(0);
  const length = projectData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0: current + 1);
  }
  const priorSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(projectData) || projectData.lenght <= 0) {
    return null;
  }

  return (
    <main>
      <Background />
      <section className="slider eachProject">
        <FaArrowAltCircleLeft className="left-arrow" onClick={priorSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {projectData.map((project, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index} === current && (<Card {...project} />)
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Projects;
