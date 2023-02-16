import { useState, useRef, useEffect } from "react";
import { Skills } from "./Skills";
import { AboutMe } from "./AboutMe";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useAnimation, useSpring } from "framer-motion";

export const SwiperContainer = () => {
  const options = {threshold: 0.60}
  const {ref: skillsRef, inView: skillsVisible } = useInView(options);
  const {ref: aboutRef, inView: aboutMeVisible } = useInView(options);

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

const animation = useAnimation()
const containerRef = useRef();
const { scrollXProgress } = useScroll()
const scaleX = useSpring(scrollXProgress);

  useEffect(() => {
    if (aboutMeVisible) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      })
    }
  }, [aboutMeVisible])

  function onPan(event, info) {
    console.log(info.delta.x, info.delta.y);
  }

  return (
    <>
      <main className="w-screen overflow-hidden">
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
          <div className="flex space-x-4 text-white shadow-lg shadow-indigo-700">
            <div
              className={`text-md  ${
                skillsVisible
                  ? "bg-white text-indigo-700 rounded-lg pl-5 pr-5"
                  : "animate-disappear bg-white rounded-lg pl-5 pr-5"
              }`}
            >
              <h2 className={`text-md`}>Skills</h2>
            </div>
            <h2 className="text-lg">About Me</h2>
            <h2 className="text-lg">Experience</h2>
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
            <div className="flex h-full ml-10">
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
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};
