import React, { useRef } from "react";
import "./Template.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Template(props) {
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
      pdf.save("card.pdf");
    });
  };
  return (
    <div className="main" ref={cardRef}>
      <div id="header"></div>
      <div class="left"></div>
      <div class="stuff">
        <br></br>
        <h1 className="abc">Resume</h1>
        <h2>{uname}</h2>
        <h2>{email}</h2>
        <h2>{contact}</h2>
        <hr />
        <br></br>
        <p class="head">Interests</p>
        <p>{interests}</p>
        <p class="head">Skills</p>
        {hobbies}
        <p class="head">Education</p>
        {qual}
        <p class="head">About Me</p>
        <p>Disability Type{disability}</p>
        <p class="head">Achievements</p>
        {achieves}
      </div>
      <div class="right"></div>
      <div id="footer">
        <h2 id="name">Emily</h2>
      </div>

      <button
        className="bg-blue-600 p-1.5 text-white rounded-md ml-1'"
        onClick={generatePdf}
      >
        Generate PDF
      </button>
    </div>
  );
}
export default Template;
