import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative h-5/6 opacity-100"></div>
      <footer className="bg-black flex-none ">
        <div className="p-6">
          <span className="footer p text-base items-center justify-between p-4 m-auto text-white">
            &copy;2021
          </span>
          <span className="footer p text-base items-right space-x-reverse p-4 m-auto text-white">
            ahenderson.career@gmail.com
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
