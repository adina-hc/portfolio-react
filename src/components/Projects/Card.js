import {projectData} from "../../seeds/projectSeed";

const Card = ( {image, name, description, gitHubLink, deployedApp} ) => {
  return (
    <>
      <div className="h-3/6 bg-green-700  dark:bg-gray-800   flex flex-wrap items-center justify-center">
        <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white  shadow-lg    transform duration-200 easy-in-out">
          <div className=" h-32 overflow-auto">
            <img className="w-full" src={projectData.image} alt="" />
          </div>
          <div className=" ">
            <div className="text-center px-14">
              <h2 className="text-gray-800 text-3xl font-bold">{projectData.name}</h2>
              <p className="text-gray-400 mt-2"></p>
              <p className="mt-2 text-gray-600">{projectData.description}, </p>
            </div>
            <hr className="mt-6" />
            <div className="flex bg-gray-50 ">
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>
                  <a href={projectData.gitHubLink} className="font-semibold">
                    GitHub Repo
                  </a>
                </p>
              </div>
              <div className="border"></div>
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>
                  <a href={projectData.deployedApp} className="font-semibold">
                    Deployed App
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
