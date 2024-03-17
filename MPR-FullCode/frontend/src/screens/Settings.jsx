import { useEffect, useState } from "react";
import { applyColorblindFilter } from "../utils/colors";
import { useNavigate } from "react-router-dom";

export default function Setting() {
  const [disabilityType, setDisabilityType] = useState(
    localStorage.getItem("disabilityType") || "Mobility Disabilities"
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("disabilityType", disabilityType);
  }, [disabilityType]);

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="absolute top-5 left-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="w-8 h-8  fill-white"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
      <div className="bg-hero-pattern bg-cover w-full h-[30vh]"></div>
      <div className="bg-gray-200 min-h-[70vh]">
        <div className="w-[80%] mx-auto">
          <div className="flex  justify-between ">
            <div className="flex">
              <img
                src={
                  "https://i.pinimg.com/564x/99/7b/d7/997bd761c45606fc6d0c0d3679f354bc.jpg"
                }
                alt="User Profil Pic"
                className="w-36 h-36 rounded-full border-gray-200 border-8 -translate-y-[4.6rem] absolute"
              />
              <h1 className="font-bold text-2xl mt-3 ml-[9.6rem]">Settings</h1>
            </div>

            <div className="mt-3">
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>

          <div className="mt-12">
            <div className="px-4 ">
              <form>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="w-full">
                    <label
                      htmlFor="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      readOnly={true}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5   outline-none   "
                      placeholder="Product brand"
                      value={localStorage.getItem("name") || "John Doe"}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Contact
                    </label>
                    <input
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5      outline-none     "
                      required
                      value={localStorage.getItem("contact") || "1234567890"}
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5      outline-none     "
                      required
                      value={
                        localStorage.getItem("email") || "johndoe@gmail.com"
                      }
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Disability Type
                    </label>
                    <select
                      name="disabilityType"
                      value={disabilityType}
                      onChange={(e) => {
                        setDisabilityType(e.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5      outline-none     "
                    >
                      <option value="Visula">Mobility Disabilities</option>
                      <option value="visually-impaired">
                        Visual Impairments
                      </option>
                      <option value="color-blind">Color Blindness</option>
                      <option value="auditory-impaired">
                        Hearing Impairments
                      </option>
                      <option value="cognitive-disabilities">
                        Cognitive Disabilities
                      </option>
                      <option value="psychiatric-disabilities">
                        Psychiatric Disabilities
                      </option>
                    </select>
                  </div>

                  {disabilityType === "color-blind" && (
                    <div>
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Color Blind Themes
                      </label>
                      <select
                        onChange={(e) => {
                          applyColorblindFilter(e.target.value);
                        }}
                        data-choose-theme
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5      outline-none     "
                      >
                        <option value="normal">Normal</option>
                        <option value="achromatomaly">Achromatomaly</option>
                        <option value="deuteranomaly">Deuteranomaly</option>
                        <option value="deuteranopia">Deuteranopia</option>
                        <option value="protanomaly">Protanomaly</option>
                        <option value="protanopia">Protanopia</option>
                        <option value="tritanomaly">Tritanomaly</option>
                        <option value="tritanopia">Tritanopia</option>
                      </select>
                    </div>
                  )}
                  <div className="w-full">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Disability Percentage
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5      outline-none     "
                      required
                      value={
                        localStorage.getItem("disabilityPercentage") ||
                        "johndoe@gmail.com"
                      }
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
