import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {toast} from 'react-toastify';
function GrievanceSys() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [priority, setPriority] = useState("normal");

  function handleSubmit() {
    // if (text || file) {
    //   const data = {
    //     text,
    //     userId: auth.currentUser.uid,
    //     priority,
    //   };

    //   if (file) {
    //     data.file = file;
    //   }

    //   addDoc(collection(db, "grievances"), data).then(() => {
    //     setText("");
    //     setFile(null);
    //     setPriority("normal");
    //   });
    // }

    setTimeout(() => {
      toast.success("Grievance Submitted Successfully");
      setText("");
      setFile(null);
      setPriority("normal");
    }, 1000);

   
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full text-center">
          <h2 className="text-3xl font-bold mb-5">Grievances</h2>
          <p className="text-base mb-5">
            If you face any problem in public spaces, don't worry, we will be
            the voice for you!
          </p>
          <textarea
            cols="45"
            rows="5"
            className="bg-gray-200 mb-5 p-3 rounded-md w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your message"
            aria-label="Grievance Message"
          ></textarea>

          <label htmlFor="file" className="block mb-2">
            Attach File (PDF, DOC, DOCX):
          </label>
          <input
            type="file"
            id="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-5"
          />

          <label htmlFor="priority" className="block mb-2">
            Priority:
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="bg-gray-200 p-2 rounded-md w-full mb-5"
            aria-label="Priority Selection"
          >
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
            <option value="very_urgent">Very Urgent</option>
            <option value="top_priority">Top Priority</option>
          </select>

          <button
            className="bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              handleSubmit();
            }}
            aria-label="Submit Grievance"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GrievanceSys;