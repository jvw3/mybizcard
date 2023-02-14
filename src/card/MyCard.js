import mylogo from "../images/jwlogo.svg";
import { AboutMe } from "./AboutMe";
import { CardInfo } from "./CardInfo";
import { useState } from "react";
import { BusinessCardInfo, Skills } from "./BusinessCardInfo";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

export const MyCard = () => {
  const [aboutMeVisible, setAboutMeVisibility] = useState(false);
  const [aboutAnimation, setAboutAnimation] = useState("");

  return (
    <>
      <main className=" w-screen h-screen bg-indigo-900 font-roboto">
        <div className="flex-col">
          <div className="relative flex items-start justify-center bg-headshotBackground bg-cover h-55">
            <div className="bg-gradient-to-b from-transparent to-indigo-900 w-full h-full bg-opacity-40 flex-col ">
              <div className="absolute bottom-0 text-white ml-2 mb-2">
                <h1 className="text-2xl">Jonathan Woodard</h1>
                <h2 className="text-xl">Software Developer</h2>
              </div>
              <div className="flex flex-col items-end absolute bottom-8 right-5 space-y-5">
                <div className="flex space-x-3">
                <button className=" bg-white rounded-full p-1 text-indigo-700 w-fit flex">
                  <IconBrandTwitter />
                </button>

                </div>
                <button className="bg-white rounded-full p-1 text-indigo-700 w-fit">
                  <IconBrandInstagram />
                </button>
                <button
                  className="bg-white rounded-full p-1 text-indigo-700 w-fit"
                  href="https://www.linkedin.com/in/jonathan-woodard/"
                  target="_blank"
                >
                  <IconBrandLinkedin />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {/* <CardInfo
            setAboutMeVisibility={setAboutMeVisibility}
            setAboutAnimation={setAboutAnimation}
          /> */}
          </div>
          <div className="flex-col items-end text-center text-3xl bg-white rounded-tr-2xl rounded-tl-2xl h-45">
            <BusinessCardInfo />
          </div>
          <div
            className={`absolute ${
              aboutMeVisible
                ? "top-64 bg-black h-full animate-slideUp"
                : "animate-slideDown bg-black -bottom-96 hidden"
            }`}
          >
            <AboutMe
              setAboutMeVisibility={setAboutMeVisibility}
              aboutMeVisible={aboutMeVisible}
            />
          </div>
        </div>
      </main>
    </>
  );
};
