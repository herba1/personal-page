import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Title from "./components/Title.jsx";
import Projects from "./components/Projects/Projects.jsx";

import './components/Cards/Cards.css';

function App() {
  return (
    <div className=" overflow-x-clip ">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <div className="text-2xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus voluptas nesciunt corporis, quia esse asperiores odio, atque quam tempore dignissimos aliquam ratione dolorum sint eius, totam possimus eum praesentium! Est nobis eum animi similique unde nemo! Minima nisi magni, dicta porro vero hic recusandae animi amet dignissimos ex sapiente nihil quidem? Expedita repellat, soluta reiciendis consequatur ipsam natus accusantium explicabo, iste, ducimus nulla aperiam necessitatibus quidem molestias! Tempore eveniet aperiam molestias delectus deserunt ad officiis fugiat totam saepe ullam. Maxime ipsum blanditiis molestiae? Magnam debitis a magni nulla recusandae omnis itaque commodi. Vitae odio commodi, aut dolore placeat numquam.
      </div>
      <div  className="">Content</div>
    </div>
  );
}

export default App;
