import mylogo from "../images/jwlogo.svg";

export const CardInfo = () => {
  return (
    <>
      <main className="absolute flex justify-center rounded-xl h-40 w-80 bg-slate-50 top-32">
        <div className="absolute -mt-12 bg-profilePic border-2 border-white rounded-full h-24 w-24 border-blue bg-contain"></div>
        <div className="flex-col h-full">
        <div className="mt-16 flex-col">
        <div>Jonathan Woodard</div>
        <div className="text-sm">Software Developer</div>
        <div className="text-sm">Nashville, TN</div>
        <div className="text-sm">Looking for work</div>

        </div>
        <div className="mt-10">
          <button>About Me</button>
          <button>View My Work</button>
        </div>
        <div className="absolute bottom-2 border">fds</div>
        </div>
      </main>
    </>
  );
};
