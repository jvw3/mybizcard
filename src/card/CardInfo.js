import { useEffect } from "react";
import mylogo from "../images/jwlogo.svg";
import { IconExternalLink } from "@tabler/icons-react";

export const CardInfo = ({ setAboutMeVisibility, setAboutAnimation }) => {
  const handleVisibilityChange = () => {
    setAboutMeVisibility(true);
  };

  return (
    <>
      <main className="absolute flex justify-center rounded-xl h-40 w-80 bg-slate-50 top-32">
        <div className="absolute -mt-12 bg-profilePic border-2 border-white rounded-full h-24 w-24 border-blue bg-contain"></div>
        <div className="flex-col w-full align-center h-full">
          <div className="mt-16 text-center">
            <div className="justify-self-center">Jonathan Woodard</div>
            <div className="text-sm">Software Developer</div>
            <div className="text-sm">Nashville, TN</div>
            <div className="text-sm">Looking for work</div>
          </div>
          <div className="mt-10 flex justify-evenly text-sm">
            <button onClick={handleVisibilityChange}>About Me</button>
            <button>My Experience</button>
            <button className="flex">
              My Portfolio
              <IconExternalLink size={16} />{" "}
            </button>
          </div>
          <div className="text-center absolute bottom-14 w-full">
            Connect With Me
          </div>
          <div className="absolute bottom-3 w-full text-xs flex justify-evenly ">
            <a
              className="border p-1.5 bg-indigo-800 text-white rounded-lg"
              href="mailto:jvw.226@gmail.com"
              target="_blank"
            >
              Email
            </a>
            <a
              className="border p-1.5 bg-indigo-800 text-white rounded-lg"
              href="https://www.linkedin.com/in/jonathan-woodard/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="border p-1.5 bg-indigo-800 text-white rounded-lg"
              href="https://twitter.com/jonathanwoodard"
              target="_blank"
            >
              Twitter
            </a>
            <a
              className="border p-1.5 bg-indigo-800 text-white rounded-lg"
              href="https://github.com/jvw3"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
