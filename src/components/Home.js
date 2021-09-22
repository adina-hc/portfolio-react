import React from "react";
import Background from "./Background";
import profilePic from "../images/adina-portfolio.JPG";


export default function Home() {
  return (
    <main>
      <Background />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-60 px-60">
        <img
          src={profilePic}
          alt="Profile"
          className="profile-picture flex rounded-full h-80 w-80 ring-green-900 shadow-lg items-center justify-center"
        />
        <div className="flex ">
          <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-title">
            Hello. I am Adina.
          </h1>
        </div>
      </section>
    </main>
  );
}
