export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2025—Present",
    institution: "Paris-Saclay University",
    degree: "Master 2 in Computer and Network Systems (CNS-SR)",
    advisor: "Prof. Nazim Agoulmine",
    thesis: "Blockchain-based Trustworthy Genomic Data Sharing Using Zero-Knowledge Proof for Improving Consumer Identity Protection.",
    thesisUrl: "https://plmlatex.math.cnrs.fr/read/wkpvtpthqyvv",
  },
  {
    year: "2020—2024",
    institution: "Hanoi University of Science and Technology (HUST)",
    degree: "Computer Science Bachelor Degree in PFIEV Vietnam-France Engineering Program (IT-EP)",
    advisor: "Prof. Hai-Anh Tran",
    thesis: "Cloud-Edge Server Selection Optimization using Deep Reinforcement Learning in the context of Software-Defined Networking Routing Optimization.",
    thesisUrl: "https://drive.google.com/file/d/1e5LdUX-AlO5fo7LHsCDCb7R0pedUBUl7/view?usp=sharing",
  },
  {
    year: "2017—2020",
    institution: "Hanoi-Amsterdam High School for the Gifted",
    degree: "High School Diploma in Information Technology",
    advisor: "Prof. Nam-Phuong Truong",
  },
];
