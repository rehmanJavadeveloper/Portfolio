import project1 from "../assets/projects/project-1.jpg";
import crypto from "../assets/projects/crypto.jpg"
import codegeeks from "../assets/projects/codegeeks.jpg"
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";


export const HERO_CONTENT = `I am an enthusiastic and versatile aspiring full stack developer with a passion for crafting efficient and user-friendly web applications. My journey into web development stems from a strong curiosity about technology and problem-solving, which has evolved through practical projects and professional training.

While working on projects, I’ve gained experience in tools and technologies like React, Java, Spring Boot, Hibernate, and MySQL. I thrive in collaborative settings and enjoy solving real-world problems to deliver impactful solutions. Outside of development, I stay active, explore cutting-edge technologies, and continuously look for opportunities to grow my skills.`;

export const ABOUT_TEXT = `I am a passionate and dedicated aspiring full stack developer with a knack for building scalable and efficient web applications. With hands-on experience from internships and projects, I have honed my skills in front-end technologies like HTML5, CSS3, JavaScript, and React, as well as back-end technologies such as Java, Spring Boot, Hibernate, and MySQL.

I am eager to contribute my problem-solving abilities and technical expertise to create innovative solutions that enhance user experiences and drive growth. As a lifelong learner, I enjoy staying updated on emerging technologies and collaborating with teams to tackle complex challenges.`;

export const EXPERIENCES = [
  {
    image: project5, 
    // year: "1st May 2024 - 30th May 2024",
    
    role: "Java Developer Intern",
    company: "Techplement   May 2024 - 30th June 2024 ",
    description: `Contributed to the Personal Finance Manager project using Spring MVC, Hibernate, Java, and MySQL, achieving a 20% improvement in performance.
      Designed and implemented modular features, reducing application crash rates by 15% and enhancing user experience.
      Coordinated with cross-functional teams to deliver project goals 10% ahead of schedule, ensuring seamless integration and optimized workflows.`,
    technologies: ["Spring MVC", "Hibernate", "Java", "MySQL"],
  },
  
  
  
];

export const PROJECTS = [
  {
    title: "Crypto Trading Platform",
    image: crypto,
    description:
      "A fully functional crypto trading platform with features like Real-Time Market Data, buy/sell interface, and Portfolio Management.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Java", "MySQL DB", "Spring Boot", "Hibernate"],
  },
  {
    title: "Code Geeks",
    image: codegeeks,
    description:
      "A fully functional website where user can learn programing langaues with features such as interactive coding tutorials, live code compiler, and responsive design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind CSS", "ReactJS"],
  },
  
];

export const CONTACT = {
  address: "Wadala Mumbai, Maharshtra",
  phoneNo: "+91 9967426665 ",
  email: "kabdulrehman872@gmail.com",
};
