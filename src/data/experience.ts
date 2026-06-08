export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2025—Present",
    title: "Student Researcher",
    company: "IBISC Laboratory (Informatique, Bioinformatique, Systèmes Complexes EA 4526), Evry Paris-Saclay University",
    description:
      "Blockchain-based Trustworthy Genomic Data Sharing Using Zero-Knowledge Proof for Improving Consumer Identity Protection. Development of a Sui blockchain-based genomic data sharing framework that enables access verification by Groth16 zero-knowledge succinct non-interactive argument of knowledge (zk-SNARK) mechanisms without revealing the requester identity, ensuring complete privacy during institutional-level research analysis.",
    advisor: "Dr.Adnan Imeri, Prof. Nazim Agoulmine",
    companyUrl: "https://www.ibisc.univ-evry.fr/",
  },
  {
    date: "05/2025–09/2025",
    title: "Student Researcher",
    company: "Faculdade de Ciências da Universidade do Porto (FCUP)",
    description:
      "Context-Aware Privacy Preservation in Multi-modal Transportation Systems. Development of an adaptive privacy-preserving system for multimodal mobility trajectories, capable of dynamically adjusting protection level according to user's context and mode of transportation.",
    advisor: "Dr. Mariana Cunha, Prof. João P. Vilela",
    companyUrl: "https://www.fc.up.pt/",
  },
  {
    date: "2023–2024",
    title: "Student Researcher",
    company: "Bach khoa Cybersecurity Research Center (BKCS), Hanoi University of Science and Technology (HUST)",
    description:
      "Multi-objective Deep Reinforcement Learning for Edge-Cloud Servers Selection. Designed and implemented a multi-objective optimization algorithm for performance in edge computing environments, achieving over 60% improvement compared to traditional approaches.",
    advisor: "Prof. Hai-Anh Tran",
    companyUrl: "https://bkcs.hust.edu.vn/",
  },
  {
    date: "2022–2023",
    title: "Back End Developer",
    company: "BKC LABS, Institute for Digital Technology and Economy (BK Fintech), Hanoi University of Science and Technology (HUST)",
    description:
      "Automated Course Registration Microservice System for HUST Students. Built a microservices-based system, validated via Postman, and deployed a scalable solution using Apache and Docker, successfully integrating in production for nearly 200 students.",
    advisor: "Prof. Ba-Lam Do",
    companyUrl: "https://bkc-labs.io/",
  },
];
