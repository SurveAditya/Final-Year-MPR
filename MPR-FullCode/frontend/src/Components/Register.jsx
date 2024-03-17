import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, validateCertificate } from "../utils/backend";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [disabilityType, setDisabilityType] = useState("");
  const [disabilityPercentage, setDisabilityPercentage] = useState("");
  const [skill, setSkill] = useState([]);
  const [disabilityCertificate, setDisabilityCertificate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate Certificate
    const disabilityProof = await validateCertificate(disabilityCertificate);

    if (disabilityProof.status !== "Authorized") {
      alert("Invalid Certificate");
      return;
    }

    // Send data to backend
    const data = {
      name,
      email,
      password: "",
      contact,
      disabilityType,
      disabilityPercentage,
      disabilityProof,
      skills: skill,
      videoId: localStorage.getItem("userId") || "",
      pin: "1234",
    };

    // set data to localstorage
    for (let key in data) {
      localStorage.setItem(
        key,
        typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key]
      );
    }

    const res = await registerUser(data);

    console.log(res);

    localStorage.setItem("userId", res._id);

    setLoading(false);

    if (res._id || res === 409) {
      navigate("/home");
    } else {
      alert("Something went wrong");
    }
  };

  const handleSkill = (e) => {
    const { value } = e.target;
    setSkill((prev) => {
      if (prev.includes(value)) {
        return prev.filter((skill) => skill !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-blue-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            aria-label="Register Here for free!"
            className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl "
          >
            Registrations
          </h1>
          <form className="space-y-4 md:space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                aria-label="Your Name"
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Name:
              </label>
              <input
                aria-label="Your Name"
                type="string"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Your name"
                required=""
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <label
                aria-label="Your Name"
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                aria-label="Your Email"
                type="string"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Your email"
                required=""
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Contact Number:
              </label>
              <input
                aria-label="Contact Number"
                type="number"
                name="contact"
                id="contact"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required=""
                placeholder="Contact Number"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
            </div>

            <div>
              <label
                htmlFor="disability"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Disability Type:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                id="inputState"
                name="disability"
                onChange={(e) => setDisabilityType(e.target.value)}
                value={disabilityType}
              >
                <option value="Visula">Mobility Disabilities</option>
                <option value="visually-impaired">Visual Impairments</option>
                <option value="color-blind">Color Blindness</option>
                <option value="auditory-impaired">Hearing Impairments</option>
                <option value="cognitive-disabilities">
                  Cognitive Disabilities
                </option>
                <option value="psychiatric-disabilities">
                  Psychiatric Disabilities
                </option>
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="disabilityPercentage" className="form-label">
                Disability Percentage:
              </label>
              <input
                type="number"
                name="disabilityPercentage"
                aria-label="Disability Percentage"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Disability Percentage"
                min={0}
                max={100}
                onChange={(e) => setDisabilityPercentage(e.target.value)}
                value={disabilityPercentage}
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="disabilityPercentage" className="form-label">
                Disability Certificate:
              </label>
              <input
                type="file"
                name="disabilityCertificate"
                aria-label="Upload Disability Certificate"
                onChange={(e) => setDisabilityCertificate(e.target.files[0])}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              />
            </div>

            <div className="flex items-center mb-4">
              <p className="text-gray-900"> Skills:</p>&nbsp;&nbsp;
              <input
                id="default-checkbox"
                type="checkbox"
                value="technical"
                aria-label="technical"
                name="skill"
                onChange={handleSkill}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Technical
              </label>
              &nbsp;&nbsp;
              <input
                id="default-checkbox"
                type="checkbox"
                value="cooking"
                name="skill"
                onChange={handleSkill}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Cooking
              </label>
              &nbsp;&nbsp;
              <input
                id="default-checkbox"
                type="checkbox"
                value="teaching"
                name="skill"
                onChange={handleSkill}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Teaching
              </label>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
