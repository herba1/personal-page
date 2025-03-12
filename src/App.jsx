import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";

function Hero(){
  return(
    <div id="hero__container"
      className=" overflow-clip relative md:scale-100 bg-[url(/hero775.png)] md:bg-[url(/hero1440new.png)] h-[868px] flex justify-center">
        <div className="">
          <h1 className=" sticky top-1/3 grow  text-negative text-9xl font-extrabold font-work">herb.</h1>
        </div>
      <div className=" absolute bottom-0 left-0 right-0 bg-linear-to-b from-transparent to-[var(--default)] h-80"></div>
    </div>
  );
}

function App() {
  return (
    <div className=" overflow-x-clip">
      <Navbar />
      <Hero />
      <h1 className="text-7xl text-color-[--secondary]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, pariatur dolor! Ducimus enim aliquam quos praesentium perspiciatis numquam, eum architecto doloremque commodi accusamus quia earum omnis ex blanditiis facere excepturi.</h1>
    </div>
  );
}

export default App;
