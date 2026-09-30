// Titres, organismes et dates repris du prototype fourni.
export interface Certification {
  year: number;
  title: string;
  issuer: string;
  category: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  { year: 2025, title: 'Certified Google Digital Marketing & E-commerce Professional', issuer: 'Google Career Certification', category: 'Marketing digital' },
  { year: 2025, title: 'Foundations of Digital Marketing & E-commerce', issuer: 'Google Career Certification', category: 'Marketing digital' },
  { year: 2025, title: 'Attract and Engage Customers with Digital Marketing', issuer: 'Google Career Certification', category: 'Marketing digital' },
  { year: 2025, title: 'From Likes to Leads : Interact with Customers Online', issuer: 'Google Career Certification', category: 'Marketing digital' },
  { year: 2025, title: 'Think Outside the Inbox : E-mail Marketing', issuer: 'Google Career Certification', category: 'Marketing digital' },
  { year: 2025, title: 'Connaissances théoriques avancées en référencement naturel (SEO)', issuer: 'Référencime', category: 'SEO' },
  { year: 2025, title: 'Meta Ads Manager Beginners : GenAI Feature Integration', issuer: 'Coursera', category: 'Publicité en ligne' },
  { year: 2025, title: 'Créer une campagne de recherche Google Ads', issuer: 'Coursera', category: 'Publicité en ligne' },
  { year: 2025, title: 'Création de Designs Marketing avec Canva', issuer: 'Coursera', category: 'Design & UX' },
  { year: 2023, title: 'Les fondements du référencement', issuer: 'LinkedIn Learning', category: 'SEO' },
  { year: 2023, title: 'Les fondements du SEO local', issuer: 'LinkedIn Learning', category: 'SEO' },
  { year: 2023, title: 'Les fondements du SEO international', issuer: 'LinkedIn Learning', category: 'SEO' },
  { year: 2023, title: 'Le référencement : la création de liens', issuer: 'LinkedIn Learning', category: 'SEO' },
  { year: 2022, title: 'Role of Content Exam', issuer: 'Semrush', category: 'SEO' },
  { year: 2022, title: 'Keyword Research Exam', issuer: 'Semrush', category: 'SEO' },
  { year: 2022, title: 'Content Marketing & SEO Fundamentals Exam', issuer: 'Semrush', category: 'SEO' },
  { year: 2022, title: 'Competitive Analysis & Keyword Research Test', issuer: 'Semrush', category: 'SEO' },
  { year: 2022, title: 'Advanced Competitive Research', issuer: 'Semrush', category: 'SEO' },
  { year: 2022, title: 'Content Marketing Fundamentals', issuer: 'Semrush', category: 'Content marketing' },
  { year: 2022, title: 'Content Marketing', issuer: 'YouLoveWords', category: 'Content marketing' },
  { year: 2022, title: 'Développez votre activité avec le Marketing de Contenu', issuer: 'OpenClassrooms', category: 'Content marketing' },
  { year: 2022, title: 'Comprenez votre audience avec Google Analytics', issuer: 'OpenClassrooms', category: 'Analytics' },
  { year: 2022, title: 'Analysez les données marketing', issuer: 'OpenClassrooms', category: 'Analytics' },
  { year: 2022, title: 'UX, découvrez les fondamentaux', issuer: 'OpenClassrooms', category: 'Design & UX' },
  { year: 2022, title: 'Appropriez-vous la démarche UX en pratique', issuer: 'OpenClassrooms', category: 'Design & UX' },
  { year: 2022, title: 'Initiez-vous au Design Thinking', issuer: 'OpenClassrooms', category: 'Design & UX' },
  { year: 2022, title: 'Développez votre Personal Branding', issuer: 'OpenClassrooms', category: 'Marketing digital' },
  { year: 2022, title: 'Développez votre Leadership pour mieux diriger', issuer: 'OpenClassrooms', category: 'Leadership' },
  { year: 2021, title: 'Augmentez votre trafic grâce au référencement naturel', issuer: 'OpenClassrooms', category: 'SEO' },
];
