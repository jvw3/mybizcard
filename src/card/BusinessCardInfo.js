import { useEffect } from "react";
import mylogo from "../images/jwlogo.svg";
import { Skills } from "./Skills";
import { useInView } from "react-intersection-observer";
import {
  IconMail,
  IconExternalLink,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SwiperContainer } from "./ScrollingContainer";

export const BusinessCardInfo = () => {
  const options = { threshold: 0.38 };
  const { ref: skillsRef, inView: skillsVisible } = useInView(options);
  const { ref: aboutRef, inView: aboutMeVisible } = useInView(options);
  const { ref: experienceRef, inView: experienceVisible } = useInView(options);

  function scrollToElement(id) {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({ behavior: "smooth", block: "start"});
  }
  return (
    <>
      <main className="w-full h-full">
        <div className="flex justify-evenly border-b-gray-300 border-2 rounded-tl-xl rounded-tr-xl">
          <div
            onClick={() => {
              scrollToElement("aboutme");
            }}
            className={`mt-1.5 text-indigo-700 p-2 text-lg   ${
              aboutMeVisible
                ? "border-b-4 border-indigo-700"
                : "border-b-4 border-white"
            }`}
          >
            <div className={`flex space-x-2 text-indigo-700 `}>
              <div>About Me</div>
            </div>
          </div>
          <div
            className={`mt-1.5 text-indigo-700 p-2 text-lg  ${
              skillsVisible
                ? "border-b-4 border-indigo-700"
                : "border-b-4 border-white"
            }`}
          >
            <button
              onClick={() => {
                scrollToElement("skills");
              }}
            >
              <div className="flex space-x-2">
                <div>Skills</div>
              </div>
            </button>
          </div>
          <div
            className={`mt-1.5 text-indigo-700 p-2 text-lg  ${
              experienceVisible
                ? "border-b-4 border-indigo-700"
                : "border-b-4 border-white"
            }`}
          >
            <button>
              <div className="flex space-x-2">
                <div>Experience</div>
              </div>
            </button>
          </div>
        </div>
        <div className="w-full">
          <SwiperContainer
            skillsRef={skillsRef}
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            skillsVisible={skillsVisible}
            aboutMeVisible={aboutMeVisible}
            experienceVisible={experienceVisible}
          />
        </div>
      </main>
    </>
  );
};
