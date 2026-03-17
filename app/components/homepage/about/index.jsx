// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="order-2 lg:order-1 max-w-2xl">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <div className="text-gray-200 text-base lg:text-lg leading-relaxed space-y-4">
            <p>
              Hello! I&apos;m{" "}
              <strong className="text-white font-semibold">
                {personalData.name}
              </strong>
              , a{" "}
              <strong className="text-white font-semibold">
                Mechanical Engineering
              </strong>{" "}
              graduate from{" "}
              <strong className="text-white font-semibold">
                Rice University
              </strong>{" "}
              with a minor in{" "}
              <strong className="text-white font-semibold">
                Computational and Applied Mathematics
              </strong>
              .
            </p>
            <p>
              I have hands-on experience designing and implementing{" "}
              <strong className="text-white font-semibold">
                control and software systems
              </strong>
              , performing{" "}
              <strong className="text-white font-semibold">
                simulation-driven analysis
              </strong>
              , and using those insights to improve{" "}
              <strong className="text-white font-semibold">
                efficiency
              </strong>{" "}
              and support{" "}
              <strong className="text-white font-semibold">
                engineering decisions
              </strong>
              .
            </p>
            <p>
              My work has spanned{" "}
              <strong className="text-white font-semibold">
                software development
              </strong>
              ,{" "}
              <strong className="text-white font-semibold">
                on-machine testing
              </strong>
              ,{" "}
              <strong className="text-white font-semibold">
                advanced analytics
              </strong>
              , and{" "}
              <strong className="text-white font-semibold">
                machine learning
              </strong>{" "}
              to extract{" "}
              <strong className="text-white font-semibold">
                actionable insights
              </strong>{" "}
              from complex data. I excel at integrating{" "}
              <strong className="text-white font-semibold">mechanical</strong>
              ,{" "}
              <strong className="text-white font-semibold">
                computational
              </strong>
              , and{" "}
              <strong className="text-white font-semibold">software</strong>{" "}
              approaches to solve technical challenges in{" "}
              <strong className="text-white font-semibold">
                cross-disciplinary environments
              </strong>
              .
            </p>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2 lg:justify-end lg:items-start">
          <Image
            src={personalData.profile}
            width={440}
            height={440}
            alt="Owen Baenen"
            className="rounded-lg transition-all duration-1000 hover:scale-105 cursor-pointer object-contain w-[320px] h-[320px] lg:w-[440px] lg:h-[440px] shrink-0 bg-[#0b1229] p-2 self-start"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
