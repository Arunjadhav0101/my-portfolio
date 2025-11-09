import React from "react";
import { FaFacebook, FaGithub , FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-gray-800">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub className="bg-transparent"  />, link: "https://github.com/arunjadhav0101" },
            { icon: <FaLinkedin className="bg-transparent" />, link: "https://www.linkedin.com/in/arunjadhav0101/" },
            { icon: <FaWhatsappSquare className="bg-transparent" />, link: "https://wa.me/+918010928057" },
           
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-green-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Arun Jadhav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;