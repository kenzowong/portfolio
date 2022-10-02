import React from 'react';
import Home from './Home';
import Projects from './Projects';
import About from './About';

import { AnimatePresence } from 'framer-motion';
import {
    Route,
    Routes,
    useLocation
  } from "react-router-dom";

function AnimatedRoutes() {

  const location = useLocation();
    return (
        <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;