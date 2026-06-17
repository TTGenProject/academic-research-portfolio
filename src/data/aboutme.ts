export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  phone?: string;
  workAddress?: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "LE Huyen-Trang",
  title: "Master 2 Student & Researcher",
  institution: "Paris-Saclay University",
  description:
    "I'm a Master 2 student at <a href='https://www.univ-evry.fr/accueil.html'>Paris-Saclay University</a> specializing in Computer and Network Systems. My research focuses on secure healthcare data sharing, blockchain-based genomic data management, and privacy-preserving systems using cryptographic techniques including Zero-Knowledge Proofs. I work at the <a href='https://www.ibisc.univ-evry.fr/'>IBISC Laboratory</a> under Prof. Nazim Agoulmine, developing decentralized solutions for medical IoT devices and trustworthy data sharing ecosystems.",
  email: "lehuyentrang260802@gmail.com",
  phone: "+84 (0)3 79 44 81 20",
  workAddress: "IBGBI, Université Évry Paris-Saclay, 23, Boulevard de France, 91034 – Évry",
  imageUrl: "https://6a3295548e8852737b3a116d.imgix.net/ava.jpg?w=800&h=800",
  googleScholarUrl: "https://scholar.google.com/citations?user=MD2uJXYAAAAJ&hl=en&authuser=1",
  githubUsername: "hazel260802",
  linkedinUsername: "huyentrang-le",
  cvUrl: "https://drive.google.com/file/d/1Xo9n8sHqj2l3m5n6o7p8q9r0s1t2u3v/view?usp=sharing",
  blogUrl: "https://hazel-blog.vercel.app/", 
  twitterUsername: "hazel20802", // Optional
  institutionUrl: "https://www.univ-evry.fr/accueil.html",
  altName: "Hazel", // Optional: an alternative name or nickname
  funDescription: "I enjoy exploring the intersection of technology and healthcare, and I'm passionate about leveraging blockchain for secure data sharing. As a researcher, I thrive on solving complex problems and contributing to advancements in privacy-preserving technologies, with the insights from my personal blogs.",
  // secretDescription: "I like puppies, cats and sexy dance and singing. I also have a secret talent for cooking delicious meals and making people laugh with my terrible jokes. If you want to know more about me, just ask! 😉",
};
