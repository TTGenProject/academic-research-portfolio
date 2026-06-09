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
      "Designed a secure electronic health record infrastructure integrating medical IoT devices with blockchain-based transmission systems across hospitals, with the incorporation of context-aware access control and privacy protection using Zero-Knowledge Contracts. Implemented a centralized SDN architecture within hospitals for secure ESP32-based IOT device data collection using ONOS controllers in virtualized Mininet WiFi environments.",
    technologies: ["Move", "Walrus", "Seal", "Sui", "Docker", "Mininet WiFi", "Python", "OpenFlow", "ONOS", "Vercel"],
  },
  {
    title: "Blockchain-based Genomic Data Sharing Ecosystem",
    description:
      "Research on secure genomic data sharing leveraging blockchain technology and trust-based access control mechanisms. Implements ZKP-based approaches in Groth16 ZK-SNARKs for privacy-preserving information sharing.",
    technologies: ["Move", "Seal", "Rust", "SUI", "Vercel", "Walrus"],
  },
  {
    title: "Multi-modal Transportation Privacy System",
    description:
      "Developed an adaptive privacy-preserving system for multi-modal mobility trajectories. Dynamically adjusts protection level based on user context and transportation modes within the veo-distinguisability framework.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Github"],
  },
  {
    title: "Edge-Cloud Server Selection via Deep Reinforcement Learning",
    description:
      "Multi-objective optimization algorithm for edge computing environments achieving over 60% improvement in performance. Implemented using deep reinforcement learning frameworks.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Github"],
  },
  {
    title: "Automated Course Registration Microservice System",
    description:
      "Microservices-based system for student course registration. Deployed scalable solution using Node.js, Docker, successfully integrated in production for 200+ students. Received Excellence Project Award.",
    technologies: ["Node.js", "Express.js", "Docker", "PostgreSQL", "Postman"],
  },
];
