import mylogo from "../images/jwlogo.svg"
import { AboutMe } from "./AboutMe"
import { CardInfo } from "./CardInfo"
import { useState } from "react"
import { Skills } from "./Skills"

export const MyCard = () => {
const [aboutMeVisible, setAboutMeVisibility] = useState(false)
const [aboutAnimation, setAboutAnimation] = useState("")



return (
  <>
    <main className=" w-screen h-screen bg-slate-500 font-roboto">
      <div className="flex-col">
        <div className="relative flex items-start justify-center bg-black h-25">
          <img className="w-20" src={mylogo}></img>
        </div>
        <div className="flex justify-center">
          <CardInfo
            setAboutMeVisibility={setAboutMeVisibility}
            setAboutAnimation={setAboutAnimation}
          />
        </div>
        <div className="flex-col mt-72 text-center text-3xl ">
          <Skills />
        </div>
        <div
          className={`absolute ${
            aboutMeVisible ? "top-64 bg-black h-full animate-slideUp" : "animate-slideDown bg-black -bottom-96 hidden"
          }`}
        >
          <AboutMe setAboutMeVisibility={setAboutMeVisibility} aboutMeVisible={aboutMeVisible} />
        </div>
      </div>
    </main>
  </>
);
}