export default function Contact(){
    return(
        <div id="contact" className=" flex items-center justify-center relative contact__container bg-[url(/water.gif)] h-[651px] bg-cover">
            <div className="absolute top-0 bottom-0 left-0 right-0 transition  lg:backdrop-blur-sm"></div>
            <div className="absolute -top-5 left-0 right-0 h-10 bg-default blur-xs scale-110"></div>
            <div className="z-10 flex flex-col">
                <h2 className=" select-none text-5xl lg:text-8xl font-rubik text-bg">Contact</h2>
                <ul className="flex justify-around ">
                    <li className="h-10 w-10 lg:h-20 lg:w-20"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/herbart-hernandez/" ><img src="/logos/linkedin.svg" alt="linkedin link and logo"/></a></li>
                    <li className="h-10 w-10 lg:h-20 lg:w-20"><a target="_blank" rel="noopener noreferrer" href="https://github.com/herba1"><img src="/logos/github-mark.svg" alt="github link and logo"/></a></li>
                    <li className="h-10 w-10 lg:h-20 lg:w-20"><a href="mailto:burnedcard77@gmail.com"><img src="/logos/email.svg" alt="email link and logo"/></a></li>
                </ul>
            </div>

        </div>
    );
}