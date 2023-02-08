

export const AboutMe = ({setAboutMeVisibility, aboutMeVisible}) => {
  return (
    <>
      <main className="">
        <button onClick={() => setAboutMeVisibility(!aboutMeVisible) } className="absolute top-2 left-2 text-white text-3xl">X</button>
        <div className="ml-4 mr-4 mt-20">
          <p className="text-white text-xl">
            I'm a self-motivated, team oriented, algorithmic thinker with a
            passion for learning, and a strength for working in a high pressure,
            fast-paced, environment. I've recently made the transition to
            software development after playing professional football for the
            last seven years. I'm accustomed to comprehending a variety of new
            concepts in a short period of time and seeking a position to expand
            and leverage my strengths.
          </p>
        </div>
      </main>
    </>
  );
};
