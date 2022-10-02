import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home d-flex flex-column align-items-center mx-auto container-fluid w-100 h-100">
        <div className="d-flex flex-row">
          <div className="row d-flex">
            <div className="d-flex flex-column">
              <div className="home-intro">
                <h1>
                  Hi, I'm <span className="highlight-name">Kenzo Wong</span>
                </h1>
                <h1>
                  I'm a web developer in{" "}
                  <span className="highlight-city">NYC</span>
                </h1>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center home-blurb">
                <p className="highlight">I have some experience using:</p>

                <div className="d-flex flex-column home-blurb-tools">
                  <p>HTML, CSS, Javascript, Bootstrap, EJS, React, Redux</p>
                  <p>
                    Express, NodeJS, MongoDB, Mongoose, PostgreSQL, Sequelize
                  </p>
                  <p>Git, Github, Mapbox, Websockets</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
