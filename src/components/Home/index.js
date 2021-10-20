import React from "react";
import Background from "../Background";
import profilePic from "../../assets/images/adina-portfolio.JPG";
import Footer from "../Footer"
import '../../index.css'

export default function Home() {
  return (
    <>
      <div>
        <Background />
        <section className="absolute flex flex-wrap justify-center min-h-full pt-5 md:pt-30 px-60 h-full">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-picture static rounded-full h-20 w-20 ring-grey-900 shadow-lg"
          />
          <div className="pt-2 ">
            <h1 className="typewriter text-3xl text-green-100 font-bold cursive leading-none lg:leading-snug home-title">
              Hello. Welcome.
            </h1>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
