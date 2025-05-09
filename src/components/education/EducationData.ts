
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
    name: "AWS Certified Developer - Associate",
    organization: "Amazon Web Services",
    issued: "Jan 2023",
    expires: "Jan 2026",
    credentialId: "AWS-DEV-123456",
    description: "Validates technical expertise in developing and maintaining AWS-based applications."
  },
  {
    name: "Professional Frontend Developer",
    organization: "Meta (formerly Facebook)",
    issued: "Nov 2022",
    expires: null,
    credentialId: "FB-FED-789012",
    description: "Comprehensive certification covering React, responsive design principles, and frontend optimization techniques."
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    issued: "May 2022",
    expires: null,
    description: "Covers basic to advanced JavaScript concepts including ES6, regular expressions, debugging, data structures and OOP."
  }
];
