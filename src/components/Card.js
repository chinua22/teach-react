import React from "react";
import Rocket from "../images/rocketlogo.png";
import Business from "../images/business-logo.jpg";
import Medium from "../images/medium-logo.png";

export default function Card() {
    return (
        <section id="cards">
            <div className="eachCard">
                <div className="card1">
                    <img src={Rocket} alt="" />
                    <ol>
                        <li>Easy Installations</li>
                        <li>Unique Element</li>
                        <li>Unlimited support</li>
                    </ol>
                    <p id="price-rate">
                        <sup>$</sup>
                        <span>49</span>
                        <small>/Month</small>
                    </p>
                    <button>Purchase</button>
                </div>
                <div className="card2">
                    <img src={Business} alt="" height="190px" width="250px" />
                    <ol>
                        <li>Easy Installations</li>
                        <li>Free forever</li>
                        <li>Unlimited support</li>
                    </ol>
                    <p id="price-rate">
                        <sup>$</sup>
                        <span>99</span>
                        <small>/Month</small>
                    </p>
                    <button>Purchase</button>
                </div>
                <div className="card3">
                    <img src={Medium} alt="" height="190px" width="270px" />
                    <ol>
                        <li>Easy Installations</li>
                        <li>Unique Element</li>
                        <li>Unlimited support</li>
                    </ol>
                    <p id="price-rate">
                        <sup>$</sup>
                        <span>109</span>
                        <small>/Month</small>
                    </p>
                    <button>Purchase</button>
                </div>
            </div>
        </section>
    );
}
