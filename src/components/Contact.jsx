import React from "react";

const Contact = () => {
  return (
    <section id="contactus">
      <h1 className="text-center font-bold text-4xl mt-8"></h1>
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Let's Connect
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Have a project in mind or just want to say hello? Drop me a message
            below!
          </p>

          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="mail@gmail.com"
                required
              />
            </div>
            
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm outline-none"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm outline-none"
                placeholder="Leave a comment..."
              />
            </div>

            <button
              type="submit"
              className="flex px-10 items-center justify-center gap-1 rounded-2xl bg-[#8228FF] p-5 py-3 font-semibold hover:bg-[#DCDDDF] hover:text-[#8228FF] border-2 border-[#8228FF]  cursor-pointer text-white">
              Send message
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
