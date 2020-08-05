import React from "react";
import { Link } from "react-scroll";

export default function () {
    return (
        <div id="NavPane">
            <Link to="secondPhase" smooth duration={2000}>
                <img
                    src="https://colorlib.com/preview/theme/appy/images/logo.png"
                    alt=""
                />
            </Link>

            <div className="nav-bar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="about-appy" smooth duration={2000}>
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="features-section" smooth duration={2000}>
                                Features
                            </Link>
                        </li>

                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="faq-section" smooth duration={2000}>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="Contact" smooth duration={2000}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <button className="btn1">SIGN UP</button>
        </div>
    );
}
