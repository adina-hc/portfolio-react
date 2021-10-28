import React from "react";

export default function ContactForm() {
  return (
    <div className="p-2 ">
      <div className="p-2 content-left rounded-lg ">
        <form
          class="p-8 items-start w-full m-h-full bg-green-90"
          action="https://formsubmit.co/ahenderson.career@gmail.com"
          method="POST"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-11/12 text-white">
              <label
                htmlFor="grid-first-name"
                className="block tracking-wide text-white text-lg font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="no-resize block w-full bg-gray-200 text-white border border-green-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 ">
              <div className="w-11/12 px-3">
                <label
                  class="block tracking-wide text-white text-lg font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="no-resize block w-full bg-gray-200 text-white border border-green-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  required
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://mydomain.com/thanks.html"
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-11/12 px-3">
                  <label
                    htmlFor="grid-password"
                    class="block tracking-wide text-white text-lg font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="60"
                    rows="10"
                    class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-green-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                  <p className="text-gray-600 text-xs italic"></p>
                </div>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-2/3">
                  <button
                    type="submit"
                    className="opacity-100 shadow bg-green-900 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 py-2 px-4 rounded"
                  >
                    Send
                  </button>

                  <p className="text-white pt-5">Or email me: ahenderson.mail@gmail.com</p>
                </div>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
