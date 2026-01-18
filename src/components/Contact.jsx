import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Make sure EmailJS SDK is installed

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // '', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const email = form.from_email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    // Basic front-end validation
    if (!email || !subject || !message) {
      setStatus("error");
      return;
    }

    // Simple email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    emailjs
      .sendForm(
        "service_ej6gajl", // Your Service ID
        "template_szdx47a", // Your Template ID
        formRef.current, // form reference
        "GhUCqpZ3DpTbHXRy3" // Your User ID / Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success"); // show success message
          form.reset(); // clear the form
        },
        (error) => {
          console.log(error.text);
          setStatus("error"); // show error message
        }
      );
  };

  return (
    <section
      id="contactus"
      className="py-20 dark:bg-gray-950 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-4 mx-auto max-w-screen-md"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 transition-colors duration-300"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 font-light text-center text-gray-600 dark:text-gray-300 sm:text-xl transition-colors duration-300"
        >
          Have a project in mind or just want to say hello? Drop me a message
          below!
        </motion.p>

        <form className="space-y-8" ref={formRef} onSubmit={handleSubmit}>
          {/* Email */}
          <motion.div whileFocusWithin={{ scale: 1.02 }}>
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Email
            </label>
            <input
              type="email"
              placeholder="mail@gmail.com"
              name="from_email"
              required
              className="w-full p-3 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 rounded-lg
              shadow-sm outline-none border border-transparent
              focus:border-[#8228FF] focus:ring-2 focus:ring-[#8228FF]/30 transition-colors duration-300"
            />
          </motion.div>

          {/* Subject */}
          <motion.div whileFocusWithin={{ scale: 1.02 }}>
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Let us know how we can help you"
              required
              className="w-full p-3 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 rounded-lg
              shadow-sm outline-none border border-transparent
              focus:border-[#8228FF] focus:ring-2 focus:ring-[#8228FF]/30 transition-colors duration-300"
            />
          </motion.div>

          {/* Message */}
          <motion.div whileFocusWithin={{ scale: 1.02 }}>
            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Your Message
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="Leave a comment..."
              required
              className="w-full p-3 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 rounded-lg
              shadow-sm outline-none border border-transparent resize-none
              focus:border-[#8228FF] focus:ring-2 focus:ring-[#8228FF]/30 transition-colors duration-300"
            />
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="cursor-pointer mx-auto flex px-10 py-3 rounded-2xl bg-[#8228FF] text-white font-semibold
            border-2 border-[#8228FF] hover:bg-white hover:text-[#8228FF]
            transition-all duration-300"
          >
            Send Message
          </motion.button>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-green-500 mt-2 text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-2 text-center">
              Failed to send message. Please check your details and try again.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
