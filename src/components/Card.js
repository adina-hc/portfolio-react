import projectSeed from "../seeds/projects.js";

const Card = () => {

  return (
    <>
      
        <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="divide-y divide-gray-200">
            <div key={projectSeed.id} className="py-4 flex">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={projectSeed.image}
                alt=""
              />
              <h2>{projectSeed.title}</h2>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {projectSeed.description}
                </p>
              </div>
            </div>
          </div>
        </div>     
    </>
  )}

export default Card;
