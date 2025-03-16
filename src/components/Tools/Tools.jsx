import Title from "../Title";
import toolsData from "./ToolsInfo";

function ToolsLogo({ name="",img="",link="" }) {
  return (
    <div className="h-32 w-32 md:h-40 md:w-40 inline-block relative">
 <a 
    className="h-full w-full group flex flex-col items-center"
    href={link}
    target="_blank" rel="noopener noreferrer"
  >
    <div className="relative flex-1 flex items-center justify-center w-full h-1">
      <img
        className="absolute inset-0 w-full h-full object-contain transition duration-300 ease opacity-0 group-hover:opacity-100 group-hover:blur-2xl"
        src={img}
        alt={`${name} logo`}
      />
      <img
        className="max-w-full max-h-full object-contain transition 3s ease-in group-hover:scale-110"
        src={img}
        alt={`${name} logo`}
      />
    </div>
    <span className="text-center text-lg md:text-2xl font-bebas mt-auto">{name}</span>
  </a>
</div>
  );
}

function ToolSet({ section=[], sectionTitle="" }) {
    const items = section.map((item)=>{
        return (
            <ToolsLogo key={item.name} img={item.svgPath} name={item.name} link={item.link} />
        );
    })
  return (
    <div className=" flex flex-col items-center toolset__container max-w-[var(--screen-limit)] px-12 ">
        <ToolSubtitle subtitle={sectionTitle}/>
        <div className=" md:gap-x-32 max-w-96 gap-x-20 gap-y-10 logos__container grid grid-cols-2 sm:grid-cols-3 justify-center place-items-center">
            {items}
        </div>
    </div>
  );
}

function ToolSubtitle({ subtitle=""}){
    return(
        <h3 className=" text-3xl md:text-4xl lg:text-5xl font-gochi text-center">
            {subtitle}
        </h3>
    );

}

export default function Tools() {
  return (
    <div id="tools" className="Tools_container flex flex-col max-w-7xl mx-auto mb-12">
        <div className="  lg:grid grid-cols-5 place-items-center">
            <div className=" col-start-4">
                <Title title="Tools" />
            </div>
        </div>
        <div className="lg:flex flex-wrap justify-center gap-x-6 md:gap-x-16" >
            <ToolSet section={toolsData.frontEnd} sectionTitle="Front-end" />
            <ToolSet section={toolsData.softwareDev} sectionTitle="Software" />
            <ToolSet section={toolsData.miscProgramming} sectionTitle="Extra" />
        </div>
    </div>
  );
}
