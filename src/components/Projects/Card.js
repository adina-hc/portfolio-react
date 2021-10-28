

const Card = ({
  image,
  name,
  description,
  technologies,
  gitHubLink,
  deployedApp,
}) => {
  console.log(image);
  return (
    <>
      <section className="p-6 pt-6 h-3/6 dark:bg-black-900 flex flex-wrap items-center justify-center ">
        <div className="  container shadow-2xl lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-black-900 opacity-80 shadow-lg transform duration-200 easy-in-out">
          <div className=" h-70 overflow-hidden max-w shadow-lg">
            <img className="w-full h-1/3" src={image} alt="" />
          </div>
          <div className="bg-black opacity-90 ">
            <div className="text-center px-10 ">
              <h2 className="text-2xl font-bold text-white">{name}</h2>
              <p className="mt-2 text-sm text-white text-justify bg-black-900 opacity-90">
                {description}{" "}
              </p>
            </div>
            <hr className="mt-6" />

            <div className="inline rounded-lg justify-center bg-green">
              <h2 className="font-semibold text-white text-center text-2xl pb-2">Technologies</h2>
              <p className="p-3 rounded-lg opacity-40 text-white text-sm bg-black">
                {technologies}
              </p>
            </div>

            <hr className="mt-1" />
            <div className="flex bg-gray-50 ">
              <div className="text-center w-1/2 p-3 hover:bg-gray-100 cursor-pointer">
                <p>
                  <a href={gitHubLink} className="font-semibold">
                    GitHub Repo
                  </a>
                </p>
              </div>
              <div className="border"></div>
              <div className="text-center w-1/2 p-3 hover:bg-gray-100 cursor-pointer">
                <p>
                  <a href={deployedApp} className="font-semibold">
                    Deployed App
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
