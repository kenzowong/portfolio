import React from "react";
import Contact from "./Contact";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center mx-auto container-fluid w-100 h-100">
        <div className="d-flex flex-row justify-content-around container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="about-me col-sm-7">
              <h5 className="highlight">Background:</h5>
              <p>
                In 2019, after coming back from a 2 year stint of teaching
                English in China and traveling around in Asia, I attended
                Fullstack Academy for their software engineering bootcamp, but
                withdrew about halfway. It was my first time using Javascript,
                and back-end development in general, so things fell through. It
                was still a great experience, and I really enjoyed working with
                React, PostgreSQL and using tools such as Mapbox and WebSockets.
              </p>
              <p>
                After leaving the bootcamp, I took a job at Ichiran ramen for a
                few months, and then as a waiter for nearly 2 years during the
                pandemic. Looking to go from serving ramen to serving code!
              </p>
              <p>
                At the end of September 2022, I finished "The Web Developer
                Bootcamp 2022" from Colt Steele on Udemy. It is full stack
                Javascript course, using{" "}
                <span className="highlight">HTML / CSS / JS / Bootstrap</span>{" "}
                for the front-end,{" "}
                <span className="highlight">NodeJS / MongoDB</span> for the
                back-end, and <span className="highlight">EJS</span> for
                templating.
              </p>

              <p>
                Currently, I'm working on my portfolio, creating projects, and
                taking another course on React. I'm also looking to also add
                Typescript, TailwindCSS, and C#. I know that there is much to
                learn, bugs to fix, and code to optimize, but I'm having a lot
                of fun on this journey!
              </p>
              <p>Let's chat!</p>

              <Contact />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
