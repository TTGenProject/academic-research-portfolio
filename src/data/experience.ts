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
    date: "09/2025–Present",
    title: "Master's Thesis Researcher",
    company: "IBISC Laboratory, Université d'Évry Paris-Saclay",
    description:
      "Conducting in-depth analysis of secure genomic data sharing within the COSMO team. Developing trust-based solutions targeting IEEE Journal 2026 submission.",
    advisor: "Prof. Nazim Agoulmine",
    companyUrl: "https://www.ibisc.univ-evry.fr/",
  },
  {
    date: "12/2025–Present",
    title: "D4Gen Hackathon Researcher",
    company: "IBISC Laboratory",
    description:
      "Designing secure EHR data collection infrastructure with medical IoT devices and blockchain-based transmission systems incorporating zero-knowledge contracts.",
    advisor: "Dr. Adnan Imeri, Prof. Nazim Agoulmine",
    companyUrl: "https://www.ibisc.univ-evry.fr/",
  },
  {
    date: "05/2025–08/2025",
    title: "Summer Research Intern",
    company: "Faculty of Engineering, Porto University",
    description:
      "Developed adaptive privacy-preserving system for multi-modal transportation trajectories. Research presented at JDSE 2025 conference.",
    advisor: "Dr. Mariana Cunha, Prof. João P. Vilela",
    companyUrl: "https://www.fe.up.pt/",
  },
];
