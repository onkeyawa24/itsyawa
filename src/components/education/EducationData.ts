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

export interface OnlineCourse {
  title: string;
  provider: string;
  date: string;
  duration: string;
  skills?: string[];
}

// Sample data for the courses and certificates 
export const onlineCourses: OnlineCourse[] = [
  {
    title: "--- No online courses yet ---.",
    provider: "",
    date: "",
    duration: "",
    skills: ["", ""]
  },
  {
    title: "",
    provider: "",
    date: "",
    duration: "",
    skills: ["", ""]
  }
];

export interface Certificate {
  name: string;
  organization: string;
  issued: string;
  expires: string | null;
  credentialId?: string;
  description: string;
  certificateUrl?: string;
  imageUrl?: string;
}

export const certificates: Certificate[] = [
  {
    name: "Azure Fundamentals AZ-900",
    organization: "Microsoft",
    issued: "Aug 2023",
    expires: "No expire",
    credentialId: "63254577F11BE4F",
    description: "Microsoft Azure cloud concepts, Azure workloads, security, privacy, pricing, and support.",
    certificateUrl: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    imageUrl: ""
  },
  {
    name: "Professional Frontend Developer",
    organization: "Meta (formerly Facebook)",
    issued: "Nov 2022",
    expires: null,
    credentialId: "FB-FED-789012",
    description: "Comprehensive certification covering React, responsive design principles, and frontend optimization techniques.",
    certificateUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    imageUrl: "#"
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    issued: "May 2022",
    expires: null,
    description: "Covers basic to advanced JavaScript concepts including ES6, regular expressions, debugging, data structures and OOP.",
    certificateUrl: "https://www.freecodecamp.org/certification/your-username/javascript-algorithms-and-data-structures",
    imageUrl: "#"
  }
];
