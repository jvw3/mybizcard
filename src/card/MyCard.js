import mylogo from "../images/jwlogo.svg";
import { AboutMe } from "./AboutMe";
import { useState } from "react";
import { BusinessCardInfo, Skills } from "./BusinessCardInfo";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import { motion } from "framer-motion"

export const MyCard = () => {
  const [aboutMeVisible, setAboutMeVisibility] = useState(false);
  const [aboutAnimation, setAboutAnimation] = useState("");

  return (
    <>
      <main className="h-85 w-screen bg-indigo-900 font-roboto overflow-y-hidden">
          <div className="relative flex items-start justify-center h-30">
            <div className=" w-full h-full flex-col ">
              <div className="bg-headshotBackground bg-cover h-full bg-[center_top_-6rem] ">
                <div className="bg-gradient-to-b from-transparent via-transparent to-indigo-900 w-full h-full bg-opacity-40">
                  <div className="absolute bottom-0 text-white ml-2 mb-2 ">
                    <h1 className="text-2xl">Jonathan Woodard</h1>
                    <h2 className="text-xl">Software Engineer</h2>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, translateX: 100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 , delay: 0.1}}
                className="flex flex-col items-end absolute bottom-6 right-4 space-y-5"
              >
                <div className="flex space-x-3">
                  <a
                    className="bg-white rounded-full p-1.5 text-indigo-700 w-fit flex"
                    href="https://twitter.com/jonathanwoodard"
                    target="_blank"
                  >
                    <IconBrandTwitter size={26} />
                  </a>
                </div>
                <button className="bg-white rounded-full p-1.5 text-indigo-700 w-fit">
                  <IconBrandInstagram size={26} />
                </button>
                <a
                  className="bg-white rounded-full p-1.5 text-indigo-700 w-fit"
                  href="https://www.linkedin.com/in/jonathan-woodard/"
                  target="_blank"
                >
                  <IconBrandLinkedin size={26} />
                </a>
              </motion.div>
            </div>
          </div>
          <div className="text-center bg-white rounded-tr-2xl rounded-tl-2xl h-fit">
            <BusinessCardInfo />
          </div>
      </main>
    </>
  );
};
