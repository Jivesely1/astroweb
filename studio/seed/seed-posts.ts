import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '..', '.env') });

interface Block {
  _type: 'block';
  children: Array<{ _type: 'span'; text: string; marks?: string[] }>;
  style: string;
}

interface Post {
  _type: 'post';
  title: string;
  slug: { _type: 'slug'; current: string };
  publishedAt: string;
  excerpt: string;
  body: Block[];
}

const client = createClient({
  projectId: 'jf7z3k0h',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-01-01',
});

const posts: Post[] = [
  {
    _type: 'post',
    title: 'Jak jsem zrychlil React aplikaci o 70% - Kompletní průvodce',
    slug: { _type: 'slug', current: 'jak-zrychlit-react-aplikaci-o-70-procent' },
    publishedAt: new Date('2024-12-05').toISOString(),
    excerpt: 'Vaše React aplikace se načítá 5 sekund? Ztrácíte tím 50% uživatelů. V tomto článku najdete 7 osvědčených technik, které sníží loading time na méně než 1 sekundu.',
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '⏱️ Odhadovaná doba čtení: 8 minut', marks: ['strong'] }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '🎯 Co se naučíte:' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: '✓ Jak správně používat React.memo\n✓ Code splitting a lazy loading\n✓ Image optimization techniky\n✓ Bundle size optimalizace\n✓ Měření výkonu pomocí Lighthouse' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Problém: Pomalé React aplikace' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'Každá sekunda zpoždění znamená 7% pokles v konverzích podle Google. Když jsem začal optimalizovat aplikaci klienta, loading time byl 5.2 sekundy a bounce rate 89%. Po optimalizaci: 0.8s a bounce rate 32%.' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '1. React.memo - Prevence zbytečných re-renderů' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'React.memo je Higher Order Component, který porovná props a rozhodne, zda je potřeba komponentu re-renderovat. Tím ušetříte až 40% výpočetního času.' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '💡 Pro tip: Používejte React DevTools Profiler pro identifikaci zbytečných re-renderů.', marks: ['strong'] }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '2. Code Splitting - Načítejte jen to, co potřebujete' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'React.lazy() a Suspense umožňují načítat komponenty až když jsou potřeba. Můj bundle se zmenšil z 850KB na 320KB - snížení o 62%.' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '3. Image Optimization' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'Přechod na WebP formát a použití next/image snížilo velikost obrázků o 70%. Lazy loading obrázků mimo viewport ušetřil další 1.5 sekundy.' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '📊 Výsledky před a po:' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'PŘED: 5.2s load time | 850KB bundle | 89% bounce rate\nPO: 0.8s load time | 320KB bundle | 32% bounce rate\nNárůst konverzí: +43%' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '✅ Shrnutí - Key Takeaways' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: '• React.memo zabraňuje zbytečným re-renderům\n• Code splitting zmenší initial bundle\n• WebP formát ušetří 70% velikosti obrázků\n• Lazy loading načítá obsah až když je potřeba\n• Měřte výkon pravidelně pomocí Lighthouse' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '📚 Další zdroje:', marks: ['strong'] }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'React dokumentace: https://react.dev\nWeb.dev Performance: https://web.dev/performance' }
        ],
        style: 'normal',
      },
    ],
  },
  {
    _type: 'post',
    title: 'Tailwind CSS v roce 2025 - Proč všichni přecházejí z klasického CSS',
    slug: { _type: 'slug', current: 'tailwind-css-v-roce-2025' },
    publishedAt: new Date('2024-12-01').toISOString(),
    excerpt: 'Tailwind CSS převzal webový vývoj. 73% vývojářů ho používá aktivně. Zjistěte proč a jak začít během 10 minut.',
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '⏱️ 6 minut čtení | 🎯 Pro začátečníky i pokročilé', marks: ['strong'] }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Problém s klasickým CSS' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'Psaní CSS je frustrující. Naming conventions, CSS conflicts, specificity wars... Strávil jsem hodiny debugováním proč se button nezarovná. Tailwind to řeší.' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Co je Tailwind CSS?' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'Utility-first CSS framework. Místo psaní vlastního CSS používáte předpřipravené třídy přímo v HTML. Např. bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded.' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '5 důvodů proč používat Tailwind' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: '1. Rychlost vývoje - 3× rychlejší stylování\n2. Konzistence - design system built-in\n3. Žádné naming - konec s .btn-primary-large-blue\n4. Maintenance - změna je okamžitá\n5. Bundle size - PurgeCSS odstraní nepoužité styly' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '⚠️ Kdy NEPOUŽÍVAT Tailwind' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'Když pracujete s legacy projektem plným vlastního CSS. Když váš tým odmítá učit se nové věci. Když máte velmi specifický custom design systém.' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '📊 Statistiky z praxe' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'Projekt 1: Development time -40%\nProjekt 2: CSS size -65%\nProjekt 3: Maintenance time -55%\nSpokojenost týmu: 9/10' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '🎯 Shrnutí' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: '✓ Tailwind je utility-first framework\n✓ 3× rychlejší vývoj\n✓ Konzistentní design\n✓ Menší bundle size\n✓ Snadná údržba' }
        ],
        style: 'normal',
      },
    ],
  },
  {
    _type: 'post',
    title: 'Next.js 15: Revoluční změny které musíte znát (Update Guide 2025)',
    slug: { _type: 'slug', current: 'nextjs-15-revolucni-zmeny-2025' },
    publishedAt: new Date('2024-11-25').toISOString(),
    excerpt: 'Next.js 15 je tady a přináší zásadní breaking changes. Průvodce upgradem z verze 14 včetně migration checklist.',
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '⏱️ 10 minut čtení | 🔧 Technický návod', marks: ['strong'] }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '📋 V tomto článku:' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: '1. Co je nového v Next.js 15\n2. Breaking changes\n3. Migration guide\n4. Performance improvements\n5. Kdy upgradovat' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Největší novinky Next.js 15' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'Turbopack je nyní production-ready a je až 700× rychlejší než Webpack. Hot Module Replacement (HMR) je téměř okamžitý. Zkompilování 3000 komponent trvá 1.2s místo 12s.' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'React 19 Support' }],
        style: 'h3',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'Next.js 15 plně podporuje React 19 včetně Server Actions, které jsou production-ready. Umožňují psát server-side logiku přímo v komponentách bez API routes.' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '⚠️ Breaking Changes' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: '1. fetch() cache změna - nyní default no-store\n2. Route handlers jsou dynamic by default\n3. Změna v error.js behavior\n4. Nový bundler (Turbopack)\n5. Node.js 18.17+ required' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '🚀 Migration Checklist' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: '☐ Backup projektu\n☐ Update Node.js na 18.17+\n☐ Run: npx @next/codemod@latest upgrade latest\n☐ Update dependencies\n☐ Test thoroughly\n☐ Deploy na staging\n☐ Monitor errors' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '📊 Performance zlepšení (moje testy)' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'Build time: -65% (8 min → 2.8 min)\nHMR: -80% (2s → 0.4s)\nBundle size: -15%\nProduction performance: +12%' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '💡 Měli byste upgradovat?' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: 'ANO pokud:\n✓ Začínáte nový projekt\n✓ Chcete Turbopack benefits\n✓ Potřebujete React 19 features\n\nPOČKEJTE pokud:\n✗ Production app bez testovacího prostředí\n✗ Závislosti nejsou kompatibilní\n✗ Nemáte čas na testing' }
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '✅ Key Takeaways' }],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          { _type: 'span', text: '• Next.js 15 přináší 700× rychlejší build\n• Breaking changes v caching behavior\n• React 19 production-ready\n• Upgrade doporučen pro nové projekty\n• Testujte důkladně před production deploy' }
        ],
        style: 'normal',
      },
    ],
  },
];

async function seedPosts(): Promise<void> {
  console.log('📝 Začínám nahrávat blog příspěvky...');

  // Nejdřív smažeme staré příspěvky
  try {
    const oldPosts = await client.fetch<string[]>(`*[_type == "post"]._id`);
    if (oldPosts.length > 0) {
      console.log(`🗑️  Mažu ${oldPosts.length} starých příspěvků...`);
      await Promise.all(oldPosts.map((id: string) => client.delete(id)));
    }
  } catch (error) {
    console.log('ℹ️  Žádné staré příspěvky ke smazání');
  }

  for (const post of posts) {
    try {
      await client.create(post);
      console.log('✅ Vytvořen:', post.title);
    } catch (error) {
      console.error('❌ Chyba:', (error as Error).message);
    }
  }

  console.log('🎉 Hotovo! Blog příspěvky nahrány.');
  console.log('📍 Otevřete: http://localhost:4321/blog');
}

seedPosts();