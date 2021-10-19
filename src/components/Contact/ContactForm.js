import React from "react";

export default function ContactForm() {
  return (
    <div className="content-center">
      <form
        class="w-full max-w-lg"
        action="https://formsubmit.co/ahenderson.career@gmail.com"
        method="POST"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="grid-first-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="block w-full bg-gray-200 text-gray-700 border border-green-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              placeholder="Full Name"
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              <div className="w-full px-3">
                <label
                  htmlFor="grid-password"
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                ></textarea>
                <p className="text-gray-600 text-xs italic"></p>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <button
                type="submit"
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Send
              </button>
            </div>
            <div class="md:w-2/3"></div>
          </div>
        </div>
      </form>
    </div>
  );
}
