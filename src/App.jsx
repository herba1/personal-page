import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Title from "./components/Title.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Tools from "./components/Tools/Tools.jsx";
import Contact from "./components/Contact/Contact.jsx";
import LoadingScreen from "./components/Utils/LoadingScreen.jsx";


function App() {
  return (
    <div className=" overflow-x-clip  ">
      <LoadingScreen/>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Tools/>
      <Contact/>
    </div>
  );
}

export default App;
