// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="order-2 lg:order-1 max-w-2xl">
          <p className="font-medium text-[#16f2b3] text-xl uppercase mb-4">
            Who I am?
          </p>
          <div className="rounded-2xl border border-[#1b2c68a0] bg-[#0b1229] p-5 sm:p-6 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
            <div className="text-gray-300 text-base lg:text-lg leading-relaxed space-y-4">
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
        </div>
        <div className="flex flex-col items-center order-1 lg:order-2 lg:items-end">
          <div className="flex flex-col items-end w-full">

            {/* Image */}
            <Image
              src={personalData.profile}
              width={340}
              height={340}
              alt="Owen Baenen"
              className="rounded-full transition-all duration-1000 hover:scale-105 cursor-pointer object-cover w-[320px] h-[320px] lg:w-[440px] lg:h-[440px] lg:-translate-x-12"
            />

            {/* ABOUT ME section */}
            <div className="hidden lg:flex items-center justify-end mt-6 w-full">
              <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md lg:translate-x-2">
                ABOUT ME
              </span>

              {/* Long line */}
              <span className="ml-2 h-[6px] w-[200px] bg-[#1a1443]"></span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

