import styled from "styled-components";
import Navbar from "./Navbar";
import React from "react";

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  background-color: var(---primarycolor);
  color: white;
  box-shadow: 0px 7px 20px #00000051 !important;
  padding: 0.2%;
  margin-bottom: 20px;
  font-family: system-ui;
`;
const Para = styled.div`
  font-family: system-ui;
  font-weight: 20px;
  font-size: 20px;
  display: flex;
  padding: 10px;
  margin-left: 10px;
`;

const InPara = styled.div`
  font-family: system-ui;
  font-weight: 10px;
  font-size: 15px;
  display: flex;
  padding: 10px;
  margin-left: 20px;
  border-radius: 3px;
  border-left: 3px solid var(---primarycolor);
  margin: 3px;
`;
const Line = styled.div`
  width: 70px;
  height: 6px;
  background-color: var(---primarycolor);
  border-radius: 10px;
  margin-left: 20px;
  margin-bottom: 15px;
`;
const Feature = styled.div`
  font-family: system-ui;
  font-weight: 20px;
  font-size: 18px;
  display: flex;
  padding: 5px;
  margin-left: 10px;
`;

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <h1 className="text-4xl font-bold text-center py-8" aria-label="Know About Us & Your Rights">
          Know About Us & Your Rights
        </h1>

        <div className="container mx-auto px-4">
          <p className="text-lg leading-relaxed mb-8" aria-label="RESERVEDIN helps you know your rights so you can protect yourself from any kind of exploitation and abuse in your current or future workspace.">
            RESERVEDIN helps you know your rights so you can protect yourself
            from any kind of exploitation and abuse in your current or future
            workspace.
          </p>

          <hr className="border-t-2 border-gray-300 mb-8" />

          <h2 className="text-xl font-bold mb-4" aria-label="We provide you with:-">
            We provide you with:-
          </h2>

          <ul className="list-disc pl-6 mb-8">
            <li aria-label="An Exclusive Job Portal">An Exclusive Job Portal</li>
            <li aria-label="Voice Commands for navigating">Voice Commands for navigating</li>
            <li aria-label="Built In Resume generator">Built In Resume generator</li>
            <li aria-label="Accessibility features to read Blogs">Accessibility features to read Blogs</li>
            <li aria-label="Information about your Legal rights and Discourses and Legal Remedies in case of Abuse & Exploitation">
              Information about your Legal rights and Discourses and Legal Remedies
              in case of Abuse & Exploitation{" "}
            </li>
          </ul>

          <p className="mb-8" aria-label="Explore your legal rights and remedies as an individual with disabilities. Learn more about relevant laws and access resources to protect yourself from exploitation. For detailed information, visit:">
            Explore your legal rights and remedies as an individual with
            disabilities. Learn more about relevant laws and access resources to
            protect yourself from exploitation. For detailed information, visit:
          </p>

          <a
            href="http://www.ccdisabilities.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
            aria-label="Office of Chief Commissioner for Persons With Disabilities (PWD)"
          >
            Office of Chief Commissioner for Persons With Disabilities (PWD)
          </a>{" "}
          <br />
          <a
            href="https://thenationaltrust.gov.in/content/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
            aria-label="National Trust For Social Justice for Persons With Disabilities (PWD)"
          >
            National Trust For Social Justice for Persons With Disabilities (PWD)
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-8 relative overflow-hidden">
  <div className="flex">
    <div className="w-full sm:w-2/3 lg:w-2/3 flex-shrink-0">
      <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/326n18dT8x4?si=ZA9MhHl06ByrDiES"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          aria-label="YouTube Video"
        ></iframe>
      </div>
    </div>
    <div className="hidden lg:flex flex-col w-1/4 lg:w-1/4 ml-4">
      <iframe
        className="mb-4"
        width="100%"
        height="150"
        src="https://www.youtube.com/embed/2PnUza4FPz8?si=ZC_UseZx01eor5km"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        aria-label="YouTube Video 1"
      ></iframe>
      <iframe
        className="mb-4"
        width="100%"
        height="150"
        src="https://www.youtube.com/embed/t5vp5ijzRac?si=iBJCEz6TMcw5AhG0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        aria-label="YouTube Video 2"
      ></iframe>
      <iframe
        className="mb-4"
        width="100%"
        height="150"
        src="https://www.youtube.com/embed/GuRJ5MYUNxU?si=Kyz_AWeDXihuuSq5"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        aria-label="YouTube Video 3"
      ></iframe>
    </div>
  </div>
</div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMYje72Fyb5LPGwtR9kJw7ykunlQWPAcbA5glo_0vyFm1NpJUTr6KVef_qDqR09q54EQ&usqp=CAU"
                  aria-label="person with image"
                />
                <p className="leading-relaxed">
                RESERVEDIN is a groundbreaking initiative empowering differently-abled individuals with meaningful employment opportunities. It champions inclusivity, breaks down barriers, and serves as a dedicated platform connecting employers and job seekers. The mission is to redefine the employment landscape by promoting diversity and recognizing the unique abilities of every individual.

                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Mrunmayi Parker
                </h2>
                <p className="text-gray-500">Frontend and UI/UX Developer</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCpE-LJIfGebv_V-mTT9EBBaJ5cAVP_T_hKiTvIHcz-tmcnYhMXI7GXSl-hL_4WQttkU&usqp=CAU"
                  aria-label="person with lamp"
                />
                <p className="leading-relaxed">
                RESERVEDIN is a groundbreaking initiative empowering differently-abled individuals with meaningful employment opportunities. It champions inclusivity, breaks down barriers, and serves as a dedicated platform connecting employers and job seekers. The mission is to redefine the employment landscape by promoting diversity and recognizing the unique abilities of every individual.

                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Nahush Patil
                </h2>
                <p className="text-gray-500">AI/ML Developer</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjT1-Ab9elldNYnYo9lfY3kIX1BuDoNtT94tfHTQ7UHqZtJU22rJPcLKFIicQTsl36Ss&usqp=CAU"
                  aria-label="person with image"
                />
                <p className="leading-relaxed">
                RESERVEDIN is a groundbreaking initiative empowering differently-abled individuals with meaningful employment opportunities. It champions inclusivity, breaks down barriers, and serves as a dedicated platform connecting employers and job seekers. The mission is to redefine the employment landscape by promoting diversity and recognizing the unique abilities of every individual.

                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Aditya Surve
                </h2>
                <p className="text-gray-500">Backend Developer</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVaAtc2HMBxAqhjCXGIYtvMlZpYdWQ4LY8DoklwVaJZTf54J_9-04Q0fqW91VsG6Yxnk&usqp=CAU"
                  aria-label="person with lamp"
                />
                <p className="leading-relaxed">
                RESERVEDIN is a groundbreaking initiative empowering differently-abled individuals with meaningful employment opportunities. It champions inclusivity, breaks down barriers, and serves as a dedicated platform connecting employers and job seekers. The mission is to redefine the employment landscape by promoting diversity and recognizing the unique abilities of every individual.

                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Priyal Jain
                </h2>
                <p className="text-gray-500">UI/UX and Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;