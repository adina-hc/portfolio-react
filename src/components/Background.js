import React from "react";
import bgImage from "../images/hero.png";

function Background() {
    return (
      <div className="absolute ">
        <img
          src={bgImage}
          alt="The Matrix"
          className="items-center justify-center bg-cover bg-center w-full h-full bg-no-repeat bg-cover bg-fixed"
        />
      </div>
    );
}

export default Background;

     