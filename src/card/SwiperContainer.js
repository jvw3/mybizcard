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

export const SwiperContainer = ({aboutRef, skillsRef, experienceRef, skillsVisible, aboutMeVisible, experienceVisible }) => {
  

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
      <main className="w-screen overflow-y-scroll   mt-6">
        <motion.div ref={containerRef} className="flex h-[430px]">
          <motion.div
            className="snap-y snap-mandatory overflow-scroll"
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
            drag="y"
            dragConstraints={containerRef}
          >
            <div className="flex-col h-full w-full  ">
              <div className="flex-col justify-center snap-always snap-start ">
                <motion.div
                  initial={{ scale: 0, rotation: -180 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    delay: 0.2,
                  }}
                  className="flex justify-center mt-8 ml-10 mr-14 rounded-lg bg-indigo-700 mb-5 p-2 space-x-3 text-white"
                >
                  <div>Email</div>
                  <div>Github</div>
                  <div>Resume</div>
                  <div>Portfolio</div>
                </motion.div>
                <div
                  ref={aboutRef}
                  className="flex  shadow-indigo-700 justify-center w-full h-[340px] shadow-lg rounded-2xl mb-10"
                >
                  {<AboutMe />}
                </div>
              </div>
              <div
                ref={skillsRef}
                className="flex justify-center w-full h-[400px]  rounded-2xl shadow-lg shadow-indigo-700 mb-10 snap-always snap-start"
              >
                {<Skills />}
              </div>
              <div className="flex justify-center snap-always snap-start ">
                <div
                  ref={experienceRef}
                  className="flex  shadow-indigo-700 justify-center w-full h-3/4 shadow-lg rounded-2xl"
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
