import React from "react";

import ContactForm from "./ContactForm";
import LinkedIn from "./LinkedIn";


export default function Contact() {
  return (
    <>
      <section className="min-h-screen bg-black">
        <div
          id="contact-me"
          className="contents space-x-4 bg-blue-100 p-10 min-w-min "
        >
          <div className="relative p-5 inline-block">
            <ContactForm />
          </div>
        </div>

        <div className="relative inline-block rounded-md m-6 w-auto ">
          <div className="p-2 min-w-min inline-block  rounded-md mx-2 object-cover">
            <LinkedIn />
          </div>
        </div>
      </section>
    </>
  );
}
