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
    conference: "ACM Celebration of Women in Computing (womENcourage)",
    title: "Blockchain-based Trustworthy Genomic Data Sharing Using Zero-Knowledge Proof for Improving Consumer Identity Protection",
    authors: "Huyen-Trang Le, Adnan Imeri, Nazim Agoulmine",
    tldr: "Multi-party genomic data sharing (MGDS) platforms have become essential precision medicine and biomedical research [1], but genomic data (GD) is highly sensitive and can reveal donor identity private information. Existing sharing systems often require disclose identity details, creating privacy risks and research competitive traces. ",
  },
  {
    year: "2026",
    conference: "Paris Saclay Summer School on Privacy, Protocols and Proofs (P3S3)",
    title: "Privacy-Preserving Aggregated Biomedical Analysis Using Zero-Knowledge Proofs in Genomic Data Sharing Blockchain Platform",
    authors: "Huyen-Trang Le, Adnan Imeri, Nazim Agoulmine",
    tldr: "Secure genomic data (GD) sharing is essential for precision medicine and biomedical research. However, accessing digital GD files (GDFs) requires identity-based authorization, which may expose sensitive traces of institutional activity, such as research interests, dataset preferences, and emerging innovation directions. This creates privacy concerns and may lead to unequal competitive advantages among biomedical institutions. To address this issue, we propose a trustless Sui blockchain-based GD sharing (BGDS) framework that enables access verification by Groth16 zero-knowledge succinct non-interactive argument of knowledge (zk-SNARK) mechanisms without revealing the requester identity. Our system also supports replay resistance and time-range checks to prevent proof reuse against forward security threat models, ensuring complete privacy during institutional-level research analysis.",
  },
  {
    year: "2026",
    conference: "31st European Symposium on Research in Computer Security (ESORICS)",
    title: "Blockchain-Based Selective Disclosure of Electronic Health Records via Zero-Knowledge Smart Contracts",
    authors: "Huyen-Trang Le, Huu-Hung Vuong, Adnan Imeri, Nazim Agoulmine",
    tldr: `Electronic Health Records (EHRs) have enabled significant advances in personalized and precision medicine, the management of complex treatment cases, and the enhancement of clinical analysis when collaborating among healthcare institutions. However, data privacy issues, such as patient re-identification, have posed challenges to sharing data among multiple biomedical parties. This paper leverages zk-SNARKs in conjunction with smart contracts (SCs) to protect sensitive data. It allows verification without disclosure and avoids unnecessary re-execution across two scenarios. Non-sensitive data are handled off-chain with role-based access control, ensuring scalability and secure identity management. The proposed approach introduces a preprocessing module that separates sensitive and non-sensitive data. It significantly reduces computational overhead while maintaining strict access control for authorized biomedical institutions. Built on the Sui network, our decentralized blockchain-based architecture leverages an object-centric data model, parallel transaction execution, and low-latency finality to enable energy-efficient, scalable deployment in real-world healthcare environments. Experimental results show that lightweight selective-disclosure circuits can generate proofs in as little as 8.9 ms, while more complex analysis circuits of about 18k constraints remain below 60 ms per proof on consumer-grade hardware. On-chain verification on Sui incurs a constant cost of approximately 0.001 SUI per proof, independent of circuit complexity, and achieves substantial cost reductions compared with Ethereum-based alternatives. Off-chain storage achieves efficient and reliable data availability through Walrus erasure coding, incurring only a 4.5× storage overhead while maintaining low access latency, with a one-time decryption overhead of around 782ms per session in the SEAL-based access mechanism. These results demonstrate that the proposed framework provides practical, privacy-preserving, and scalable EHR sharing for biomedical research settings.`,  },
  {
    year: "2026",
    conference: "13th International Workshop on ADVANCEs in ICT Infrastructures and Services (ADVANCEs)",
    title: "Analysis of ZKPs-based approaches of Multi-party blockchain-based genomic data sharing",
    authors: "Huyen-Trang Le, Adnan Imeri, Nazim Agoulmine",
    tldr: "The secure, privacy-preserving sharing of genomic data across multiple institutions is a critical enabler for precision medicine, yet it remains fundamentally constrained by the identifiability and immutability of genomic data. While blockchain technologies have been proposed to provide decentralized governance, auditability, and tamper resistance for genomic data sharing, blockchain-only solutions are insufficient because they expose transaction metadata, access patterns, and smart-contract logic, leaving significant privacy risks unresolved. Zero-Knowledge Proofs (ZKPs) have recently emerged as a key cryptographic primitive for addressing such limitations, enabling verifiable access control, policy compliance, and computation correctness without disclosing sensitive genomic data. Although several surveys examine ZKPs or blockchain in isolation or across heterogeneous application domains, there is currently no dedicated survey that systematically analyzes their combined use in multi-party blockchain-based genomic data sharing systems. This paper addresses this gap by presenting a comprehensive, domain-specific survey of ZKP-enabled blockchain architectures for genomic data sharing. We classify existing approaches by architectural models, ZKP techniques, governance mechanisms, and threat-mitigation capabilities, and then compare their assumptions, performance characteristics, and deployment maturity. Furthermore, we identify open challenges in scalability, interoperability, proof overhead, and regulatory compliance, and outline future research directions for secure, scalable, and ethically compliant genomic data-sharing ecosystems.",
    paperUrl: "https://doi.org/10.1109/Cloud-Summit61220.2024.00023",
  },
  {
    year: "2025",
    conference: "10th Junior Conference on Data Sciences and Engineering (JDSE)",
    title: "Context-Aware Location Privacy-Preserving System for Multi-modal Transportation",
    authors: "Huyen-Trang Le, Mariana Cunha, João P. Vilela, Nazim Agoulmine",
    tldr: "Personal mobility trajectories, widely collected by IoT devices, pose serious privacy risks, potentially revealing sensitive information such as user home and work addresses. When combined with multi-modal transport data, such information can enable re-identification and inference attacks. To address these challenges, we propose a context-aware privacy-preserving system for multi-modal transportation that dynamically adjusts protection levels according to the user context. Based on different transport modes, the system configures Location Privacy-Preserving Mechanism (LPPM), enabling fine-grained protection while maintaining utility. Using real-world data, the preliminary results demonstrate that adaptive configurations outperform static settings and highlight the effectiveness of context-driven privacy mechanisms in safeguarding user trajectories without undermining the quality of data.",
    paperUrl: "https://kdradjat.github.io/jdse-2025/posters/3_Context-Aware_Location_Privacy-Preserving.pdf",
  },
  {
    year: "2024",
    conference: "IEEE Cloud Summit",
    title: "Optimizing Edge-Cloud Server Selection: A Multi-Objective Deep Reinforcement Learning Approach",
    authors: "Huyen-Trang Le, Hai-Anh Tran, Truong-X. Tran",
    tldr: "Edge computing presents an efficient solution for alleviating the workload on cloud servers. However, effectively selecting edge and cloud servers poses a significant challenge. Numerous factors influence the performance of this server selection problem, including delays and link utilization. This paper addresses the issue of server selection in edge networks and cloud server clusters. Specifically, a Multi-Objective Deep Reinforcement Learning (MORL)-based resource scheduling scheme that integrates Proximal Policy Optimization (PPO) is proposed. Furthermore, we introduce a meticulously designed state encoding method and a sophisticated reward function to enhance the accuracy of utility computations. Experimental findings underscore the efficacy of the MORL scheme, demonstrating substantial improvement compared to existing server selection algorithms.",
    paperUrl: "https://doi.org/10.1109/Cloud-Summit61220.2024.00023",
  },
];
