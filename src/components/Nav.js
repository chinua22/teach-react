import React from "react";
import { Link } from "react-router-dom";

export default function () {
    return (
        <div id="NavPane">
            <img
                src="https://colorlib.com/preview/theme/appy/images/logo.png"
                alt=""
            />

            <div className="nav-bar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/features">Features</Link>
                        </li>

                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <button className="btn1">SIGN UP</button>
        </div>
    );
}
