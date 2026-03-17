// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-10 lg:my-16 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-4 lg:py-5">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-5">
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-0 right-0 top-10 flex items-center">
            <span className="h-2 w-full rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.18)]"></span>
            <span className="ml-2 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white/80"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 pt-2 px-2 lg:px-0">
            {[...experiences].reverse().map(exp => (
              <div key={exp.id} className="relative">
                <span className="absolute left-1/2 -translate-x-1/2 top-8 h-3 w-3 rounded-full bg-white ring-[6px] ring-[#0d1224] shadow-[0_0_8px_rgba(255,255,255,0.25)]"></span>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 h-8 w-px bg-white/40"></span>
                <div className="mt-14">
                  <GlowCard identifier={`experience-${exp.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-[11px] sm:text-xs text-[#16f2b3]">
                          {exp.duration}
                        </p>
                      </div>
                      <div className="flex items-start gap-x-4 px-3 py-4">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-110">
                          <BsPersonWorkspace size={28} />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base mb-1 font-medium">
                            {exp.title}
                          </p>
                          {exp.extra && (
                            <p className="text-xs sm:text-sm text-gray-400 mb-2">
                              {exp.extra}
                            </p>
                          )}
                          <p className="text-xs sm:text-sm">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
