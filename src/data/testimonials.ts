export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  project: string;
}

const avatar = (name: string, bg: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=fff&size=80&bold=true`;

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rachel Thompson',
    title: 'Head of Product',
    company: 'Stripe',
    avatar: avatar('Rachel Thompson', '2563EB'),
    rating: 5,
    text: 'TalentHub completely transformed how we hire contractors. We found a brilliant React developer in 2 days who delivered an entire dashboard system in under 3 weeks. The quality was outstanding — easily the best hire we\'ve made through any platform.',
    project: 'SaaS Dashboard Development',
  },
  {
    id: 2,
    name: 'James O\'Sullivan',
    title: 'Co-Founder & CEO',
    company: 'NovaTech Startup',
    avatar: avatar('James Sullivan', '7C3AED'),
    rating: 5,
    text: 'As a startup, every dollar counts. TalentHub gave us access to enterprise-level talent at fair prices. Our brand designer created an identity that honestly looks better than companies spending 10x more. The secure payment system gave us complete peace of mind.',
    project: 'Complete Brand Identity',
  },
  {
    id: 3,
    name: 'Mei-Lin Chen',
    title: 'Marketing Director',
    company: 'Shopify Partner',
    avatar: avatar('Mei Lin Chen', '06B6D4'),
    rating: 5,
    text: 'The freelancers on TalentHub aren\'t just skilled — they\'re professionals. My content writer delivered 20 SEO articles that pushed us to page one on Google within 60 days. The built-in project management tools made collaboration seamless across time zones.',
    project: 'SEO Content Strategy',
  },
];
