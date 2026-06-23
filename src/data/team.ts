export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin: string;
  twitter: string;
}

const avatar = (name: string, bg: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=fff&size=120&bold=true`;

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Jordan Blake',
    role: 'CEO & Co-Founder',
    bio: 'Former VP of Engineering at Airbnb. 15 years building marketplace platforms. Passionate about democratizing access to global talent.',
    avatar: avatar('Jordan Blake', '2563EB'),
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 2,
    name: 'Sofia Reyes',
    role: 'CPO & Co-Founder',
    bio: 'Previously led product at Upwork and Fiverr. Expert in freelance economy dynamics and platform design for both sides of the marketplace.',
    avatar: avatar('Sofia Reyes', '7C3AED'),
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 3,
    name: 'Aiden Park',
    role: 'CTO',
    bio: 'MIT Computer Science graduate. Built scalable systems at Google and Stripe. Leads TalentHub\'s engineering team of 40+ engineers globally.',
    avatar: avatar('Aiden Park', '06B6D4'),
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 4,
    name: 'Nadia Hassan',
    role: 'VP of Design',
    bio: 'Award-winning product designer with experience at Apple and Figma. Champions accessibility and pixel-perfect design across every touchpoint.',
    avatar: avatar('Nadia Hassan', '10B981'),
    linkedin: '#',
    twitter: '#',
  },
];
