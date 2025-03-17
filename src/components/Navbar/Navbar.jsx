import { useState,useEffect } from 'react';
import './animation.css'

const LINKS = [
  { name: "about", id: "about" },
  { name: "projects", id: "projects" },
  { name: "tools", id: "tools" },
  { name: "contact", id: "contact" },
];

function NavDropdownButton({ handleClick, isOpen}) {
  return (
    <button
      className=" animate-slide-left text-white shadow-[1px_4px_3px_rgba(0,0,0,0.25)] font-extrabold w-12 font-work md:hidden ease-out flex justify-center items-center p-2 text-center  h-10 bg-transparent  border-3 hover:text-black  hover:bg-yellow-400 active:invert"
      onClick={handleClick}
    >
        {isOpen?'---':'+++'}
    </button>
  );
}

function NavLogo() {
  return (
    <h1 className=" text-black/50 selection:bg-black  selection:text-amber-50 font-semibold  font-reenie transition-transform hover:scale-50 relative text-5xl animate-bounce" style={{ textShadow: '-2px 5px 1.5px var(--default)'}}>
      herb.
    </h1>
  );
}

function NavLinks() {
  const links = LINKS.map((link)=>{
    return(
      <li key={link.id} className=" text-white inset-shadow inset-shadow-amber-800   active:invert  active:scale-95 shadow-[1px_4px_2px_rgba(0,0,0,0.25)]  outline-solid outline-2 text-shadow font-reenie text-4xl font-extrabold px-2 hover:outline-2  transition-all ease-out hover:scale-110 hover:text-black  hover:bg-yellow-500 ">
        <a href={`#${link.id}`} className="">
          {link.name} 
        </a>
      </li>
    );
  })

  return (
    <ul className=" animate-slide-left hidden md:flex flex-row relative  gap-10  ">
      {links}
    </ul>
  );
}

function NavDropdown({ isOpen=false,handleClick }) {
  isOpen;
  const dropdownLinks = LINKS.map((link)=>{
    return(
        <li key={link.id} className=" font-reenie shadow-2xl font-extrabold active:scale-100 hover:z-20 flex justify-center text-7xl h-full outline-4 z-11 transition ease-out duration-200 hover:scale-110 bg-yellow-50 hover:bg-yellow-400 active:invert ">
          <a
            href={`#${link.id}`}
            className="py-4 overflow-hidden flex-1 relative text-center text-shadow"
            onClick={handleClick}
          >
           {link.name} 
          </a>
        </li>

    );
  })

  return (
    <section className="fixed z-30 text-black  border-y-4 border-black md:hidden bg-default box-content block left-0 right-0 ">
      <ul className="flex flex-col relative">
        {dropdownLinks}
      </ul>
    </section>
  );
}

function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false);
    function handleClick(){
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth>768)setIsOpen(false);
        }

        window.addEventListener('resize',handleResize);
        return ()=>{window.removeEventListener('resize',handleClick)}
    },[])

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-30 h-18 backdrop-blur-xl '></div>
      <nav className=" bg-black/80 sticky drop-shadow-lg top-0 text-negative shadow-lg shadow-black/80 border-b-4  z-30 flex items-center px-6 h-18 py-3 justify-between ">
        <div className=" lg:px-16 flex items-center h-full w-full justify-between relative">
          <NavLogo />
          <NavDropdownButton handleClick={handleClick} isOpen={isOpen} />
          <NavLinks />
        </div>
      </nav>
      {isOpen && <NavDropdown handleClick={handleClick}/>}
    </>
  );
}

export default Navbar;