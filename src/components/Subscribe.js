import React from "react";

export default function Subscribe() {
    return (
        <section id="subscribe">
            <div id="features">
                <form action="register">
                    <p className="sub">Subscribe for More Features</p>
                    <input type="text" placeholder="Enter Your Email" />
                    <button id="buttons">Subscribe</button>
                </form>
            </div>
        </section>
    );
}
