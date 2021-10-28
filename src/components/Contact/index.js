import React from "react";

import ContactForm from "./ContactForm";
import LinkedIn from "./LinkedIn";


export default function Contact() {
  return (
    <>
      <div className="bg-black">
        <div id="contact-me" className="contents space-x-4">
          <div className="relative p-5 flex-1 inline-block">
            <ContactForm />
            <div className="relative flex-1 inline-block">
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
