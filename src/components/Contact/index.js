import React from "react";
import Background from "../Background";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <Background />
      <section id="contact-me" className="contact-me">
        <div className="center-content">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
