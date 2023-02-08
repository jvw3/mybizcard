import { useEffect } from "react";
import mylogo from "../images/jwlogo.svg";

export const Skills = () => {


  return (
    <>
      <main className="">
        <h1 className="text-white">Skills</h1>
        <div className="space-y-5">
          <div className="flex flex-wrap justify-center w-full space-x-1">
            <div className="flex-col">
              <i class="devicon-html5-plain-wordmark text-white text-5xl"></i>
              <div className="text-xs text-white">HTML</div>
            </div>
            <div className="flex-col">
              <i class="devicon-css3-plain-wordmark text-white text-5xl"></i>

              <div className="text-xs text-white">CSS</div>
            </div>
            <div className="flex-col">
              <i class="devicon-javascript-plain text-white text-5xl"></i>

              <div className="text-xs text-white">Javascript</div>
            </div>
            <div className="flex-col">
              <i class="devicon-react-original text-white text-5xl"></i>

              <div className="text-xs text-white">React</div>
            </div>
            <div className="flex-col">
              <i class="devicon-tailwindcss-plain text-white text-5xl"></i>

              <div className="text-xs text-white">TailwindCss</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full space-x-1">
            <div className="flex-col">
              <i class="devicon-python-plain text-white text-5xl"></i>

              <div className="text-xs text-white">Python</div>
            </div>
            <div className="flex-col">
              <i class="devicon-django-plain text-white text-5xl"></i>

              <div className="text-xs text-white">Django</div>
            </div>
            <div className="flex-col">
              <i class="devicon-sqlite-plain text-white text-5xl"></i>

              <div className="text-xs text-white">SQLite</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full space-x-1">
            <div className="flex-col">
              <i class="devicon-git-plain text-white text-5xl"></i>
              <div className="text-xs text-white">Git</div>
            </div>
            <div className="flex-col">
              <i class="devicon-github-original text-white text-5xl"></i>
              <div className="text-xs text-white">Github</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
