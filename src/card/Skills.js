import { useEffect } from "react";
import mylogo from "../images/jwlogo.svg";

export const Skills = () => {

  return (
    <>
      <div className="inline-flex overflow-x-hidden " >
        <div className="space-y-5 flex-col mt-4">
          <div className="flex flex-wrap w-80 justify-center  space-x-1 ">
            <div className="flex-col">
              <i class="devicon-html5-plain-wordmark text-indigo-700 text-5xl"></i>
              <div className="text-xs text-indigo-700">HTML</div>
            </div>
            <div className="flex-col">
              <i class="devicon-css3-plain-wordmark text-indigo-700 text-5xl"></i>
              <div className="text-xs text-indigo-700">CSS</div>
            </div>
            <div className="flex-col">
              <i class="devicon-javascript-plain text-indigo-700 text-5xl"></i>

              <div className="text-xs text-indigo-700">Javascript</div>
            </div>
            <div className="flex-col">
              <i class="devicon-react-original text-indigo-700 text-5xl"></i>

              <div className="text-xs text-indigo-700">React</div>
            </div>
            <div className="flex-col">
              <i class="devicon-tailwindcss-plain text-indigo-700 text-5xl"></i>

              <div className="text-xs text-indigo-700">TailwindCss</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full space-x-1">
            <div className="flex-col">
              <i class="devicon-python-plain text-indigo-700 text-5xl"></i>

              <div className="text-xs text-indigo-700">Python</div>
            </div>
            <div className="flex-col">
              <i class="devicon-django-plain text-indigo-700 text-5xl"></i>

              <div className="text-xs text-indigo-700">Django</div>
            </div>
            <div className="flex-col">
              <i class="devicon-sqlite-plain text-indigo-700 text-5xl"></i>

              <div className="text-xs text-indigo-700">SQLite</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full space-x-1">
            <div className="flex-col">
              <i class="devicon-git-plain text-indigo-700 text-5xl"></i>
              <div className="text-xs text-indigo-700">Git</div>
            </div>
            <div className="flex-col">
              <i class="devicon-github-original text-indigo-700 text-5xl"></i>
              <div className="text-xs text-indigo-700">Github</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
