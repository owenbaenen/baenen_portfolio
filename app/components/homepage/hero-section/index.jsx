// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-amber-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-amber-500">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-white hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href="https://scholar.google.com/citations?hl=en&user=F3i752cAAAAJ"
              target='_blank'
              className="transition-all text-white hover:scale-125 duration-300"
            >
              <Image
                src="/google_scholar.svg"
                alt="Google Scholar"
                width={30}
                height={30}
                className="invert brightness-0"
              />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="rounded-full transition-all duration-300">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#0d1224] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 bg-gradient-to-b from-[#1af5b6] to-[#10c78f] shadow-[0_6px_14px_rgba(22,242,179,0.18)] ring-1 ring-[#16f2b3]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] hover:-translate-y-[1px] hover:shadow-[0_8px_18px_rgba(22,242,179,0.22)] active:translate-y-[1px] active:shadow-none">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[#0d1224] no-underline transition-all duration-200 ease-out hover:text-[#0d1224] hover:no-underline md:font-semibold bg-gradient-to-b from-[#1af5b6] to-[#10c78f] shadow-[0_6px_14px_rgba(22,242,179,0.18)] ring-1 ring-[#16f2b3]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] hover:-translate-y-[1px] hover:shadow-[0_8px_18px_rgba(22,242,179,0.22)] active:translate-y-[1px] active:shadow-none" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-6">
            <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
              Profile Snapshot
            </div>
            <code className="font-mono text-xs sm:text-sm lg:text-base">
              <div>
                <span className="mr-2 text-amber-500">const</span>
                <span className="mr-2 text-white">profile</span>
                <span className="mr-2 text-amber-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">education:</span>{" "}
                <span className="text-gray-400">{`'`}</span>
                <span className="text-[#16f2b3]">
                  B.S. Mechanical Engineering, Rice University | Houston, TX
                </span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">minor:</span>{" "}
                <span className="text-gray-400">{`'`}</span>
                <span className="text-[#16f2b3]">
                  Computational and Applied Mathematics
                </span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">focus:</span>{" "}
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Software</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Controls</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Embedded Systems</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Data Analysis</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Simulation</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">coreTools:</span>{" "}
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">C/C++</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MATLAB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">ROS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">RTOS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">OpenMP/MPI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Linux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Git</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">current:</span>{" "}
                <span className="text-gray-400">{`'`}</span>
                <span className="text-cyan-300">
                  Engineering Rotational Development Program, Caterpillar
                </span>
                <span className="text-gray-400">{`'`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
