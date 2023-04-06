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
  const options = { threshold: 0.6 };
  const { ref: skillsRef, inView: skillsVisible } = useInView(options);
  const { ref: aboutRef, inView: aboutMeVisible } = useInView(options);
  const { ref: experienceRef, inView: experienceVisible } = useInView(options);

  function openEmail() {
    window.open(`mailto:jvw.226@gmail.com`);
  }
  function openGithub() {
    window.open(`https://github.com/jvw3`);
  }
  return (
    <>
      <main className="w-full">
        <div className="flex justify-evenly border-b-gray-300 border-2 rounded-tl-xl rounded-tr-xl">
          <div
            onClick={openEmail}
            className="mt-5 text-white p-3 text-lg"
          >
              {aboutMeVisible ? (
              <div className={`absolute top-[325px] border-2 w-[115px] border-indigo-700 transition-all ease-in-out duration-200`}></div>
              ) : (
                ""
              )}
              {skillsVisible ? (
              <div className={`absolute top-[325px] border-2 w-[90px] left-[140px] border-indigo-700 transition-all ease-in-out duration-200`}></div>
              ) : (
                ""
              )}
              {experienceVisible ? (
              <div className={`absolute top-[325px] border-2 w-[100px] left-[250px] border-indigo-700 transition-all ease-in-out duration-200`}></div>
              ) : (
                ""
              )}
            <div className={`flex space-x-2 text-indigo-700 `}>
              <div>About Me</div>
              <IconMail />
            </div>
          </div>
          <div
            initial={{ scale: 0, rotation: -180 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.2,
            }}
            whileTap={{ scale: 0.8 }}
            className="mt-5 text-indigo-700 p-3 text-lg"
          >
            <button onClick={openGithub}>
              <div className="flex space-x-2">
                <div>Skills</div>
                <IconBrandGithub />
              </div>
            </button>
          </div>
          <div
            initial={{ scale: 0, rotation: -180 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.2,
            }}
            className="mt-5 text-indigo-700 p-3 text-lg"
            whileTap={{ scale: 0.8 }}
          >
            <button>
              <div className="flex space-x-2">
                <div>Experience</div>
                <IconExternalLink />
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
