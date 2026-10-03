# Kitbag Labs Website — Implementation Plan

## Approved scope
Create a responsive marketing website for Kitbag Labs, a venture studio that turns everyday friction into high-utility software for businesses and consumers. Explain the studio's mission and agile product-incubator model, showcase bouttabuy.com, docinject.com, and aitoolpouch.com with the provided descriptions and outbound links, and give visitors clear routes to explore the products or connect. Use the supplied logo and implement in TypeScript, React, and Tailwind with reusable accessible components.

## Implementation approach
- Build a client-rendered single-page site with Vite, React, and TypeScript; use Tailwind CSS for responsive layout, color tokens, spacing, and state styling.
- Keep the marketing content declarative in a typed product-data module. Reuse small navigation, section-label, product-card, and footer components rather than monolithic page markup.
- Copy the user-supplied SVG into `public/` and reference it locally in the site. Use its durable uploaded HTTPS URL as the project platform `logoUrl` literal in `app.config.ts`.
- Serve the single page at `/` and publish a static route manifest at `public/manus-routes.json` before starting the dev server.
- This informational site needs no server, database, account, or persistent data. Preview runs on the initialized project runtime port; a production static build emits `dist/`.

## Project structure
- `public/`: supplied SVG logo and static route manifest.
- `src/components/`: reusable site header, product showcase cards, visual motifs, and footer.
- `src/data/`: typed product portfolio copy and external destinations.
- `src/App.tsx`: semantic page composition and responsive navigation interactions.
- `src/index.css`: Tailwind import and brand-wide base styles, focus states, and motion preferences.
- `src/main.tsx`: React entry point.
- `index.html`: document title, description, and favicon references.
- `app.config.ts`: platform logo metadata.

## Design direction
- **Design Movement:** Contemporary editorial industrial design, softened by a warm paper-like canvas and precise software-interface details.
- **Core Principles:** Utility before spectacle; crisp information hierarchy; confident but human language; accessible, motion-aware interaction.
- **Color Philosophy:** Deep ink navy anchors trust and echoes the supplied mark; warm off-white gives long-form copy breathing room; a vivid teal accent signals useful action and product energy; subdued slate supports secondary detail.
- **Layout Paradigm:** An asymmetrical, left-anchored editorial hero with a compact studio index and a staggered product sequence, avoiding a generic centered marketing grid. At smaller breakpoints, collapse into a clear vertical reading path.
- **Signature Elements:** Fine orbital/route lines inspired by the logo's connected utility mark; compact uppercase section indices; small teal status dots and notebook-like product labels.
- **Interaction Philosophy:** Navigation and product links are obvious, keyboard reachable, and responsive. Hover/focus states underline or shift subtly; no interaction is needed to understand essential copy.
- **Animation:** Restrained short fades or small positional transitions on hover; no decorative autoplay. Respect `prefers-reduced-motion` and keep content visible without animation.
- **Typography System:** Use a confident geometric sans for display and interface text paired with a quiet readable sans for body copy (Space Grotesk + DM Sans through CSS/import or resilient system fallbacks). Oversized headings use tight tracking; body copy remains comfortably sized with generous line height; metadata is small and uppercase.
- **Brand Essence:** A nimble venture studio for people who need everyday work to feel simpler—**practical, curious, precise**.
- **Brand Voice:** Direct, optimistic, utility-minded; describe the friction and the relief without hype. Example lines: “Small frictions. Better tools.” and “Complex problems, packed down to everyday utilities.”
- **Wordmark & Logo:** Preserve the provided Kitbag Labs vector mark as the primary signature, paired with a custom-spaced text wordmark and a small “venture studio” descriptor rather than substituting a default-font heading for the logo.
- **Signature Brand Color:** Kitbag teal, sampled from the supplied mark's distinctive accent, used sparingly for links, indicators, and primary calls to action.

## Content structure
- Header with logo/wordmark and in-page links to Studio, Products, and Contact.
- Hero introducing Kitbag Labs as a modern venture studio building practical software; primary action jumps to products, with a secondary action to the studio overview.
- Studio overview describing everyday friction, focused software, workflow efficiency, AI, and time savings for professionals and consumers.
- Portfolio entries for bouttabuy.com (“What Should I Buy? Check the app. ;-)”), docinject.com (document automation and data injection), and aitoolpouch.com (curated AI tools hub), each with concise copy and a direct external link. Also show maphoist as an upcoming service for local visibility and customer acquisition management through Google Business Profile (GBP), without inventing an unprovided product URL.
- Closing value proposition and contact-oriented footer. The contact CTA currently uses `hello@kitbaglabs.com` as an editable placeholder because no public contact address was supplied.
