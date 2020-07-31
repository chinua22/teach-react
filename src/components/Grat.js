import React from "react";

export default function Grat() {
    return (
        <section id="gratApplication">
            <div id="grat">
                <p className="gratProgress">OUR PROGRESS_________</p>
                <h3>Grat Application Ever</h3>
                <p className="lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiing elit, sed
                    do eiusmod tempor incididunt ut labore et laborused sed do
                    eiusmod tempor incididunt ut labore et laborused
                </p>
                <button className="learnBtn"> LEARN MORE </button>
            </div>
            <div className="twoImages">
                <img
                    src="https://colorlib.com/preview/theme/appy/images/progress-phone.png"
                    alt=""
                    className="img2"
                />
                <img
                    src="https://colorlib.com/preview/theme/appy/images/progress-bg.jpg"
                    alt=""
                    className="img1"
                />
            </div>
        </section>
    );
}
