import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationArrow,
    faPhone,
    faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <section id="Contact">
            <div className="contacted">
                <span> _________ CONTACT US _______</span>
                <p>Find Us By Below Details</p>
            </div>

            <div className="flow">
                <div className="flowserial">
                    <FontAwesomeIcon icon={faLocationArrow} width="30px" />
                    <figcaption>
                        8-54 Paya Lebar Square
                        <br /> 60 Paya Lebar Roa SG, Singapore
                    </figcaption>
                </div>

                <div className="flowserial">
                    <FontAwesomeIcon icon={faPhone} />
                    <figcaption>
                        80056739-123
                        <br /> 60987633-345
                    </figcaption>
                </div>

                <div className="flowserial">
                    <FontAwesomeIcon icon={faVoicemail} />
                    <figcaption>
                        yourmail@gmail.com
                        <br />
                        backpiper.com@gmail.com
                    </figcaption>
                </div>
            </div>
        </section>
    );
}
