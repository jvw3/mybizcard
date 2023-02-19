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

export const SwiperContainer = () => {
  const options = { threshold: 0.6 };
  const { ref: skillsRef, inView: skillsVisible } = useInView(options);
  const { ref: aboutRef, inView: aboutMeVisible } = useInView(options);
  const { ref: experienceRef, inView: experienceVisible } = useInView(options);

  //? The first line performs the same task as all of the commented code below. The code above is useInView hook from the react intersection observer library
  // const skillsRef = useRef();
  // console.log("skillsVisible", skillsVisible);
  // console.log("aboutMeVisible", aboutMeVisible);
  //   useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setaboutMeVisible(entry.isIntersecting);
  //     });
  //     observer.observe(skillsRef.current);
  //   }, [skillsRef]);

  const animation = useAnimation();
  const containerRef = useRef();

  // useEffect(() => {
  //   if (aboutMeVisible) {
  //     animation.start({
  //       x: 0,
  //       transition: {
  //         type: "spring",
  //         duration: 1,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   else if (!aboutMeVisible) {

  //   }
  // }, [aboutMeVisible]);

  // function onPan(event, info) {
  //   console.log(info.delta.x, info.delta.y);
  // }

  return (
    <>
      <main className="w-screen overflow-hidden border">
        <motion.div
          initial={{ scale: 0, rotation: -180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.2,
          }}
          className="flex justify-center mt-8 ml-10 mr-14 rounded-lg bg-indigo-700 mb-5 p-2 "
        >
          <div className="flex space-x-4 shadow-lg shadow-indigo-700">
            <motion.h2
              initial={{ rotation: -180 }}
              animate={{ rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.2,
              }}
              className={`text-md pl-2 pr-2 ${
                skillsVisible
                  ? "text-indigo-700 bg-white rounded-md transition-all ease-in-out duration-300"
                  : "text-white bg-indigo-700 transition-all ease-in-out duration-300"
              }`}
            >
              Skills
            </motion.h2>
            <motion.div
              initial={{ scale: 1, rotation: -180, color: "black" }}
              animate={{ rotate: 0, scale: 1, color: "white" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.2,
              }}
              // className={`text-md  ${
              //   skillsVisible
              //     ? "bg-white text-indigo-700 rounded-lg pl-5 pr-5"
              //     : "animate-disappear bg-white rounded-lg pl-5 pr-5"
              // }`}
            >
              <h2
                className={`text-md pl-2 pr-2 ${
                  aboutMeVisible
                    ? "text-indigo-700 bg-white rounded-md transition-all ease-in-out duration-300"
                    : "text-white bg-indigo-700 transition-all ease-in-out duration-300"
                }`}
              >
                About Me
              </h2>
            </motion.div>
            <motion.div
              initial={{ scale: 1, rotation: -180, color: "black" }}
              animate={{ rotate: 0, scale: 1, color: "white" }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.2,
              }}
            >
              <h2
                className={`text-md pl-2 pr-2 ${
                  experienceVisible
                    ? "text-indigo-700 bg-white rounded-md transition-all ease-in-out duration-300"
                    : "text-white bg-indigo-700 transition-all ease-in-out duration-300"
                }`}
              >
                Experience
              </h2>
            </motion.div>
          </div>
        </motion.div>
        <motion.div ref={containerRef} className="flex h-40">
          <motion.div
            className="touch-pan-x"
            initial={{ scale: 0, rotation: -180 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.2,
            }}
            whileDrag="grabbing"
            dragMomentum={true}
            drag="x"
            dragConstraints={containerRef}
          >
            <div className="flex h-full ml-10 mr-10">
              <div
                ref={skillsRef}
                className="flex justify-center w-75 h-3/4 bg-indigo-700 rounded-2xl shadow-lg shadow-indigo-700"
              >
                {<Skills />}
              </div>
              <div className="flex justify-center ml-10">
                <div
                  ref={aboutRef}
                  className="flex  shadow-indigo-700 justify-center w-75 h-3/4 shadow-lg rounded-2xl"
                >
                  {<AboutMe />}
                </div>
              </div>
              <div className="flex justify-center ml-10">
                <div
                  ref={experienceRef}
                  className="flex  shadow-indigo-700 justify-center w-75 h-3/4 shadow-lg rounded-2xl"
                >
                  {<Experience />}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="flex justify-center absolute bottom-2 right-40 space-x-3">
          <div
            className={`  w-4 h-4 rounded-full transition-all ease-in-out duration-300 ${
              skillsVisible ? "bg-indigo-700" : "bg-slate-300"
            }`}
          ></div>
          <div
            className={`w-4 h-4 rounded-full transition-all ease-in-out duration-300 ${
              aboutMeVisible ? "bg-indigo-700" : "bg-slate-300"
            }`}
          ></div>
          <div
            className={`w-4 h-4 rounded-full transition-all ease-in-out duration-300 ${
              experienceVisible ? "bg-indigo-700" : "bg-slate-300"
            }`}
          ></div>
        </div>
      </main>
    </>
  );
};
