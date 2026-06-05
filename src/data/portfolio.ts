export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Secure EHR Data Collection and Transmission Infrastructure",
    description:
      "Designed a secure electronic health record infrastructure integrating medical IoT devices with blockchain-based transmission systems. Incorporates context-aware access control and privacy protection using Zero-Knowledge Contracts for autonomous, user-centric healthcare environments.",
    technologies: ["Blockchain", "Solidity", "Zero-Knowledge Proofs", "IoT", "Smart Contracts"],
  },
  {
    title: "Blockchain-based Genomic Data Sharing Ecosystem",
    description:
      "Master's thesis research on secure genomic data sharing leveraging blockchain technology and trust-based access control mechanisms. Implements ZKP-based approaches for privacy-preserving information sharing across multiple biomedical institutions.",
    technologies: ["Blockchain", "ZKP", "Groth16 ZK-SNARKs", "Healthcare"],
  },
  {
    title: "Multi-modal Transportation Privacy System",
    description:
      "Summer research project developing an adaptive privacy-preserving system for multi-modal mobility trajectories. Dynamically adjusts protection level based on user context and transportation models.",
    technologies: ["Privacy-Preserving", "Location Privacy", "Python"],
  },
  {
    title: "Edge-Cloud Server Selection via Deep Reinforcement Learning",
    description:
      "Multi-objective optimization algorithm for edge computing environments achieving over 60% improvement compared to traditional approaches. Includes optimized SDN routing deployed in OpenFlow environments.",
    technologies: ["Deep Reinforcement Learning", "SDN", "OpenFlow", "Python", "Edge Computing"],
  },
  {
    title: "Automated Course Registration Microservice System",
    description:
      "Microservices-based system for HUST student course registration. Deployed scalable solution using Apache and Docker, successfully integrated in production for 200+ students. Received Excellence Project Award.",
    technologies: ["Microservices", "Docker", "Apache", "Postman", "Node.js"],
  },
];
