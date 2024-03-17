import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./template2.css";

function Template2(props) {
  const {
    uname,
    project,
    prodetails,
    achieves,
    contact,
    email,
    hobbies,
    disability,
    interests,
    qual,
    resume_preview_ref,
  } = props;

  const cardRef = useRef(null);

  const generatePdf = () => {
    if (!cardRef.current) {
      return;
    }

    html2canvas(cardRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };
  return (
    <div className="bg-gray-200">
    <div className="flex justify-center p-2">
    <button onClick={() => generatePdf() } className="bg-blue-600 p-1.5 text-white rounded-md ml-1 hover:bg-blue-700">Download PDF</button>
     
    </div>
         
      <div className="main" ref={cardRef}>

        <div id="header"></div>
        <div class="left"></div>
        <div class="stuff">
          <br />
          <h1>Resume</h1>
          <h2>Name : {uname}</h2>
          <h2>Email : {email}</h2>
          <h2>Contact : {contact}</h2>
          <hr />
          <br />
          <p className="head ">Interests</p>
          <ul className="pl-12">
            <li>Drawing</li>
            <li>Photography</li>
            <li>Design</li>
            <li>Programming</li>
            <li>Computer Science</li>
          </ul>
          <p class="head">Skills</p>
          <ul className="pl-12">
            <li>Web Design with HTML & CSS</li>
          </ul>
          <p class="head">Education</p>
          <ul className="pl-12">
            <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
              <li>{qual}</li>
            </a>

            <li>TSEC</li>
          </ul>
          <p class="head">Experience</p>
          <ul className="pl-12">
            <li>Internship at Apple</li>
          </ul>
          <p class="head">Extracurriculars</p>
          <ul className="pl-12">
            <li>Debate</li>
            <li>Model UN</li>
            <li>Robotics</li>
          </ul>
          <p class="head">Achievements</p>
          <ul className="pl-12">
            <li>{achieves}</li>
          </ul>
          <p class="head">Disability Type</p>
          <ul className="pl-12">
            <li>{disability}</li>
          </ul>
          <p class="head">Hobbies</p>
          <ul className="pl-12">
            <li>{hobbies}</li>
          </ul>
        </div>
        
        <div class="right"></div>
        
        <div id="footer"></div>
        
      </div>
    </div>
  );
}
export default Template2;
