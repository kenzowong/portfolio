import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import { Routes } from 'react-router-dom';
import Sample from './sample';
import Sample2 from './sample/sample2';

/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar() {

    return (
    <div className="container">
        <nav className="navbar p-1 mx-auto navbar-expand-sm navbar-light sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggle">
                <ul className="navbar-nav mr-auto mt-2">
                    <li className="nav-item active">
                        <Link to='/sample' className="nav-link">Sample</Link>
                        </li>
                        <li className="nav-item active">
                        <Link to='/sample2' className="nav-link">Sample2</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            </nav>
            
<Routes>
                <Route path='/sample' element={<Sample />} />
                
<Route path='/sample2' element={<Sample2 />} />
</Routes>
        </div>
    )

    
}

export default Navbar;