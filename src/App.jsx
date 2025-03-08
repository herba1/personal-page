import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div className="">
      <nav className="z-10 relative flex items-center px-6 h-18 py-3 justify-between bg-emerald-400">
        <div className=" flex items-center h-full w-full justify-between">
          <h1 className=" transition-transform hover:scale-50 relative selection:bg-black selection:text-white text-4xl text animate-bounce">
            herb.
          </h1>
          <button
            className=" sm:hidden ease-out flex items-center p-2 text-center  h-10 bg-transparent text-black border-2 border-b-black hover:bg-yellow-400 active:invert"
            onClick={null}
          >
            +++
          </button>
        </div>
      </nav>
      <section className="sm:hidden bg-yellow-50 z-20 h-[calc(100vh-72px)]">
        <ul className="flex flex-col relative">
          <li className="active:scale-100 hover:z-20 flex justify-center text-7xl h-full outline-4 z-11 transition ease-out duration-200 hover:scale-110 bg-yellow-50 hover:bg-yellow-400 active:invert">
            <a href="#" className="py-4 overflow-hidden flex-1 relative text-center">
              about me 
            </a>
          </li>
        </ul>
      </section>
      <div className="bg-emerald-200"></div>
    </div>
  );
}

export default App
