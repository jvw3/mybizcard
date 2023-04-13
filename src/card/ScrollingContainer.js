import { useState, useRef, useEffect } from "react";
import { Skills } from "./Skills";
import { AboutMe } from "./AboutMe";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useScroll,
  useAnimation,
  useSpring,
  animate,
} from "framer-motion";
import { Experience } from "./Experience";
import {
  IconMail,
  IconExternalLink,
  IconBrandGithub,
  IconArticle
} from "@tabler/icons-react";
import resume from "../documents/myresume.pdf"

export const SwiperContainer = ({
  aboutRef,
  skillsRef,
  experienceRef,
  skillsVisible,
  aboutMeVisible,
  experienceVisible,
}) => {

  const animation = useAnimation();
  const containerRef = useRef();

    function openEmail() {
      window.open(`mailto:jvw.226@gmail.com`);
    }
    function openGithub() {
      window.open(`https://github.com/jvw3`);
    }



  return (
    <>
      <main className="w-screen overflow-y-scroll mt-4">
            <div className="flex justify-center ml-5 mr-5 rounded-lg mb-5  space-x-1 text-white">
              <button
                onClick={openEmail}
                className=" text-sm flex space-x-1 bg-indigo-700 p-2 rounded-lg"
              >
                <div>Email</div>
                <IconMail size={16} />
              </button>
              <button
                onClick={openGithub}
                className=" text-sm flex space-x-1 bg-indigo-700 p-2 rounded-lg"
              >
                <div>Github</div>
                <IconBrandGithub size={16} />
              </button>
              <a
                href={resume}
                target="_blank"
                className="text-sm flex space-x-1 bg-indigo-700 p-2 rounded-lg"
              >
                <div>Resume</div>
                <IconArticle size={16} />
              </a>
              <div className="text-sm flex space-x-1 bg-indigo-700 p-2 rounded-lg">
                <div>Portfolio</div>
                <IconExternalLink size={16} />
              </div>
            </div>
        <div ref={containerRef} className="flex h-[430px]">
          <div
            className="snap-y snap-mandatory overflow-scroll"
            initial={{ scale: 0, rotation: -180 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.2,
            }}
          >
            <div className="flex-col h-full w-full  ">
              <div className="flex-col justify-center snap-always snap-start ">
                <div
                  ref={aboutRef}
                  className="flex justify-center w-full h-[380px] rounded-2xl mb-10"
                >
                  {<AboutMe />}
                </div>
              </div>
              <div
                ref={skillsRef}
                className="flex justify-center w-full h-[380px]  rounded-2xl  mb-10 snap-always snap-start"
              >
                {<Skills />}
              </div>
              <div className="flex justify-center snap-always snap-start ">
                <div
                  ref={experienceRef}
                  className="flex justify-center w-full h-[420px]"
                >
                  {<Experience />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
