import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Navbar from "./Navbar";
import "./envision.png";
// import "../disability.png"
import "./disability.png"

const Home = () => {
    useEffect(() => {
        const sr = ScrollReveal(); // Use ScrollReveal here

        // Place your JavaScript code here
        (function () {
            const doc = document;
            const rootEl = doc.documentElement;
            const body = doc.body;
            const lightSwitch = doc.getElementById("lights-toggle");

            rootEl.classList.remove("no-js");
            rootEl.classList.add("js");

            window.addEventListener("load", function () {
                body.classList.add("is-loaded");
            });

            // Reveal animations
            function revealAnimations() {
                sr.reveal(".feature", {
                    duration: 600,
                    distance: "20px",
                    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                    origin: "right",
                    viewFactor: 0.2,
                });
            }

            if (body.classList.contains("has-animations")) {
                window.addEventListener("load", revealAnimations);
            }

            // Light switcher
            if (lightSwitch) {
                window.addEventListener("load", checkLights);
                lightSwitch.addEventListener("change", checkLights);
            }

            function checkLights() {
                let labelText =
                    lightSwitch.parentNode.querySelector(".label-text");
                if (lightSwitch.checked) {
                    body.classList.remove("lights-off");
                    if (labelText) {
                        labelText.innerHTML = "dark";
                    }
                } else {
                    body.classList.add("lights-off");
                    if (labelText) {
                        labelText.innerHTML = "light";
                    }
                }
            }
        })();
    }, []);

    return (
        <>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>Switch Template</title>
            <link
                href="https://fonts.googleapis.com/css?family=Heebo:400,700|IBM+Plex+Sans:600"
                rel="stylesheet"
            />
            <script src="/dist/js/main.min.js"></script>
            <link rel="stylesheet" href="/dist/css/style.css"/>
            <link rel="stylesheet" href="css/style.css"/>

            <div className="body-wrap boxed-container" >
                <header className="site-header"  >
                    <div className="container" > 
                     <div className="site-header-inner">
                            <div className="brand header-brand" >
                            </div>
                        </div> 
                    </div> 
                    <Navbar />
                </header>
                <main>
                    <section className="hero">
                        <div className="container">
                            <div className="hero-inner">
                                <div className="hero-copy">
                                    <h1 className="hero-title mt-0">
                                        Our Motto
                                    </h1>
                                    <p className="hero-paragraph">
                                        To create a service which helps differently abled people to give them a chance to showcase their abilities and bring them the opportunities they deserve.
                                    </p>
                                    <div className="hero-cta">
                                        <a
                                            className="button button-primary"
                                            href="/Signup2"
                                        >
                                            Get Started!
                                        </a>
                                        <div className="lights-toggle">
                                            <input
                                                id="lights-toggle"
                                                type="checkbox"
                                                name="lights-toggle"
                                                className="switch"
                                                defaultChecked="checked"
                                            />
                                            <label
                                                htmlFor="lights-toggle"
                                                className="text-xs"
                                            >
                                                <span>
                                                    Turn me{" "}
                                                    <span className="label-text">
                                                        dark
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-media">
                                    <div className="header-illustration">
                                        <img
                                            className="header-illustration-image asset-light"
                                            src="/dist/images/header-illustration-light.svg"
                                            alt="Header illustration"
                                        />
                                        <img
                                            className="header-illustration-image asset-dark"
                                            src="/dist/images/header-illustration-dark.svg"
                                            alt="Header illustration"
                                        />
                                    </div>
                                    <div className="hero-media-illustration">
                                        <img
                                            className="hero-media-illustration-image asset-light"
                                            src="/dist/images/hero-media-illustration-light.svg"
                                            alt="Hero media illustration"
                                        />
                                        <img
                                            className="hero-media-illustration-image asset-dark"
                                            src="/dist/images/hero-media-illustration-dark.svg"
                                            alt="Hero media illustration"
                                        />
                                    </div>
                                    <div className="hero-media-container">
                                        <div style={{ width: "300px", height: "300px"}}>
                                            <dotlottie-player src="https://lottie.host/28439c5b-e0f3-4d4c-9c3c-ed137a657005/bgI1ZkLvzL.json"  background="transparent" speed="1" loop autoplay></dotlottie-player></div>
                                        {/* <img
                                            className="hero-media-image asset-light"
                                            src="/dist/images/hero-media-light.svg"
                                            alt="Hero media"
                                        /> */}
                                        {/* <img
                                            className="hero-media-image asset-dark"
                                            src="/dist/images/hero-media-dark.svg"
                                            alt="Hero media"
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="features section">
                        <div className="container">
                            <div className="features-inner section-inner has-bottom-divider">
                                <div className="features-header text-center">
                                    <div className="container-sm">
                                        <h2 className="section-title mt-0">
                                        Empowering abilities, Enriching lives.
                                        </h2>
                                        <p className="section-paragraph">
                                           
                                        </p>
                                        <div className="features-image">
                                            <img
                                                className="features-illustration asset-dark"
                                                src="/dist/images/features-illustration-dark.svg"
                                                alt="Feature illustration"
                                            />
                                            <img
                                                className="features-box asset-dark"
                                                src={require('./disability.png')}
                                                alt="Feature box"
                                            />
                                            {/* <img
                                                className="features-illustration asset-dark"
                                                src="/dist/images/features-illustration-top-dark.svg"
                                                alt="Feature illustration top"
                                            /> */}
                                            <img
                                                className="features-illustration asset-light"
                                                src="/dist/images/features-illustration-light.svg"
                                                alt="Feature illustration"
                                            />
                                            <img
                                                className="features-box asset-light"
                                                src={require('./disability.png')}
                                                alt="Feature box"
                                            />
                                            {/* <img
                                                className="features-illustration asset-light"
                                                src="/css/images/features-illustration-top-light.svg"
                                                alt="Feature illustration top"
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="features-wrap">
                                    <div className="feature is-revealing">
                                        <div className="feature-inner">
                                            <div className="feature-icon">
                                                <img
                                                    className="asset-light"
                                                    src="/dist/images/feature-01-light.svg"
                                                    alt="Feature 01"
                                                />
                                                <img
                                                    className="asset-dark"
                                                    src="/dist/images/feature-01-dark.svg"
                                                    alt="Feature 01"
                                                />
                                            </div>
                                            <div className="feature-content">
                                                <h3 className="feature-title mt-0">
                                                    Discover
                                                </h3>
                                                <p className="text-sm mb-0">
                                                    Job opportunities according to the user’s requirements
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature is-revealing">
                                        <div className="feature-inner">
                                            <div className="feature-icon">
                                                <img
                                                    className="asset-light"
                                                    src="/dist/images/feature-02-light.svg"
                                                    alt="Feature 02"
                                                />
                                                <img
                                                    className="asset-dark"
                                                    src="/dist/images/feature-02-dark.svg"
                                                    alt="Feature 02"
                                                />
                                            </div>
                                            <div className="feature-content">
                                                <h3 className="feature-title mt-0">
                                                    Discover
                                                </h3>
                                                <p className="text-sm mb-0">
                                                    Marketplace for users to sell their products
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature is-revealing">
                                        <div className="feature-inner">
                                            <div className="feature-icon">
                                                <img
                                                    className="asset-light"
                                                    src="/dist/images/feature-03-light.svg"
                                                    alt="Feature 03"
                                                />
                                                <img
                                                    className="asset-dark"
                                                    src="/dist/images/feature-03-dark.svg"
                                                    alt="Feature 03"
                                                />
                                            </div>
                                            <div className="feature-content">
                                                <h3 className="feature-title mt-0">
                                                    Discover
                                                </h3>
                                                <p className="text-sm mb-0">
                                                    A platform to showcase your artistic side.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="cta section">
                        <div className="container-sm">
                            <div className="cta-inner section-inner">
                                <div className="cta-header text-center">
                                    <h2 className="section-title mt-0">
                                        Get it and Switch
                                    </h2>
                                    <p className="section-paragraph">
                                        Lorem ipsum is common placeholder text
                                        used to demonstrate the graphic elements
                                        of a document or visual presentation.
                                    </p>
                                    <div className="cta-cta">
                                        <a
                                            className="button button-primary"
                                            href="#"
                                        >
                                            Buy it now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </main>
                <footer className="site-footer has-top-divider">
                    <div className="container">
                        <div className="site-footer-inner">
                            <div className="brand footer-brand">
                                <a href="#">
                                    <img
                                        className="asset-light"
                                        src="/dist/images/logo-light.svg"
                                        alt="Logo"
                                    />
                                    <img
                                        className="asset-dark"
                                        src="/dist/images/logo-dark.svg"
                                        alt="Logo"
                                    />
                                </a>
                            </div>
                            <ul className="footer-links list-reset">
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">FAQ's</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                            <ul className="footer-social-links list-reset">
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">
                                            Facebook
                                        </span>
                                        <svg
                                            width={16}
                                            height={16}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                                                fill="#FFF"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">
                                            Twitter
                                        </span>
                                        <svg
                                            width={16}
                                            height={16}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                                                fill="#FFF"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">
                                            Google
                                        </span>
                                        <svg
                                            width={16}
                                            height={16}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                                                fill="#FFF"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <div className="footer-copyright">
                                © 2018 Switch, all rights reserved
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;
