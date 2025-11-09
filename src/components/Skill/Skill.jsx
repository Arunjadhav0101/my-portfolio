
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import * as SiIcons from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-green-500 mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-10 justify-center mt-10">
      {SkillsInfo.map((category) => (
        <Tilt
        className="max-w-fit max-h-fit"
          key={category.title}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <div
            key={category.title}
            className="w-full bg-gray-950 backdrop-blur-md px-6 rounded-2xl border border-green-500/40
          shadow-green-800 p-4"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items - 3 per row on larger screens */}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  {(() => {
                    const iconNameMap = {
                      AWS: "SiAmazonaws",
                      GCP: "SiGooglecloud",
                      Docker: "SiDocker",
                      Jenkins: "SiJenkins",
                      "GitHub Actions": "SiGithubactions",
                      Terraform: "SiTerraform",
                      "CI/CD": "SiCircleci",
                      Python: "SiPython",
                      FastAPI: "SiFastapi",
                      Flask: "SiFlask",
                      C: "SiC",
                      Git: "SiGit",
                      GitHub: "SiGithub",
                      "VS Code": "SiVisualstudiocode",
                      Postman: "SiPostman",
                      Linux: "SiLinux",
                    };

                    const iconName = iconNameMap[skill.name];
                    const Icon = (iconName && SiIcons[iconName]) || FaCode;
                    return (
                      <>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        <span className="text-xs text-gray-300">
                          {skill.name}
                        </span>
                      </>
                    );
                  })()}
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;