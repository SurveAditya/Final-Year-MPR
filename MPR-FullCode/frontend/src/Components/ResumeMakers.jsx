// import logo from './logo.svg';
// import "../App.css";
import "./Resume.css";
import { FaPhone } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
// import ReactDOM from "react-dom";
import { useState, useRef, useEffect } from "react";
// import TextToSpeech from './TextToSpeech';
// import Speech from "speak-tts";
import Navbar from "./Navbar";
import { jsPDF } from "jspdf";
import Template2 from "./Template2";
import Template3 from "./Template3";
import { toast } from "react-toastify";

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
const  [prodetails, setProdetails] = useState("");
const handleSubmit =async () => {

  const processedEmail = email.replace(/at the rate/g, "@").replace(/\s+/g, "");
  const processedContact = contact.replace(/\s+/g, "");
    const dat =  fetch("http://localhost:4000/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: uname,
        qualifications: qual,
        hobbies: hobbies,
        achievements: achieves,
        interestedIn: interests,
        disabilityType: disability,
        email: processedEmail,
        contact: contact,
        userId: localStorage.getItem("userId"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // window.location.reload();
        toast.success("Resume Created Successfully");
      })
      .catch((err) =>{ console.log(err);
      
      toast.error("Resume Not Created");});
  
};
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
          const processedEmail = word.replace(/at the rate/g, "@").replace(/\s+/g, "");
          setEmail(processedEmail);
          break;
        case "contact number":
          const processedContact = word.replace(/\s+/g, "");
          setContact(processedContact);
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
      callback: function (doc) {
        doc.save("resume.pdf");
      },
      x: 100,
      y: 100,

      windowWidth: 100,
      windowHeight: 100,
    });
  };

  const gatherData = async () => {
    const data = await fetch(`http://localhost:4000/resume/${localStorage.getItem('userId')}`, 
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
    .then((data) => {
      console.log(data);
      data = data[0];

      setName(data.name);
      setQual(data.qualifications);
      setHobbies(data.hobbies);
      setAchieves(data.achievements);
      setInterests(data.interestedIn);
      setDisabilities(data.disabilityType);
      setEmail(data.email);
      setContact(data.contact);
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    gatherData();
  }
  ,[]);

  return (
    <div>
    <div className="flex justify-center  pt-10">
      <div className="rounded  shadow-lg p-2 text-2xl font-['Open_Sans'] ">
        <p className="text-4xl font-bold p-2 text-left space-x-5 pb-8">
          Create your resume here
        </p>
        <div className="  ">
          <div id="input_fields_container" className="space-y-6 space-x-2">
            <div>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <h3 className="input_labels">Name</h3>
                  <input
                    type="text"
                    className="inputs"
                    id="first_name"
                    aria-label="What is Your Name?"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onFocus={() => start_mic("name")}
                    value={uname}
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="input_labels">Qualifications</h3>
                  <input
                    type="text"
                    className="inputs"
                    id="last_name"
                    aria-label="What is Your Qualification?"
                    onChange={(e) => {
                      setQual(e.target.value);
                    }}
                    onFocus={() => start_mic("qualification")}
                    value={qual}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2">
                  <h3 className="input_labels">Hobbies</h3>
                  <input
                    type="text"
                    className="inputs"
                    aria-label="What are Your Hobbies?"
                    id="first_name"
                    onChange={(e) => {
                      setHobbies(e.target.value);
                    }}
                    onFocus={() => start_mic("hobby")}
                    value={hobbies}
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="input_labels">Achievements</h3>
                  <input
                    type="text"
                    className="inputs"
                    aria-label="What are Your Achievements?"
                    id="last_name"
                    onChange={(e) => {
                      setAchieves(e.target.value);
                    }}
                    onFocus={() => start_mic("achievements")}
                    value={achieves}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2">
                  <h3 className="input_labels">Interested in</h3>
                  <input
                    type="text"
                    aria-label="What are Your Interests?"
                    className="inputs"
                    id="first_name"
                    onChange={(e) => {
                      setInterests(e.target.value);
                    }}
                    onFocus={() => start_mic("interest")}
                    value={interests}
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="input_labels">Disability Type</h3>
                  <input
                    type="text"
                    className="inputs"
                    aria-label="What is Your Disability Type?"
                    id="last_name"
                    onChange={(e) => {
                      setDisabilities(e.target.value);
                    }}
                    onFocus={() => start_mic("disability type")}
                    value={disability}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2">
                  <h3 className="input_labels">Email</h3>
                  <input
                    type="text"
                    aria-label="What is Your Email?"
                    className="inputs"
                    id="first_name"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onFocus={() => start_mic("email id")}
                    value={email}
                  />
                </div>
                <div className="w-1/2">
                  <h3 className="input_labels">Contact No</h3>
                  <input
                    aria-label="What is Your Contact Number?"
                    type="text"
                    className="inputs"
                    id="last_name"
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                    onFocus={() => start_mic("contact number")}
                    value={contact}
                  />
                </div>
              </div>

              <div>
                <button
                  className="submit_btn"
                  onClick={()=>handleSubmit()}
                >Submit</button>
               
              </div>
            </div>
          </div>

          
        </div>
      </div>
      
    </div>
    <h1 className="text-center text-2xl  pt-10 pb-4 font-semibold bg-slate-100">
      Template No 1
      </h1>
    <div className="px-80 "> 
    <Template3  uname={uname} 
          project={project}
          prodetails={prodetails}
          contact={contact}
          interests={interests}
          disability={disability}
          hobbies={hobbies}
          achieves={achieves}
          email={email}
          qual={qual}
          resume_preview_ref={resume_preview_ref}/>  
    </div>
    
    
    <h1 className="text-center text-2xl  pt-10 pb-4 font-semibold bg-slate-100">
      Template No 2
      </h1>
    <div className="px-80 font-['Open_Sans']"> 
    <Template2  uname={uname}
          project={project}
          prodetails={prodetails}
          contact={contact}
          interests={interests}
          disability={disability}
          hobbies={hobbies}
          achieves={achieves}
          email={email}
          qual={qual}
          resume_preview_ref={resume_preview_ref}/>  
    </div>
    <h1 className="text-center text-2xl  pt-10 pb-4 font-semibold bg-slate-100">
      More Templates Coming Soon......
      </h1>     
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
