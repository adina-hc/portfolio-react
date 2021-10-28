import React from "react";
import HomeBg from "../Home/HomeBg";
import Profile from "../Profile";

import '../../index.css'

export default function Home() {
  return (
    <>
      <HomeBg />
      <section className="min-h-screen bg-black">
        <div className="w-100 h-30 flex items-center justify-center bg-green-900 p-6">
          <div className="content-center justify-center p-20">
            <Profile />
          </div>
          <div className="flex flex-wrap relative flex-grow text-center m-20 justify-center p-8 md:p-10 lg:p-20 opacity-60 rounded-lg">
            <div className="container fcontent-right ">
              <div className="absolute flex-shrink p-5 rounded-lg">
                <h1 className="typewriter inline-block align-middle -mt-5 text-4xl text-white  font-bold cursive leading-none lg:leading-normal">
                  Hello. Welcome. <br />
                  <br />
                  I'm Adina Henderson
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
