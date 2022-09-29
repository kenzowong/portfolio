import './index.css';
import Navbar from './navbar';
import Welcome from './Welcome';
import Sample from './sample';
import React from 'react';
import Demo from './sample/demo';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Routes } from 'react-router-dom';



function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



function App() {
  return (
    <>
      <Router>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/sample">Sample</Link>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route element={<Navbar />} />
        </Routes>
      </div>

      <Navbar />
        <Welcome />
        <Demo />
        </Router>
  </>
  );
}


export default App;
