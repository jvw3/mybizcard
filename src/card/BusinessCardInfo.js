import { useEffect } from "react";
import mylogo from "../images/jwlogo.svg";
import { Skills } from "./Skills";
import {
  IconMail,
  IconExternalLink,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SwiperContainer } from "./SwiperContainer";

export const BusinessCardInfo = () => {
  function openEmail() {
    window.open(`mailto:jvw.226@gmail.com`);
  }
  function openGithub() {
    window.open(`https://github.com/jvw3`);
  }
  return (
    <>
      <main className="w-full">
          <div className="flex justify-evenly">
            <motion.div
              initial={{ scale: 0, rotation: -180 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.2,
              }}
              onClick={openEmail}
              whileTap={{ scale: 0.8 }}
              className="mt-5 bg-indigo-700 text-white p-3 rounded-xl text-xl shadow-lg shadow-indigo-700"
            >
              <div className="flex space-x-2">
                <div>Email</div>
                <IconMail />
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0, rotation: -180 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.2,
              }}
              whileTap={{ scale: 0.8 }}
              className="mt-5 bg-indigo-700 text-white p-3 rounded-xl text-xl shadow-lg shadow-indigo-700"
            >
              <button onClick={openGithub}>
                <div className="flex space-x-2">
                  <div>Github</div>
                  <IconBrandGithub />
                </div>
              </button>
            </motion.div>
            <motion.div
              initial={{ scale: 0, rotation: -180 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.2,
              }}
              className="mt-5 bg-indigo-700 text-white p-3 rounded-xl text-xl shadow-lg shadow-indigo-700"
              whileTap={{ scale: 0.8 }}
            >
              <button>
                <div className="flex space-x-2">
                  <div>Portfolio</div>
                  <IconExternalLink />
                </div>
              </button>
            </motion.div>
          </div>
        <div className="w-full">
          <SwiperContainer />
        </div>
      </main>
    </>
  );
};
