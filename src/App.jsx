import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import SectionFade from "./components/SectionFade.jsx";

const ABOUT_TEXT = [
  "Hey there! I am Herbart Hernandez, a Front-end dev, and senior Computer Science student at Fresno State with interest in technical and creative solutions.",
  "I am currently working on websites while expanding my Web Development skills, I am working toward freelancing and seeking internships to grow my skills further.",
  "You can find me Producing and Songwriting in my free time(shameless plug). The intersection of tech and artistic expressions has been extremely fulfilling and satisfying.",
  "Thanks for stopping by.",
];

function About() {
  const paragraphs = ABOUT_TEXT.map((para,index) => {
    return (
      <p key={index} className=" transition hover:outline-4 hover:invert hover:bg-yellow-400 hover:scale-110 leading-tight  font-work text-md sm:text-lg text-shadow-sm">{para}</p>
    );
  });

  return (
    <div className="about__container relative h-dvh flex justify-center md:justify-start">
      <article className="   z-10 text-select max-w-2xl flex flex-col items-center text-center px-12 gap-3">
        <h1 className="mt-6 text-6xl text-shadow font-rubik">About</h1>
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
        className="hidden md:block select-none md:absolute top-1/8 right-0 absolute mix-blend-color-burn max-w-xl"
      />
      <img
        src="/doodle_cat_alt.png"
        alt="cat doodle"
        className="hidden md:block select-none md:absolute bottom-0 right-0 absolute mix-blend-color-burn max-w-xl"
      />
      <SectionFade/>
    </div>
  );
}

function App() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <About />
      <div className="text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus voluptas nesciunt corporis, quia esse asperiores odio, atque quam tempore dignissimos aliquam ratione dolorum sint eius, totam possimus eum praesentium! Est nobis eum animi similique unde nemo! Minima nisi magni, dicta porro vero hic recusandae animi amet dignissimos ex sapiente nihil quidem? Expedita repellat, soluta reiciendis consequatur ipsam natus accusantium explicabo, iste, ducimus nulla aperiam necessitatibus quidem molestias! Tempore eveniet aperiam molestias delectus deserunt ad officiis fugiat totam saepe ullam. Maxime ipsum blanditiis molestiae? Magnam debitis a magni nulla recusandae omnis itaque commodi. Vitae odio commodi, aut dolore placeat numquam.
      </div>
    </div>
  );
}

export default App;
