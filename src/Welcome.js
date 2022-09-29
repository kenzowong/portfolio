import React from 'react';

function Welcome() {
    return (
        <div className="welcome d-flex flex-column justify-content-center align-items-center mx-auto container-fluid w-100 h-100">
            <h1>Hi, I'm Kenzo</h1>
            <h2>I work with the MERN tech stack</h2>

            <div id="contact">
                <ul id="contact-list">
                    <li>
                        <h6 className="flex-centered">Find me on</h6>
                    </li>
                    <li className="icon">
                        <i className="fa-brands fa-github-square fa-2xl"></i>
                        <span>Github</span>
                    </li>
                    <li className="icon">
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                        <span>Linkedin</span>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Welcome;