import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import arun from "../../assets/arun.jpg"; // rename your image file accordingly

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Arun Jadhav
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#10B981] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#10B981]">
              <Typewriter
                words={[
                  "DevOps Engineer",
                  "Cloud Enthusiast",
                  "Python Developer",
                  "FastAPI & Flask Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate <span className="text-[#10B981] font-semibold">DevOps and Cloud Intern</span> at 
            <span className="text-[#10B981] font-semibold"> Cravita Technologies</span>. 
            I specialize in automating deployment pipelines, managing cloud infrastructure, and optimizing 
            workflows using tools like AWS, Docker, Jenkins, GitHub Actions, and Terraform.  
            I’m also skilled in backend development using <span className="text-[#10B981] font-semibold">Python, FastAPI,</span> and 
            <span className="text-[#10B981] font-semibold"> Flask</span>.  
            My goal is to bridge the gap between development and operations by building efficient, scalable, 
            and cloud-native solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://github.com/Arunjadhav0101" // replace with your resume or GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #10B981, #059669)',
              boxShadow: '0 0 2px #10B981, 0 0 2px #10B981, 0 0 40px #10B981',
            }}
          >
            VIEW GITHUB
          </a>
        </div>

        {/* Right Side */}
        <div className=" flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-green-700 rounded-full "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={arun}
              alt="Arun Jadhav"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
