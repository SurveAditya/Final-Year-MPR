// import logo from './logo.svg';
import "../App.css";
import "./Resume.css";
import template1 from "./Template";
import { FaPhone } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
// import ReactDOM from "react-dom";
import { useState, useRef, useEffect } from "react";
import Template3 from "./Template3";

// import TextToSpeech from './TextToSpeech';
import Speech from "speak-tts";
import Navbar from "./Navbar";
import { jsPDF } from "jspdf";
import Template from "./Template";
import Template2 from "./Template2";

// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import b_d from './images/b_d.png';
// import d_d from './images/d_d.jpg';
// import b_i from './images/b_i.png';
// import m_c from './images/m_c.png';
// import p_m from './images/p_m.png';
// import c_s from './images/c_s.png';
// import home1 from './images/home1.jpg';
// import home3 from './images/home3.jpg';
// import home4 from './images/home4.jpg';
const SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;

const recognition = new SpeechRecognition();
// const recognitionList = new SpeechGrammarList()

recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// function Navbar()
// {
//     return(
//         <nav className="navbar">
//             {/* <img className="logo" src="simple.jpg" width="70px" alt="logo"></img> */}
//             <div className="name">Normal.</div>
//             <ul className="nav-menu">
//             <li className="nav-item"><a href="#jobs">Jobs</a></li>
//             <li className="nav-item"><a href="#companies">Companies</a></li>
//             <li className="nav-item"><a href="#aboutus">About Us</a></li>
//             <li className="nav-item"><a href="#contact">Contacts</a></li>

//             </ul>
//             <button className="nav-btn">Sign in</button>

//         </nav>

//     )
// }

function ResumeMaker() {
  const [uname, setName] = useState("");
  const [qual, setQual] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [achieves, setAchieves] = useState("");
  const [interests, setInterests] = useState("");
  const [disability, setDisabilities] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [value, setValue] = useState("");
  const [project, setProject] = useState("");
  const [prodetails, setPro_details] = useState("");

  let status = 0;

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function mic(field) {
    if (status == 1) {
      status = 0;
      recognition.stop();
    }

    //delay(10000);
    recognition.start();
    status = 1;
    recognition.onresult = (event) => {
      status = 0;
      let speak = "What is your " + field;
      //handle result in here
      var word = event.results[0][0].transcript;
      switch (field) {
        case "name":
          //  if (word != speak) {
          setName(word);
          //  }
          break;
        case "qualification":
          setQual(word);
          break;
        case "hobby":
          setHobbies(word);
          break;
        case "achievements":
          setAchieves(word);
          break;
        case "interest":
          setInterests(word);
          break;
        case "disability type":
          setDisabilities(word);
          break;
        case "email id":
          setEmail(word);
          break;
        case "contact number":
          setContact(word);
          break;
        default:
          return null;
      }
      recognition.stop();
    };

    recognition.onspeechend = (event) => {
      status = 0;
      recognition.stop();
    };
  }

  async function start_mic(field) {
    // var fields = [
    //   "name",
    //   "qualification",
    //   "hobby",
    //   "achievements",
    //   "interest",
    //   "disability type",
    //   "email id",
    //   "contact number",
    // ];
    // for (let field of fields) {
    let speak = "What is your " + field + "?";
    var msg = new SpeechSynthesisUtterance();

    msg.text = speak;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
    // window.speechSynthesis.cancel();
    await delay(2000);
    mic(field);
  }
  //}

  // useEffect(() => {
  //   delay(3000).then(() => {
  //     start_mic();
  //   });
  // }, []);

  const resume_preview_ref = useRef();

  const handleGeneratePDF = (event) => {
    event.preventDefault();
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });
    const htmlContent = resume_preview_ref.current.innerHTML;
    doc.html(htmlContent, {
      callback(doc) {
        doc.save(uname + "-resume");
      },
    });
  };
  return (
    <div>
      <div className="resume_maker_container">
        <p className="text-4xl font-bold text-center">
          Create your resume here
        </p>
        <div id="input_fields_container">
          <form>
            <h3 className="input_labels">Name</h3>
            <h3 className="input_labels" >
              Qualifications
            </h3>
            <br></br>

            <input
              type="text"
              className="inputs"
              id="first_name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              // onMouseMove={() => {
              //   start_mic("name");
              // }}
              onFocus={() => start_mic("name")}
              value={uname}
            />

            <input
              type="text"
              className="inputs"
              id="last_name"
              onChange={(e) => {
                setQual(e.target.value);
              }}
              onFocus={() => start_mic("qualification")}
              value={qual}
            />

            <h3 className="input_labels">Hobbies</h3>
            <h3 className="input_labels" >
              Achievements
            </h3>
            <br></br>
            <input
              type="text"
              className="inputs"
              id="first_name"
              onChange={(e) => {
                setHobbies(e.target.value);
              }}
              onFocus={() => start_mic("hobby")}
              value={hobbies}
            />
            <input
              type="text"
              className="inputs"
              id="last_name"
              onChange={(e) => {
                setAchieves(e.target.value);
              }}
              onClick={() => start_mic("achievments")}
              value={achieves}
            />

            <h3 className="input_labels">Interested in</h3>
            <h3 className="input_labels" >
              Disability Type
            </h3>
            <br></br>
            <input
              type="text"
              className="inputs"
              id="first_name"
              onChange={(e) => {
                setInterests(e.target.value);
              }}
              onClick={() => start_mic("interest")}
              value={interests}
            />
            <input
              type="text"
              className="inputs"
              id="last_name"
              onChange={(e) => {
                setDisabilities(e.target.value);
              }}
              onClick={() => start_mic("disability type")}
              value={disability}
            />
            <br></br>

            <h3 className="input_labels">Email</h3>
            <h3 className="input_labels" >
              Contact No
            </h3>
            <br></br>
            <input
              type="text"
              className="inputs"
              id="first_name"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onClick={() => start_mic("email id")}
              value={email}
            />
            <input
              type="text"
              className="inputs"
              id="last_name"
              onChange={(e) => {
                setContact(e.target.value);
              }}
              onClick={() => start_mic("contact number")}
              value={contact}
            />

            <h3 className="input_labels">Project</h3>
            <h3 className="input_labels" style={{ marginLeft: "47.5%" }}>
              Project Details
            </h3>
            <br></br>
            <input
              type="text"
              className="inputs"
              id="first_name"
              onChange={(e) => {
                setProject(e.target.value);
              }}
              onClick={() => start_mic("Project")}
              value={project}
            />
            <input
              type="text"
              className="inputs"
              id="last_name"
              rows="4"
              cols="50"
              onChange={(e) => {
                setPro_details(e.target.value);
              }}
              onClick={() => start_mic("Project Details")}
              value={prodetails}
            />

            <input type="submit" id="submit_btn" />
            <button
              className="bg-blue-600 p-1.5 text-white rounded-md ml-1'"
              onClick={handleGeneratePDF}
            >
              Generate PDF
            </button>
          </form>
        </div>
        <br></br>
        <Template2
          uname={uname}
          project={project}
          prodetails={prodetails}
          contact={contact}
          interests={interests}
          disability={disability}
          hobbies={hobbies}
          achieves={achieves}
          email={email}
          qual={qual}
          resume_preview_ref={resume_preview_ref}
        />

        <br></br>
      </div>
      <br></br>
      <Template
        uname={uname}
        project={project}
        prodetails={prodetails}
        contact={contact}
        interests={interests}
        disability={disability}
        hobbies={hobbies}
        achieves={achieves}
        email={email}
        qual={qual}
        resume_preview_ref={resume_preview_ref}
      />
      <br></br>
      <Template3 />
    </div>
  );
}

function ResumeMakers() {
  return (
    <div>
      <Navbar />
      <ResumeMaker />
    </div>
  );
}
export default ResumeMakers;
// import React from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const App = () => {
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div>
//       <p>Microphone: {listening ? 'on' : 'off'}</p>
//       <button onClick={SpeechRecognition.startListening}>Start</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop</button>
//       <button onClick={resetTranscript}>Reset</button>
//       <p>{transcript}</p>
//     </div>
//   );
// };
// export default App;
