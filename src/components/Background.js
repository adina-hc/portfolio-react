import React from "react";
import bgImage from "../assets/images/the-matrix.png";

function Background() {
    return ( 
        <img
        src={bgImage}
        alt="The Matrix"
        className="absolute object-cover w-full h-full"
      />
    );
}

export default Background;

     