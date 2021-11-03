import React from 'react';
import resumeDoc from "../../assets/AH-Resume.pdf";

const Frame = () => {
    return (
      <>
        <div id="resume" className="flex resume p-20 min-w-max">
          <article className="article-content min-w-max">
            <iframe
              className="h-screen"
              title="Display Resume"
              type="application/pdf"
              src={resumeDoc}
              style={{ height: 670, weigth: 100 }}
              frameborder="0"
            ></iframe>
          </article>
        </div>
      </>
    );
}

export default Frame
