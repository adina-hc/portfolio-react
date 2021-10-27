import React from "react";
import Background from "../Background";
import profilePic from "../../images/adina-portfolio.JPG";
import Footer from "../Footer"
import '../../index.css'

export default function Home() {
  return (
    <>
      <Background />
      <main className="h-5/6">
        <div className="absolute md:flex-shrink p-20 justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-picture relative rounded-full h-15 w-15 ring-grey-900 shadow-md flex-grow-0"
          />
        </div>
        <section className="home-page relative flex justify-center md:overflow-scroll  min-h-screen  pt-12 lg:pt-64 px-8">
          <div className="absolute pt-72 md:px-96">
            <h1 className="typewriter home-text text-4xl text-green-100 font-bold cursive leading-none lg:leading-snug ">
              Hello. Welcome. I'm Adina Henderson
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
