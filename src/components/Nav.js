import React from "react";

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
                        <a href="/home">
                            <li>Home</li>
                        </a>
                        <a href="/about">
                            <li>About</li>
                        </a>
                        <a href="/features">
                            <li>Features</li>
                        </a>
                        <a href="/gallery">
                            <li>Gallery</li>
                        </a>
                        <a href="/pricing">
                            <li>Pricing</li>
                        </a>
                        <a href="/faq">
                            <li>FAQ</li>
                        </a>
                        <a href="/blog">
                            <li>Blog</li>
                        </a>
                        <a href="/contact">
                            <li>Contact</li>
                        </a>
                    </ul>
                </nav>
            </div>
            <button className="btn1">SIGN UP</button>
        </div>
    );
}
