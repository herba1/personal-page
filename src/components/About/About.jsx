import SectionFade from "../SectionFade";

const ABOUT_TEXT = [
  "Hey there! I am Herbart Hernandez, a Front-end dev, and senior Computer Science student at Fresno State with interest in technical and creative solutions.",
  "I am currently working on websites while expanding my Web Development skills, I am working toward freelancing and seeking internships to grow my skills further.",
  "You can find me Producing and Songwriting in my free time(shameless plug). The intersection of tech and artistic expressions has been extremely fulfilling and satisfying.",
  "Thanks for stopping by.",
];

function About() {
  const paragraphs = ABOUT_TEXT.map((para,index) => {
    return (
      <p
        key={index}
        className=" md:text-2xl lg:text-3xl transition hover:outline-4 hover:invert hover:bg-yellow-400 hover:scale-110 leading-tight  font-work text-md sm:text-xl  text-shadow-sm"
      >
        {para}
      </p>
    );
  });

  return (
    <div className=" md:justify-start min-h-[900px] mx-auto max-w-7xl about__container relative flex justify-center ">
      <article className=" lg:pl-12 md:gap-8 mt-8 max-w-2xl  md:w-4xl z-10 text-select md:max-w-5xl flex flex-col items-center text-center px-12 lg:px-10 gap-3">
        <h1 className=" mt-6 text-6xl lg:text-8xl text-shadow font-rubik">About</h1>
        {paragraphs}
      </article>
      <img
        src="/mangapanel.png"
        alt="manga panel"
        className=" md:hidden bottom-0 right-0 absolute mix-blend-multiply  max-w-xl"
      />
      <img
        src="/doodle_cat.png"
        alt="cat doodle"
        className=" transition 10s ease-in hidden opacity-40 xl:opacity-100  lg:inline select-none md:absolute top-1/8 right-0 absolute mix-blend-color-burn max-w-xl"
      />
      <img
        src="/doodle_cat_alt.png"
        alt="cat doodle"
        className="hidden opacity-60 xl:opacity-100 md:block select-none md:absolute bottom-0 right-0 absolute mix-blend-color-burn max-w-xl"
      />
      <SectionFade/>
    </div>
  );
}

export default About;