export interface Experience {
  role: string;
  company: string;
  years: string;
  description: string;
  tags?: string[];
}


export const experience: Experience[] = [
  {
    role: "Backend Developer",
    company: "InQool",
    years: "2022 - 2025",
    description: "Worked on parcel tracking app Balíkovna and Electronic Construction Diary.",
    tags: ["Java","Spring Boot","Kafka","LDAP","Multi-tenant"],
  },
  {
    role: "Intern",
    company: "InQool",
    years: "2021 - 2022",
    description: "Helped integrate payment gateways and improve data pipelines.",
    tags: ["Payment Gateways","Data Pipelines","Integration"],
  }
];


