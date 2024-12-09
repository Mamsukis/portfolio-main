import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple underline">work experience</span>
      </h1>

      <div className="gap-10 grid grid-cols-1 lg:grid-cols-4 mt-12 w-full">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background:
                "linear-gradient(45deg, #1b1d1c 0%, #1b1d1c 35%, #006D5B  100%)",
              // backgroundColor:
              //   "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 border-neutral-200 dark:border-slate-800 text-black dark:text-white"
          >
            <div className="flex lg:flex-row flex-col lg:items-center gap-2 py-6 p-3 md:p-5 lg:p-10">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ms-5">
                <h1 className="font-bold text-start text-xl md:text-2xl">
                  {card.title}
                </h1>
                <p className="mt-3 font-semibold text-start text-white-100">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
