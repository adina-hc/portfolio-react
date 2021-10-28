import React from "react";

import ContactForm from "./ContactForm";
import LinkedIn from "./LinkedIn";


export default function Contact() {
  return (
    <>
      <section className="min-h-screen bg-black">
        <div className="bg-black pt-12 max-h-full">
          <div id="contact-me" className="contents space-x-4">
            <div className="relative p-5 flex-1 inline-block">
              <ContactForm />
              <div className="relative flex-1 inline-block">
                <LinkedIn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
