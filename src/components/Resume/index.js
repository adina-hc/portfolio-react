// Import resources
import React from 'react';

import resumeDoc from '../../assets/AH-Resume.pdf';

export default function resume() {
  return (
    <>
      <section
        id="resume"
        className="flex resume hero-img bg-cover  content-center bg-green-900  h-screen"
      >
        <article className="article-content">
          <iframe
            title="Display Resume"
            type="application/pdf"
            src={resumeDoc}
            style={{ height: 620 }}
            frameborder="0"
          ></iframe>
        </article>
      </section>
    </>
  );
}




    



