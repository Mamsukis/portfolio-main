"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple underline">recent projects</span>
      </h1>
      <div className="gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 p-4">
        {projects.map((item) => (
          <div
            className="flex justify-center items-center w-[80vw] sm:w-96 h-[25rem] lg:min-h-[32.5rem]"
            key={item.id}
          >
            <PinContainer title={item.name}>
              <div className="relative flex justify-center items-center mb-10 w-[80vw] sm:w-96 h-[20vh] lg:h-[30vh] overflow-hidden">
                <div
                  className="relative lg:rounded-3xl w-full h-full overflow-hidden"
                  style={{ backgroundColor: "#006d5b" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="bottom-0 z-10 absolute"
                />
              </div>

              <h1 className="line-clamp-1 font-bold text-base md:text-xl lg:text-2xl">
                {item.title}
              </h1>

              <p
                className="line-clamp-2 font-light lg:font-normal text-sm lg:text-xl"
                style={{
                  color: "#7c7c7c",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex justify-between items-center mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center border-white/[.2] bg-black border rounded-full w-8 lg:w-10 h-8 lg:h-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex text-purple text-sm md:text-xs lg:text-xl">
                    <a href={item.link} target="_blank">
                      Check Live Site
                    </a>
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
