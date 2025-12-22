// data/experience.ts

export type ExperienceItem = {
  date: string;
  title: string;
  company: string;
  location: string;
  content: string;
};

export const experiences: ExperienceItem[] = [
  {
    date: "Present",
    title: "Software Developer (Freelance)",
    company: "Self-employed",
    location: "Remote",
    content:
      "Building and delivering full-stack applications for clients using modern web technologies. Responsible for system architecture, development, deployment, and UI/UX decisions.",
  },
  {
    date: "2022 – 2024",
    title: "Full-stack Software Engineer",
    company: "Myanmar Software Integrated Solutions",
    location: "Yangon, Myanmar",
    content:
      "Worked on production-grade web applications, contributing to both frontend and backend systems. Focused on performance, maintainability, and scalable architecture.",
  },
  {
    date: "Early 2022",
    title: "Solution Architect Intern",
    company: "Myanmar Software Integrated Solutions",
    location: "Yangon, Myanmar",
    content:
      "Assisted in designing system architectures, translating business requirements into technical solutions, and supporting senior engineers in implementation planning.",
  },
  {
    date: "Before 2022",
    title: "Graphic Designer (Freelance)",
    company: "Self-employed",
    location: "Remote",
    content:
      "Designed visual assets and UI layouts for digital products. Built a strong foundation in design systems, branding, and user-focused thinking.",
  },
];
