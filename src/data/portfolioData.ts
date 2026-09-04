import { Project, SkillCategory, EducationItem, Certification, SocialLink } from '../types';

export const personalInfo = {
  name: "CS Portfolio",
  studentName: "DJIGBANI Moni Achille",
  title: "Étudiant en Informatique à l'IAI-Togo",
  subtitle: "Licence Administration des systems et reseaux",
  statusBadge: "Disponible pour de nouveaux défis",
  bioShort: "Passionné par l'univers du numérique, j'évolue à la croisée du développement web et mobile et de l'administration des systèmes et réseaux. Je conçois et déploie des solutions informatiques fiables, performantes et centrées sur l'utilisateur.",
  aboutLong: [
    "Ma passion pour l'informatique est née d'une curiosité essentielle : comprendre le fonctionnement des technologies sous le capot, du flux des données à travers les infrastructures jusqu'à l'expérience interactive sur écran. Aujourd'hui, j'approfondis mes compétences à la fois dans le développement d'applications web et mobiles et dans l'administration des systèmes et réseaux.",
    "Je suis convaincu qu'une solution numérique réussie repose sur la synergie entre des logiciels bien conçus et des infrastructures robustes. L'informatique ne se limite pas à écrire du code ou configurer des équipements, c'est un moyen de résoudre des problèmes réels et d'améliorer le quotidien des utilisateurs."
  ],
  stats: [
    { value: "2+", label: "Années de Code", highlightColor: "cyan" },
    { value: "3+", label: "Projets Finis", highlightColor: "violet" },
    { value: "2+", label: "Certifications", highlightColor: "cyan" },
    { value: "100%", label: "Passion", highlightColor: "violet" }
  ],
  location: "Lome, Togo",
  email: "achilledjigbani1@gmail.com",
  github: "github.com/achvard05-maker",
  linkedin: "https://www.linkedin.com/in/djigbani-moni-achille-039bb438b/"
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Langages",
    iconName: "code",
    colorTheme: "cyan",
    skills: [
      { name: "C", level: 90 },
      { name: "Python", level: 88 },
      { name: "Java", level: 82 },
      { name: "CSS", level: 75 },
      { name: "SQL", level: 85 },
      { name: "javaSript", level: 70 }
    ]
  },
  {
    title: "Reseaux et technologie Cisco",
    iconName: "layers",
    colorTheme: "violet",
    skills: [
      { name: "Connaissance de base du reseau", level: 92 },
      { name: "Subnetting", level: 85 },
      { name: "VLSM", level: 88 },
      { name: "packet tracer", level: 80 }
    ]
  },
  {
    title: "Outils & BDD",
    iconName: "construction",
    colorTheme: "cyan",
    skills: [
      { name: "MsSQL", level: 88 },
      { name: "Eclipse", level: 80 },
      { name: "VS code", level: 75 },
    ]
  },
  {
    title: "DevOps & Cloud",
    iconName: "terminal",
    colorTheme: "violet",
    skills: [
      { name: "Git", level: 92 },
      { name: "Linux / Bash", level: 88 },
    ]
  }
];

export const educationTimeline: EducationItem[] = [
  {
    period: "2025 - Présent",
    degree: "Licence Professionnel Informatique/ cycle Ingenieur des Traveaux Informatiques",
    institution: "Institut Aficain d'Informatique, IAI-TOGO",
    description: "Tronc commun  Administration des systeme et reseau/ Genie Logiciel et Systeme d'information ",
    details: ["Projets majeurs en html & python", "Conception d'une site de gestion de presence","Participation au projet SantePocket","Conception d'une applicationde d'arrientation: GDG-Lome,Build with Ai 2026"],
    highlight: true
  },
  {
    period: "2024",
    degree: "Baccalauréat Scientifique",
    institution: "College et Lycee Notre Dame de la Trinite",
    description: "Mention Assez Bien. Serie D (option Mathematiques, physique, SVT).",
    highlight: false
  }
];

export const projects: Project[] = [
  {
    id: "presentia",
    title: "Presentia",
    description: "Plateforme de gestion en temps réel des présences des étudiants permettant de dématérialiser et remplacer les listes d'émargement papier.",
    participation: "Conception de l'architecture logicielle, développement de la logique de pointage et gestion du traitement des présences.",
    shortDescription: "Une plateforme de gestion en temps réel des présences.",
    fullDescription: "Presentia est une application web performante permettant de surveiller en temps réel la présence des étudiants. L'application gère des flux de données et permet de se passer des versions papier des listes de présence.",
    category: "Full-Stack",
    tags: ["HTML", "Python", "CSS"],
    githubUrl: "https://github.com/achvard05-maker/Projet_liste_de_presence",
    featured: true
  },
  {
    id: "sante-pocket",
    title: "Sante pocket",
    description: "Application mobile permettant de centraliser tout l'historique médical en un seul endroit sécurisé, facilitant les changements de médecin ou d'hôpital sans risque de perte de données.",
    participation: "Conception du modèle de données médicales, structuration du dossier patient et développement des interfaces de consultation.",
    shortDescription: "Et si vous aviez tout votre historique médical en un endroit ? Avec Santé Pocket c'est possible !",
    fullDescription: "Santé Pocket est une application mobile qui vous permet d'avoir tout votre historique médical en un seul endroit. Ainsi vous pouvez changer de médecin voire même d'hôpital sans craindre la perte de vos données.",
    category: "Mobile & Sécurité",
    tags: ["Node.js", "SQLite", "Crypto", "TypeScript", "WebRTC"],
    githubUrl: "https://github.com/achvard05-maker/TCCHackDefend2026_Tec.Brain_SantePocket",
    featured: true
  }
];

export const certifications: Certification[] = [
 
  {
    title: "Introduction to Cybersecurity",
    issuer: "CISCO CCNA",
    level: "Student level",
    year: "2026",
    badgeIcon: "verified",
    credentialId: ""
  },
  {
    title: "CCNA:  Introduction to Networks",
    issuer: "CISCO CCNA",
    level: "Student level",
    year: "2026",
    badgeIcon: "verified",
    credentialId: ""
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/achvard05-maker",
    icon: "terminal",
    username: "@achvard05-maker"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/djigbani-moni-achille-039bb438b/",
    icon: "alternate_email",
    username: "Achille Djigbani"
  },
  {
    name: "Email",
    url: "achilledjigbani1@gmail.com",
    icon: "mail",
    username: "achilledjigbani1@gmail.com"
  }
];
