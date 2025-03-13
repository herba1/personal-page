import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";

function Hero(){
  return(
    <div id="hero__container"
      className="min-[1440px]:bg-cover bg-no-repeat  overflow-clip w-full max-w-full relative md:scale-100 bg-[url(/hero775.png)] md:bg-[url(/hero1440new.png)] md:blur-1xl h-[868px] flex justify-center">
        <div className="md:backdrop-blur-[2px] absolute w-full h-full transition ease-in 1s "></div>
        <div className="absolute w-dvh lg:left-12 left-6 bottom-0 origin-left -rotate-90">
          <span className=" lg:text-4xl  select-none font-bebas text-bg text-2xl text-nowrap">Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! Welcome! </span>
        </div>
        <div className=" grow-0">
          <h1 className=" will-change-transform transition 1s ease-in select-none sm:scale-150 lg:scale-200 lg:top-1/3 xl:scale-250 xl:1/5 text-shadow sticky top-1/4 grow text-negative text-9xl  font-gochi">herb.</h1>
        </div>
        <div className="absolute lg:right-12  right-6 origin-right bottom-0 rotate-90">
          <span className=" lg:text-4xl select-none font-bebas text-bg text-2xl text-nowrap ">Enjoy Your Stay! Enjoy Your Stay!  Enjoy Your Stay! Enjoy Your Stay! Enjoy Your Stay! Enjoy Your Stay! Enjoy Your Stay! Enjoy Your Stay! Enjoy Your Stay! Enjoy Your Stay! </span>
        </div>
      <div className=" absolute bottom-0 left-0 right-0 bg-linear-to-b from-transparent to-[var(--default)] h-80"></div>
    </div>
  );
}

function App() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <h1 className="text-7xl text-color-[--secondary]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, pariatur dolor! Ducimus enim aliquam quos praesentium perspiciatis numquam, eum architecto doloremque commodi accusamus quia earum omnis ex blanditiis facere excepturi.</h1>
    </div>
  );
}

export default App;
