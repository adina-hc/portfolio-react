import React from 'react';
import resumeDoc from "../../assets/AH-Resume.pdf";

const Frame = () => {
    return (
      <>
        <div id="resume" className="flex resume p-5">
          <article className="article-content">
            <iframe
              className="h-screen"
              title="Display Resume"
              type="application/pdf"
              src={resumeDoc}
              style={{ height: 670 }}
              frameborder="0"
            ></iframe>
          </article>
        </div>
      </>
    );
}

export default Frame
