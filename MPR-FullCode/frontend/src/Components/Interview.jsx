import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { toast } from 'react-toastify';
import "./Interview.css";

function Interview() {

    return (
        <div >
            <Navbar />
            <div className="portal">
                <div class="event-invitation">
                    <h1>Welcome to the Interview Portal</h1>
                    <div className="description">
                        <ul className="list">
                            <li>1. Your interview prep will start as soon as you click the 'Start interview now' button</li>
                            <li>2. You will have 30s to answer each question</li>
                            <li>3. The interview will automatically end after 5 mins</li>
                            <li>4. Press 'Q' to exit the interview prep portal before the timer runs out</li>
                            <li>5. A report will be automatically generated once you exit the portal</li>
                        </ul>
                        <br />
                        <center>ALL THE BEST!</center>
                    </div>

                    <div className="button-container">
                        <button
                            onClick={() => {
                                fetch("http://127.0.0.1:8000/start/interview")
                                    .then((res) => {
                                        toast.success("Interview Portal Started");
                                    })
                                    .catch((err) => {
                                        toast.error("Error in starting interview portal");
                                    });
                            }}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center startnow-button"
                        >
                            Start interview Now
                        </button>
                        {/* <button class="startnow-button">Start interview Now</button> */}
                    </div>
                </div>
                <br />
            </div>
            <Footer />
        </div>
    );
}

export default Interview;