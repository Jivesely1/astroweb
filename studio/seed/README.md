# Seed Data

Tato složka obsahuje seed skripty pro naplnění Sanity CMS daty.

## 📦 Dostupné skripty

### `seed-projects.ts`
Nahraje ukázkové projekty do portfolia.

**Obsahuje:**
- 5 projektů různých kategorií (ecommerce, webapp, website, mobile)
- 3 featured projekty (zobrazí se na hlavní stránce)
- Ukázkové technologie a popisy

**Spuštění:**
```bash
npm run seed
```

### `seed-posts.ts`
Nahraje ukázkové blog příspěvky.

**Obsahuje:**
- 3 technické články o webovém vývoji
- Real-world příklady a statistiky
- Strukturovaný obsah s nadpisy a odstavci

**Spuštění:**
```bash
npm run seed-posts
```

## 🔧 Použití

1. Ujistěte se, že máte správně nastavený `.env` soubor s `SANITY_WRITE_TOKEN`
2. Spusťte příslušný seed skript
3. Data se nahrají do Sanity CMS
4. Zkontrolujte web na `http://localhost:4321`

## ⚠️ Poznámky

- Seed skripty **přidávají** nová data (nemazou stará)
- Seed pro blog posty **maže** staré posty před nahráním nových
- Při chybě zkontrolujte oprávnění API tokenu v Sanity dashboardu
