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
    degree: "BSc. in Computer Science",
    institution: "Walter Sisulu University",
    years: "2016 - 2019",
    description: "Specialized in web development and artificial intelligence.",
    logoPath: "/lovable-uploads/wsu.png"
  },
  {
    degree: "National Senior Certificate",
    institution: "Manzomthombo Secondary School",
    years: "2010 - 2012",
    description: "Grade 12",
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
    title: "Introduction to Networking and Cloud Computing",
    provider: "IBM through Coursera",
    date: "Feb 2025",
    duration: "1 Weeks",
    skills: ["Cybersecurity", "Network Security", "Network Infrastructure"]
  },
  {
    title: "Cloud Computing Foundations",
    provider: "Duke University through Coursera",
    date: "Mar 2025",
    duration: "2 Weeks",
    skills: ["Cloud Infrastructure", "Serverless Computing", "DevOps"]
  },
  {
    title: "Generative AI: Prompt Engineering",
    provider: "IBM through Coursera",
    date: "May 2025",
    duration: "2 Weeks",
    skills: ["Prompt AI", "Machine Learning"]
  },
  {
    title: "Introduction to Networking and Storage",
    provider: "IBM through Coursera",
    date: "Apr 2025",
    duration: "2 Weeks",
    skills: ["VNet", "Cloud Network"]
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
    expires: null,
    credentialId: "63254577F11BE4F",
    description: "Microsoft Azure cloud concepts, Azure workloads, security, privacy, pricing, and support.",
    certificateUrl: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    imageUrl: ""
  },
  {
    name: "Intro to Cloud Computing",
    organization: "IBM through Coursera",
    issued: "Feb 2025",
    expires: null,
    credentialId: "FB-FED-789012",
    description: "Comprehensive certification covering cloud concepts, Tenant management, security, privacy, pricing, and support.",
    certificateUrl: "https://coursera.org/share/89fca418456202408626db0e540d2658",
    imageUrl: "#"
  },
  {
    name: "AWS Cloud Technical Essentials",
    organization: "AWS through Coursera",
    issued: "Mar 2025",
    expires: null,
    description: "Covers AWS Management, Console AWS Identity & Access Management, Networking on AWS, Cloud Computing and AWS security",
    certificateUrl: "https://coursera.org/share/0b1e7c6d14e53bdeead6a56dfe92e83f",
    imageUrl: "#"
  }
];
