import Title from "../Title";
import SectionFade from "../SectionFade";

const PROJECT_INFO = [
  {
    name: "Linux-Lab",
    description:
      "An interactive learning platform for users to learn the Unix command line, designed and implemented with Vanilla tools",
    img: "/project_thumbnails/linux_lab_thumbnail.png",
    code_link: "#",
    live_link: "#",
  },
  {
    name: "Personal",
    description:
      "This page was made using react and tailwind following responsive design principles and a splash of creative css",
    img: "/project_thumbnails/personal_project_thumbnail.png",
    code_link: "https://github.com/herba1/personal-page",
    live_link: "https://github.com/herba1/personal-page",
  },
];

function CardButton({ text="",link="#" }) {
  return (
    <button className=" transition active:scale-95 hover:scale-110 min-h-11 min-w-20 shadow-[1px_4px_3px_rgba(0,0,0,0.25)] font-extrabold font-work ease-out flex justify-center items-center text-center bg-transparent text-black border-3 border-b-black hover:bg-yellow-400 active:invert">
      <a
        href={link}
        className=" text-shadow-sm flex items-center justify-center grow w-full  h-full font-sans font-extrabold text-2xl"
      >
       {text} 
      </a>
    </button>
  );
}

function CardText({ text=""}){
  return (
        <p className="text-shadow-sm text-base lg:text-2xl">{text}</p>
  );
}

function CardTitle({ title="",live_link="#"}){
  return(
    <h2 className="  lg:text-5xl  active:text-black active:invert hover:text-[var(--secondary)] text-3xl -rotate-3 font-gochi underline transition 1s ease hover:scale-110">
      <a href={live_link} className=" ">
        {title} 
      </a>
    </h2>
  );
}

function CardImage({ live_link="#",img='' }){
  return(
    <a className=" shrink" href={live_link}>
      <img
        className=" shrink text-center active:rotate-0 active:scale-100 active:invert hover:drop-shadow-[0px_4px_15px_rgba(0,0,0,.5)] drop-shadow-[0px_4px_5px_rgba(0,0,0,0.7)] lg:w-2xl w-full  will-change-auto transition ease-out 1s hover:scale-110 hover:rotate-6"
        src={img}
        alt="thumbnail"
      />
    </a>
  );
}

// FIX THE IMAGE OVERFLOW
function Card({ project={} }){
  return (
    <article className="shadow-[1px_4px_10px_rgba(0,0,0,0.5)] card border-6 p-4 lg:min-w-md lg:max-w-lg lg:min-h-[500px] lg:h-[550px] min-w-xs max-w-md min-h-fit drop-shadow-md flex flex-col justify-center items-center">
      <CardImage live_link={project.live_link} img={project.img}/>
      <div className="text-center text_container">
        <CardTitle live_link={project.live_link} title={project.name}/>
        <CardText text={project.description}/>
        <div className="button__containers flex justify-around py-4">
          <CardButton link={project.live_link} text="live"/>
          <CardButton link={project.code_link} text="code"/>
        </div>
      </div>
    </article>
  );
}

function Cards(){
  const cardList = PROJECT_INFO.map((project)=>{
    return(
      <Card project={project} key={project.name}/>
    );
  });
  return(
    <div className=" z-10 cards__container max-w-[var(--screen-limit)] p-12 grid gap-10 md:grid-cols-2">
      {cardList}
    </div>
  );
}

function ProjectsMessage(){
  return(
    <h3 className="font-gochi lg:text-7xl z-10 text-4xl mb-10 animate-pulse">work in progress...</h3> 
  );
}

function TextWall({ text="Nothing's gonna change my world ", repeat=4}){
  let lines = [];
  for(let i = 0; i < repeat;i++){
    lines.push(<p key={i} className={`animate-randomShift${i+1} bg-yellow-400  relative leading-none lg:text-4xl select-none font-bebas text-2xl text-nowrap`}>{text.repeat(20)}</p>);
  };
  return(
  <div className=" overflow-x-clip ">
    {lines}
  </div>
  );
}

export default function Projects(){
  return (
    <div className=" relative projects__container flex flex-col items-center justify-center">
      <Title title={"Projects"} />
      <Cards/>
      <ProjectsMessage/>
      <TextWall/>
      <SectionFade/>
    </div>
  );
}