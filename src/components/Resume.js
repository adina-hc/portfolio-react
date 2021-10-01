// Import resources
import React from 'react';
import resumeDoc from '../assets/images/AH-Resume.pdf';


export default function resume() {
  return (
    <>
      <div className="subtitle-resume subtitles">
        <h1>Resume</h1>
      </div>
      
      <div>
        <section id="resume" className="resume h-screen">
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
      </div>
    </>
  );
}




    



