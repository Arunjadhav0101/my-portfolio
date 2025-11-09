import sppuLogo from "./assets/education_logo/sppu.png";

export const SkillsInfo = [
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS" },
      { name: "GCP" },
      { name: "Docker" },
      { name: "Jenkins" },
      { name: "GitHub Actions" },
      { name: "Terraform" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Flask" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C" },
      { name: "Python" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Linux" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "cravita",
    role: "DevOps and Cloud Intern",
    company: "Cravita Technologies",
    date: "Aug 2025 - Present",
    desc: "Working as a DevOps and Cloud Intern focusing on automation, deployment pipelines, and cloud infrastructure. Experienced with AWS, Docker, Jenkins, CI/CD, and GitHub Actions. Contributed to real-time cloud projects, optimizing deployments using Terraform and containerization.",
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "Python",
    ],
  },
];

export const education = [
  {
    id: 1,
    img: sppuLogo,
    school: "Savitribai Phule Pune University (SPPU)",
    date: "July 2023 - June 2026",
    grade: "8.12 CGPA",
    desc: "Pursuing a Bachelor of Computer Applications (BCA) degree at Savitribai Phule Pune University. Coursework includes Operating Systems, Data Structures, Web Technologies, Database Management, and Software Engineering. Actively working on cloud and DevOps-related projects alongside academics.",
    degree: "Bachelor of Computer Applications - BCA",
  },
];

export const projects = [
  {
    id: 0,
    title: "Templatz",
    description:
      "An AI-powered web app that generates formal letters, resumes, and content instantly using natural language processing. Designed for professionals and students to create well-structured templates easily.",
    image: "templatz",
    tags: ["React JS", "Python", "FastAPI", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Arunjadhav0101/templatz",
    webapp: "https://templatz.vercel.app/",
  },
];
