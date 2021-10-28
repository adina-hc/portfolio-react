import React from "react";
import Background from "../Background";
import Profile from "../Profile";

export default function About() {
  return (
    <>
      <Background />
      
      <div className="pt-40 min-h-screen bg-black">
        <div className="w-100 h-5/6 flex items-center justify-center bg-black p-16">
          <div className="relative  w-5/6 h-auto bg-green-900 opacity-90 rounded-lg pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
            <div className="absolute rounded-full bg-green-900 opacity-90 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
              <div className="rounded-full bg-black opacity-90 w-full h-full">
                <Profile />
              </div>
            </div>

            <label className="font-sans font-bold text-white text-lg">
              Full stack web developer
            </label>
            <div className=" bg-grey-900 opacity-50 rounded-md">
              <p className="font-sans p-3 text-justify text-white text-sm mt-2 leading-relaxed">
                Educated at Tecnologico de Monterrey
                <br />
                Worked with HTML, CSS, JavaScript, among other technologies.{" "}
                <br />
                <br />
                Passionate about database and software design, data analysis,
                quality assurance, etc.
                <br />
                Recently worked in diverse projects including different
                technologies: MERN, React, Databases (SQL and NoSQL), node.js,
                JavaScript, among others.
                <br />
                <br />
                Coming from a Business, Accounting & Auditing, Finance and
                Consulting background, I am eager to leap into the Technology
                field. I love challenge, learning, languages, music, and dance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
