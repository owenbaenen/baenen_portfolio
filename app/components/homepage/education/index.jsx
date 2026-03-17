// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background section image */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Gradient line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-3">
          <span className="w-16 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white px-4 py-2 rounded-full text-sm sm:text-base uppercase tracking-wide font-medium flex items-center gap-2">
            <Image
              src="/rice-logo.svg"
              alt="Rice University logo"
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
            Education
          </span>
          <span className="w-16 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Lottie animation */}
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Education cards */}
          <div>
            <div className="flex flex-col gap-6">
              {educations.map(education => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-3 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />

                    {/* Duration */}
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {education.duration}
                      </p>
                    </div>

                    <div className="flex items-center gap-x-8 px-3 py-5">
                      {/* Icon */}
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>

                      {/* Education text */}
                      <div>
                        {/* Title */}
                        <p className="text-base sm:text-xl mb-1 font-medium">
                          {education.title}
                        </p>

                        {/* Institution */}
                        <p className="text-sm sm:text-base">{education.institution}</p>

                        {/* Major */}
                        {education.major && (
                          <p className="text-sm sm:text-base text-gray-400 mb-1">
                            Major: {education.major}
                          </p>
                        )}

                        {/* Minor */}
                        {education.minor && (
                          <p className="text-sm sm:text-base text-gray-400 mb-1">
                            Minor: {education.minor}
                          </p>
                        )}

                        {/* Optional honors */}
                        {education.honors && (
                          <p className="text-sm sm:text-base text-gray-400">{education.honors}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
