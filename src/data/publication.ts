export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "ESORCIS",
    title: "Blockchain-Based Selective Disclosure of Electronic Health Records via Zero-Knowledge Smart Contracts",
    authors: "Huyen-Trang Le, Huu-Hung Vuong, Adnan Imeri, Nazim Agoulmine",
    tldr: "Privacy-preserving approach for secure electronic health record sharing using blockchain and zero-knowledge proofs.",
    award: "🏆 A-Core Conference (Tier 1)",
  },
  {
    year: "2026",
    conference: "ADVANCEs 2026",
    title: "Analysis of ZKPs-based approaches of Multi-party blockchain-based genomic data sharing",
    authors: "Huyen-Trang Le, Adnan Imeri, Nazim Agoulmine",
    tldr: "Analysis and implementation of zero-knowledge proof mechanisms for secure multi-party genomic data sharing.",
  },
  {
    year: "2025",
    conference: "JDSE 2025",
    title: "Context-Aware Location Privacy-Preserving System for Multi-modal Transportation",
    authors: "Huyen-Trang Le, Mariana Cunha, João P. Vilela, Nazim Agoulmine",
    tldr: "Adaptive privacy preservation system for multi-modal transportation trajectories based on user context.",
  },
  {
    year: "2024",
    conference: "IEEE Cloud Summit",
    title: "Optimizing Edge-Cloud Server Selection: A Multi-Objective Deep Reinforcement Learning Approach",
    authors: "Huyen-Trang Le, Hai-Anh Tran, Truong-X. Tran",
    paperUrl: "https://doi.org/10.1109/Cloud-Summit61220.2024.00023",
    tldr: "Multi-objective optimization algorithm for edge computing environments achieving 60% improvement over traditional approaches.",
  },
];
