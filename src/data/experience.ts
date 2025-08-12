export interface Experience {
  role: string;
  company: string;
  years: string;
  description: string;
  image?: string;
  tags?: string[];
}


export const experience: Experience[] = [
  {
    role: "One Engineer",
    company: "Oracle NetSuite",
    years: "2025 - now ",
    description: "Working on ERP system managing Projects, Resource Planning, Time allocation, etc.",
    image: '/images/NetSuite.jpg',
    tags: ["Java","JavaScript","SuiteScript"],
  },
  {
    role: "Backend Developer",
    company: "InQool",
    years: "2022 - 2025",
    description: "Worked on parcel tracking app Balíkovna and Electronic Construction Diary.",
    image: '/images/InQool.jpg',
    tags: ["Java","Spring Boot","Kafka","LDAP","Multi-tenant"],
  },
  {
    role: "Intern",
    company: "InQool",
    years: "2021 - 2022",
    description: "Helped integrate payment gateways and improve data pipelines.",
    image: '/images/InQool.jpg',
    tags: ["Payment Gateways","Data Pipelines","Integration"],
  }
];


