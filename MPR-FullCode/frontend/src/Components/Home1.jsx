// import Navbar from "./Navbar";
// import Lottie from "lottie-react";
// import travelAnimation from "../assets/animations/travel.json";
// import jobAnimation from "../assets/animations/job.json";
// import { useNavigate } from "react-router-dom";
// export default function JobPortal() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <Navbar />
//       {/* Hero Section */}
//       <section className="text-gray-600 body-font w-4/5 mx-auto">
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//               ReservedIn
//               <br className="hidden lg:inline-block" />
//               Connecting Talents, Transforming Lives
//             </h1>
//             <p className="mb-8 leading-relaxed text-lg">
//               Unlocking Potential, Creating Opportunities - Your Journey to a
//               Fulfilling Career Begins Here
//             </p>
//             <div className="flex justify-center">
//               <button
//                 onClick={() => {
//                   window.location.href = "#jobs";
//                 }}
//                 aria-label="Explore Jobs"
//                 className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-lg text-lg"
//               >
//                 Explore
//               </button>
//               <button
//                 onClick={() => {
//                   navigate("/blogs");
//                 }}
//                 className="ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg"
//               >
//                 Forum
//               </button>
//             </div>
//           </div>
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//             <Lottie animationData={travelAnimation} loop={true} />
//           </div>
//         </div>
//       </section>

//       {/* Working */}
//       <section
//         aria-label="Banner animation"
//         className="text-gray-600 bg-[#dfe9fa] body-font "
//       >
//         <div className="container px-5 py-10  flex flex-wrap w-4/5 mx-auto">
//           <div className="flex flex-wrap w-full items-center justify-between">
//             <Lottie
//               className="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
//               animationData={jobAnimation}
//               loop={true}
//             />
//             <div
//               className="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6 flex flex-col"
//               tabindex="0"
//               aria-label="This section is talk about mentorship"
//             >
//               <div className="flex relative pb-12">
//                 <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//                   <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//                 </div>
//                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-5 h-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//                   </svg>
//                 </div>
//                 <div className="flex-grow pl-4">
//                   <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
//                     STEP 1
//                   </h2>
//                   <p className="leading-relaxed">
//                     Create an account and fill in your details
//                   </p>
//                 </div>
//               </div>
//               <div className="flex relative pb-12">
//                 <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//                   <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//                 </div>
//                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-5 h-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//                   </svg>
//                 </div>
//                 <div className="flex-grow pl-4">
//                   <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
//                     STEP 2
//                   </h2>
//                   <p className="leading-relaxed">
//                     Get access to our mentorship program
//                   </p>
//                 </div>
//               </div>
//               <div className="flex relative pb-12">
//                 <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//                   <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//                 </div>
//                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-5 h-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle cx={12} cy={5} r={3} />
//                     <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
//                   </svg>
//                 </div>
//                 <div className="flex-grow pl-4">
//                   <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
//                     STEP 3
//                   </h2>
//                   <p className="leading-relaxed">
//                     Browse through the available jobs and apply
//                   </p>
//                 </div>
//               </div>
//               <div className="flex relative pb-12">
//                 <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//                   <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//                 </div>
//                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-5 h-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
//                     <circle cx={12} cy={7} r={4} />
//                   </svg>
//                 </div>
//                 <div className="flex-grow pl-4">
//                   <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
//                     STEP 4
//                   </h2>
//                   <p className="leading-relaxed">Get shortlisted</p>
//                 </div>
//               </div>
//               <div className="flex relative">
//                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-5 h-5"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//                     <path d="M22 4L12 14.01l-3-3" />
//                   </svg>
//                 </div>
//                 <div className="flex-grow pl-4">
//                   <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
//                     FINISH
//                   </h2>
//                   <p className="leading-relaxed">
//                     Get hired and start your career
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Resume Maker
//       <svg
//         className="w-full"
//         viewBox="0 0 1100 53"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M1118 52H1L1118 1V52Z"
//           fill="#3B82F6"
//           className=" fill-gray-600 translate-y-[2px] translate-x-[1px]"
//         />
//       </svg>
//       <section className="text-gray-600 body-font bg-slate-600">
//         <div className="container py-10 w-4/5 px-2 mx-auto flex items-center md:flex-row flex-col">
//           <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
//             <h2 className="text-xs text-gray-100 tracking-widest font-medium title-font mb-1">
//               Voice Based
//             </h2>
//             <h1 className="md:text-3xl text-2xl font-medium title-font text-white">
//               Resume Builder
//             </h1>
//           </div>
//           <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
//             <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 className="w-6 h-6"
//                 viewBox="0 0 512 512"
//               >
//                 <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
//               </svg>
//               <span className="ml-4 flex items-start flex-col leading-none">
//                 <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
//                 <span className="title-font font-medium">Google Play</span>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section> */}

//       {/* Stats */}
//       <section class="text-gray-100 body-font bg-blue-500">
//         <div class="container px-5 py-10 mx-auto">
//           <div class="flex flex-wrap -m-4 text-center">
//             <div class="p-4 sm:w-1/4 w-1/2">
//               <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-100">
//                 2.7K
//               </h2>
//               <p class="leading-relaxed">Users</p>
//             </div>
//             <div class="p-4 sm:w-1/4 w-1/2">
//               <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-100">
//                 1.8K
//               </h2>
//               <p class="leading-relaxed">Subscribes</p>
//             </div>
//             <div class="p-4 sm:w-1/4 w-1/2">
//               <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-100">
//                 35
//               </h2>
//               <p class="leading-relaxed">Downloads</p>
//             </div>
//             <div class="p-4 sm:w-1/4 w-1/2">
//               <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-100">
//                 4
//               </h2>
//               <p class="leading-relaxed">Products</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Jobs */}
//       <section id="jobs" className=" py-16">
//         <div className="w-4/5 mx-auto">
//           <h1
//             className="text-4xl text-center text-black"
//             aria-label="Jobs Section"
//           >
//             <a href="#" aria-label="Jobs Section">
//               Jobs{" "}
//             </a>
//           </h1>
//           <div className="">
//             <div className="group bg-white mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
//               <a
//                 href="#"
//                 aria-label="Apple logo"
//                 className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
//               >
//                 <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
//                   <img
//                     src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
//                     alt=""
//                     className="h-full w-full object-cover text-gray-700"
//                   />
//                 </div>
//               </a>
//               <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
//                 <h3 className="text-sm text-gray-600">Invision</h3>
//                 <a
//                   href="#"
//                   aria-label="Apple logo"
//                   className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
//                 >
//                   {" "}
//                   Sr. Frontend Engineer{" "}
//                 </a>
//                 <p className="overflow-hidden pr-7 text-sm">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                   diam nonummy nibh euismod tincidunt ut laoreet dolore magna .
//                 </p>
//                 <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
//                   <div className>
//                     Experience:
//                     <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
//                       {" "}
//                       2 Years{" "}
//                     </span>
//                   </div>
//                   <div className>
//                     Salary:
//                     <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
//                       180-250k
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="group bg-white mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
//               <a
//                 href="#"
//                 aria-label="Apple logo"
//                 className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
//               >
//                 <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
//                   <img
//                     src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
//                     alt=""
//                     className="h-full w-full object-cover text-gray-700"
//                   />
//                 </div>
//               </a>
//               <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
//                 <h3 className="text-sm text-gray-600">Invision</h3>
//                 <a
//                   href="#"
//                   className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
//                 >
//                   {" "}
//                   Sr. Frontend Engineer{" "}
//                 </a>
//                 <p className="overflow-hidden pr-7 text-sm">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                   diam nonummy nibh euismod tincidunt ut laoreet dolore magna .
//                 </p>
//                 <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
//                   <div className>
//                     Experience:
//                     <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
//                       {" "}
//                       2 Years{" "}
//                     </span>
//                   </div>
//                   <div className>
//                     Salary:
//                     <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
//                       180-250k
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>{" "}
//             <div className="group bg-white mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
//               <a
//                 href="#"
//                 className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
//               >
//                 <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
//                   <img
//                     src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
//                     alt="apple logo"
//                     className="h-full w-full object-cover text-gray-700"
//                   />
//                 </div>
//               </a>
//               <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
//                 <h3 className="text-sm text-gray-600">Invision</h3>
//                 <a
//                   href="#"
//                   className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
//                 >
//                   {" "}
//                   Sr. Frontend Engineer{" "}
//                 </a>
//                 <p className="overflow-hidden pr-7 text-sm">
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
//                   diam nonummy nibh euismod tincidunt ut laoreet dolore magna .
//                 </p>
//                 <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
//                   <div className>
//                     Experience:
//                     <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
//                       {" "}
//                       2 Years{" "}
//                     </span>
//                   </div>
//                   <div className>
//                     Salary:
//                     <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
//                       180-250k
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center mt-10">
//             <button
//               onClick={() => {
//                 navigate("/jobs");
//               }}
//               className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-lg text-lg"
//             >
//               View More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer class="text-gray-600 body-font">
//         <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
//           <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span class="ml-3 text-xl">ReservedIn</span>
//           </a>
//           <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
//             © 2024 ReservedIn
//           </p>
//           <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//             <a class="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 class="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//               </svg>
//             </a>
//             <a class="ml-3 text-gray-500">
//               <svg
//                 fill="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 class="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//               </svg>
//             </a>
//             <a class="ml-3 text-gray-500">
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 class="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                 <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//               </svg>
//             </a>
//             <a class="ml-3 text-gray-500">
//               <svg
//                 fill="currentColor"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="0"
//                 class="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   stroke="none"
//                   d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
//                 ></path>
//                 <circle cx="4" cy="4" r="2" stroke="none"></circle>
//               </svg>
//             </a>
//           </span>
//         </div>
//       </footer>
//     </div>
//   );
// }

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
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="text-gray-600 body-font w-4/5 mx-auto">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ReservedIn
              <br className="hidden lg:inline-block" />
              Connecting Talents, Transforming Lives
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Unlocking Potential, Creating Opportunities - Your Journey to a
              Fulfilling Career Begins Here
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  window.location.href = "#jobs";
                }}
                aria-label="Explore Jobs"
                className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-lg text-lg"
              >
                Explore
              </button>
              <button
                onClick={() => {
                  navigate("/blogs");
                }}
                className="ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg"
              >
                Forum
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Lottie animationData={travelAnimation} loop={true} />
          </div>
        </div>
      </section>

      {/* Working */}
      <section
        aria-label="Banner animation"
        className="text-gray-600 bg-[#dfe9fa] body-font "
      >
        <div className="container px-5 py-10  flex flex-wrap w-4/5 mx-auto">
          <div className="flex flex-wrap w-full items-center justify-between">
            <Lottie
              className="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              animationData={jobAnimation}
              loop={true}
            />
            <div
              className="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6 flex flex-col"
              tabindex="0"
              aria-label="This section is talk about mentorship"
            >
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    Create an account and fill in your details
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    Get access to our mentorship program
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={5} r={3} />
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    Browse through the available jobs and apply
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">Get shortlisted</p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    Get hired and start your career
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Maker
      <svg
        className="w-full"
        viewBox="0 0 1100 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1118 52H1L1118 1V52Z"
          fill="#3B82F6"
          className=" fill-gray-600 translate-y-[2px] translate-x-[1px]"
        />
      </svg>
      <section className="text-gray-600 body-font bg-slate-600">
        <div className="container py-10 w-4/5 px-2 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 className="text-xs text-gray-100 tracking-widest font-medium title-font mb-1">
              Voice Based
            </h2>
            <h1 className="md:text-3xl text-2xl font-medium title-font text-white">
              Resume Builder
            </h1>
          </div>
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
          </div>
        </div>
      </section> */}

      {/* Stats */}
    