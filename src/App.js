import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Start from "./components/Start";
import About from "./components/About";
import Grat from "./components/Grat";
import VideoFeatures from "./components/VideoFeatures";
import Features from "./components/Features";
import Ourfeatures from "./components/Ourfeatures";
import Testimonial from "./components/Testimonial";
import Download from "./components/Download";
import Card from "./components/Card";
import FAQ from "./components/FAQ";
import Subscribe from "./components/Subscribe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router basename="/">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Start}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/features" component={Grat}></Route>
                    <Route path="/gallery" component={VideoFeatures}></Route>
                    <Route path="/pricing" component={Features}></Route>
                    <Route path="/faq" component={Ourfeatures}></Route>
                    <Route path="/blog" component={Testimonial}></Route>
                    <Route path="/contact" component={Download}></Route>
                    <Route path="/about" component={Card}></Route>
                    <Route path="/features" component={FAQ}></Route>
                    <Route path="/contact" component={Subscribe}></Route>
                    <Route path="/blog" component={Contact}></Route>
                    <Route path="/about" component={Footer}></Route>
                </Switch>
            </Router>
        </div>
    );
}
//
