import { useEffect } from "react";
import mylogo from "../images/jwlogo.svg";
import { Skills } from "./Skills";
import { IconMail, IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import { SwiperContainer } from "./SwiperContainer";

export const BusinessCardInfo = () => {
  return (
    <>
      <main className="">
        <div className=" flex-col">
          <div className="flex justify-evenly">
            <button className="mt-5 bg-indigo-700 text-white p-3 rounded-xl text-xl w">
              <div className="flex space-x-2">
                <div>Email</div>
                <IconMail />
              </div>
            </button>
            <button className="mt-5 bg-indigo-700 text-white p-3 rounded-xl text-xl w">
              <div className="flex space-x-2">
                <div>Github</div>
                <IconBrandGithub />
              </div>
            </button>
            <button className="mt-5 bg-indigo-700 text-white p-3 rounded-xl text-xl">
              <div className="flex space-x-2">
                <div>Portfolio</div>
                <IconExternalLink />
              </div>
            </button>
          </div>
        </div>
        <SwiperContainer />
      </main>
    </>
  );
};
