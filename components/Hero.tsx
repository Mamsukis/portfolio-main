import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pt-36 pb-10">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 md:-top-20 -left-10 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full w-[50vw] h-[80vh]"
          fill="#006D5B"
        />
        <Spotlight
          className="top-28 left-80 w-[50vw] h-[80vh]"
          fill="#006D5B"
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div className="top-0 left-0 absolute flex justify-center items-center bg-grid-black-100/[0.2] dark:bg-grid-white/[0.03] bg-white dark:bg-black-100 w-full h-screen">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute inset-0 flex justify-center items-center bg-white dark:bg-black-100 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative z-10 flex justify-center my-20">
        <div className="flex flex-col justify-center items-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-white text-xs uppercase tracking-widest">
            Welcome to My Creative World
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Designing Visual Stories, Developing Seamless Experiences."
            className="text-[40px] text-center md:text-5xl lg:text-6xl"
          />

          <p className="mb-4 text-center text-sm md:text-lg lg:text-2xl md:tracking-wider">
            Hi! I&apos;m{" "}
            <span className="font-bold text-[#006D5B] underline">Mohammed</span>
            , a Graphics Designer and Frontend Developer.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
