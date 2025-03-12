import { useState,useEffect } from 'react';

const LINKS = [
  { name: "about me", id: "about_me" },
  { name: "projects", id: "projects" },
  { name: "tools", id: "tools" },
  { name: "contact", id: "contact" },
];

function NavDropdownButton({ handleClick, isOpen}) {
  return (
    <button
      className=" shadow-[1px_4px_3px_rgba(0,0,0,0.25)] font-extrabold w-12 font-work md:hidden ease-out flex justify-center items-center p-2 text-center  h-10 bg-transparent text-black border-3 border-b-black hover:bg-yellow-400 active:invert"
      onClick={handleClick}
    >
        {isOpen?'---':'+++'}
    </button>
  );
}

function NavLogo() {
  return (
    <h1 className=" text-black selection:bg-black  selection:text-amber-50 font-semibold  font-reenie transition-transform hover:scale-50 relative text-5xl animate-bounce" style={{ textShadow: '-2px 5px 1.5px var(--default)'}}>
      herb.
    </h1>
  );
}

function NavLinks() {
  const links = LINKS.map((link)=>{
    return(
      <li key={link.id} className=" active:scale-95 shadow-[1px_4px_2px_rgba(0,0,0,0.25)]  outline-solid outline-2 text-shadow font-reenie text-4xl font-extrabold px-2 hover:outline-2  transition-all ease-out hover:scale-110  hover:bg-yellow-500 active:invert">
        <a href={`#${link.id}`} className="">
          {link.name} 
        </a>
      </li>
    );
  })

  return (
    <ul className="hidden md:flex flex-row relative  gap-10  ">
      {links}
    </ul>
  );
}

function NavDropdown() {
  const dropdownLinks = LINKS.map((link)=>{
    return(
        <li key={link.id} className="font-reenie shadow-2xl font-extrabold active:scale-100 hover:z-20 flex justify-center text-7xl h-full outline-4 z-11 transition ease-out duration-200 hover:scale-110 bg-yellow-50 hover:bg-yellow-400 active:invert ">
          <a
            href={`#${link.id}`}
            className="py-4 overflow-hidden flex-1 relative text-center text-shadow"
          >
           {link.name} 
          </a>
        </li>

    );
  })

  return (
    <section className="  border-y-4 border-black md:hidden bg-default z-20 box-content absolute left-0 right-0 top-full  ">
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
      <nav className="  sticky top-0 bg-primary shadow-lg border-b-4  z-10 flex items-center px-6 h-18 py-3 justify-between ">
        {isOpen && <NavDropdown/>}
        <div className=" flex items-center h-full w-full justify-between relative">
          <NavLogo />
          <NavDropdownButton handleClick={handleClick} isOpen={isOpen} />
          <NavLinks />
        </div>
      </nav>
    </>
  );
}

export default Navbar;