import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '..', '.env') });

const client = createClient({
  projectId: 'jf7z3k0h',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-01-01',
});

interface Project {
  _type: 'project';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  category: string;
  description: string;
  technologies: string[];
  url: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    _type: 'project',
    title: 'Luxusní e-shop s módou',
    slug: { _type: 'slug', current: 'luxusni-e-shop-s-modou' },
    category: 'ecommerce',
    description: 'Moderní e-shop s integrací Stripe a správou produktů.',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'Sanity CMS'],
    url: 'https://example-eshop.com',
    featured: true,
  },
  {
    _type: 'project',
    title: 'Dashboard pro marketing',
    slug: { _type: 'slug', current: 'dashboard-pro-marketing' },
    category: 'webapp',
    description: 'Analytický dashboard s real-time daty a AI insights.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Chart.js'],
    url: 'https://example-dashboard.com',
    featured: true,
  },
  {
    _type: 'project',
    title: 'Portfolio fotografa',
    slug: { _type: 'slug', current: 'portfolio-fotografa' },
    category: 'website',
    description: 'Responzivní portfolio s galeriemi a lightbox efekty.',
    technologies: ['Astro', 'Sanity', 'Tailwind CSS'],
    url: 'https://example-portfolio.com',
    featured: true,
  },
  {
    _type: 'project',
    title: 'Rezervační systém',
    slug: { _type: 'slug', current: 'rezervacni-system' },
    category: 'webapp',
    description: 'Booking systém s kalendářem a online platbami.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    url: 'https://example-booking.com',
    featured: false,
  },
  {
    _type: 'project',
    title: 'Fitness aplikace',
    slug: { _type: 'slug', current: 'fitness-app' },
    category: 'mobile',
    description: 'Mobilní aplikace pro sledování tréninků.',
    technologies: ['React Native', 'Firebase'],
    url: 'https://example-fitness.app',
    featured: false,
  },
];

async function seedProjects(): Promise<void> {
  console.log('🌱 Začínám nahrávat projekty...');

  for (const project of projects) {
    try {
      await client.create(project);
      console.log('✅ Vytvořen:', project.title);
    } catch (error) {
      console.error('❌ Chyba:', (error as Error).message);
    }
  }

  console.log('🎉 Hotovo!');
}

seedProjects();
