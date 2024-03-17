
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import styles from "./Template3.css" 

function Template3(props) {
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
   
<div class="bg-gray-100 font-sans">
<div className="flex justify-center p-2">
    <button onClick={() => generatePdf() } className="bg-blue-600 p-1.5 text-white rounded-md ml-1 hover:bg-blue-700">Download PDF</button>
     
    </div>
         
<div class="container mx-auto  px-4" ref={cardRef}>
    <div class="bg-white p-6 rounded-lg shadow-lg">
        <h1 class="text-3xl font-semibold">{uname}</h1>
        <p class="text-gray-600">Web Developer</p>

        <hr class="my-4"/>

        <h2 class="text-xl font-semibold mb-2">Summary</h2>
        <p class="text-gray-700">Experienced web developer with a passion for creating responsive and user-friendly
            websites. Proficient in HTML, CSS, JavaScript, and various web development frameworks.</p>

        <h2 class="text-xl font-semibold mt-4 mb-2">Achivements</h2>
        <ul class="list-disc list-inside text-gray-700">
            <li> {achieves}</li>

        </ul>

<h2 class="text-xl font-semibold mt-4 mb-2">Disablity Type</h2>
        <ul class="list-disc list-inside text-gray-700">
            <li> {disability}</li>

        </ul>
        <h2 class="text-xl font-semibold mt-4 mb-2">Experience</h2>
        <div class="mb-4">
            <h3 class="text-lg font-semibold">JOB ROLE, ABC Company</h3>
            <p class="text-gray-700">Developed and maintained company website, implementing responsive design and
                optimizing performance. Collaborated with the design team to create visually appealing web pages.
            </p>
            <p class="text-gray-600">January 2020 - Present</p>
        </div>



        <h2 class="text-xl font-semibold mt-4 mb-2">Education</h2>
        <div class="mb-4">
            <h3 class="text-lg font-semibold">{qual}</h3>
            
        </div>

        <h2 class="text-xl font-semibold mt-4 mb-2">Contact</h2>
        <ul class="list-disc list-inside text-gray-700">
            <li>Email: {email}</li>
            <li>LinkedIn: <a href={`https://www.linkedin.com/in/${uname}`}
                    class="text-blue-500 hover:underline">linkedin.com/in/{uname}</a></li>
            <li>Website: <a href={`https://www.${uname}.com`} class="text-blue-500 hover:underline">www.{uname}.com</a>
            </li>
        </ul>
    </div>
</div>
</div>
  );
}
export default Template3;
