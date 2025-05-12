
// Types definition
export interface FormalEducation {
  degree: string;
  institution: string;
  years: string;
  description?: string;
  logoPath: string;
}

// Sample data for the formal education
export const formalEducation: FormalEducation[] = [
  {
    degree: "BSc Computer Science",
    institution: "Walter Sisulu University",
    years: "2016 - 2019",
    description: "Specialized in web development and artificial intelligence.",
    logoPath: "/lovable-uploads/wsu.png"
  },
  {
    degree: "National Senior Certificate",
    institution: "Manzomthombo Secondary School",
    years: "2010 - 2012",
    description: "Advanced Mathematics and Computer Science program.",
    logoPath: "/lovable-uploads/manzo.jpg"
  }
];

// Sample data for the courses and certificates
export const onlineCourses = [
  {
    title: "Advanced React & Redux",
    provider: "Udemy",
    date: "Dec 2022",
    duration: "20 hours",
    skills: ["React", "Redux", "Context API"]
  },
  {
    title: "TypeScript Masterclass",
    provider: "Frontend Masters",
    date: "Mar 2023",
    duration: "12 hours",
    skills: ["TypeScript", "Generics", "Type Guards"]
  },
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    date: "Jun 2022",
    duration: "30 hours",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid"]
  },
  {
    title: "Full Stack JavaScript",
    provider: "The Odin Project",
    date: "Aug 2022",
    duration: "80 hours",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB"]
  }
];

export const certificates = [
  {
    name: "Azure Fundamentals AZ-900",
    organization: "Microsoft",
    issued: "Aug 2023",
    expires: null,
    credentialId: "63254577F11BE4F",
    description: "Microsoft Azure cloud concepts, Azure workloads, security, privacy, pricing, and support."
  },
  {
    name: "AWS - Cloud Technical Essentials",
    organization: "AWS through Coursera",
    issued: "Mar 2025",
    expires: null,
    credentialId: "FB-FED-789012",
    description: "Comprehensive certification covering React, responsive design principles, and frontend optimization techniques."
  },
  {
    name: "Introduction to Cloud Computing",
    organization: "IBM through Coursera",
    issued: "FEB 2025",
    expires: null,
    credentialId: "FB-FED-789012",
    description: "Comprehensive certification covering React, responsive design principles, and frontend optimization techniques."
  },
  {
    name: "Cloud Computing Foundations",
    organization: "Duke Univ. through Cousera",
    issued: "Mar 2025",
    expires: null,
    description: "Covers basic to advanced JavaScript concepts including ES6, regular expressions, debugging, data structures and OOP."
  }
];
