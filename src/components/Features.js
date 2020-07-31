import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRocket,
    faPaperclip,
    faCloud,
    faClock,
    faDesktop,
    faSatellite,
} from "@fortawesome/free-solid-svg-icons";

export default function Features() {
    return (
        <section className="Complex">
            <div className="Leadhead">
                <h6 id="icon"> _________ FEATURES ________</h6>
                <h4>Powerful Features As Always</h4>
            </div>

            <div className="components">
                <div className="leftComponents">
                    <div id="joined">
                        <FontAwesomeIcon icon={faRocket} id="photed" />

                        <div className="fotos">
                            <h5 className="left">Fast {"&"} Powerful </h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div id="joined">
                        <FontAwesomeIcon icon={faPaperclip} id="photed" />

                        <div className="fotos">
                            <h5 className="left"> Easily Editable </h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div id="joined">
                        <FontAwesomeIcon icon={faCloud} id="photed" />

                        <div className="fotos">
                            <h5 className="left"> Cloud Storage </h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cellPhone">
                    <img
                        src="https://colorlib.com/preview/theme/appy/images/feature-image.png"
                        alt=""
                        id=""
                    />
                </div>
                <div className="rightComponents">
                    <div id="joined">
                        <FontAwesomeIcon icon={faClock} id="photed" />

                        <div className="fotos">
                            <h5 className="left">Fast {"&"} Powerful </h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div id="joined">
                        <FontAwesomeIcon icon={faDesktop} id="photed" />

                        <div className="fotos">
                            <h5 className="left"> Easily Editable </h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div id="joined">
                        <FontAwesomeIcon icon={faSatellite} id="photed" />

                        <div className="fotos">
                            <h5 className="left"> Cloud Storage </h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
