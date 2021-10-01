import React from "react";
import { projects } from "../seeds/projectSeed";

const Projects2 = () => (
  <div className="eachProject">
    {projects.map(
      ({ id, name, description, image, gitHubLink, deployedApp }) => (
        <div class="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
          <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
            <div class=" h-32 overflow-hidden">
              <img class="w-full" src={image} alt="" />
            </div>
            <div class="flex justify-center px-5  -mt-12">
              <img
                class="h-32 w-32 bg-white p-2 rounded-full   "
                src={image}
                alt=""
              />
            </div>
            <div class=" ">
              <div class="text-center px-14">
                <h2 class="text-gray-800 text-3xl font-bold">{name}</h2>
                <p class="text-gray-400 mt-2">@immohitdhiman</p>
                <p class="mt-2 text-gray-600">{description}, </p>
              </div>
              <hr class="mt-6" />
              <div class="flex  bg-gray-50 ">
                <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                  <p>
                    <a href={gitHubLink} class="font-semibold">
                      GitHub Repo
                    </a>
                  </p>
                </div>
                <div class="border"></div>
                <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                  <p>
                    <a href={deployedApp} class="font-semibold">
                      Deployed App
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    )}
  </div>
);
       

export default Projects2;
