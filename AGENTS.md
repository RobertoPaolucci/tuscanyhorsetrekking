<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Tuscany Horse Trekking project instructions

## Project context

- Project: Tuscany Horse Trekking.
- Local path: `C:\progetti\tuscanyhorsetrekking`.
- This project is completely separate from TodoManager.
- Stack: Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4.
- Deployment target: Vercel.
- The site is primarily intended for international tourists.
- Initial primary language: English.
- Primary domain: `tuscanyhorsetrekking.it`.
- `tuscanyhorsetrekking.com` will be used as a secondary domain or redirect.
- The site promotes and sells rural and equestrian experiences at Agriturismo Cognanello: Horseback Riding, Farm Animal Experience, Pony Experience for Kids, and Traditional Ox Cart Ride.
- Horseback Riding is the primary activity and must remain the main focus of the homepage.
- Bookings will be managed through Bókun.
- Payments may be managed through the TodoInTheWorld Limited / Stripe commercial system.
- Do not introduce Supabase, Make, or other services until they are genuinely necessary.

## Development rules

1. Before modifying a file, read it and understand the existing structure.
2. Avoid unrequested refactoring.
3. Make small, targeted, and easily verifiable changes.
4. Do not modify files outside `C:\progetti\tuscanyhorsetrekking`.
5. Do not create links to or dependencies on the TodoManager project.
6. Use TypeScript strict mode and do not use `any` unless the need is documented.
7. Reuse components when appropriate, without creating premature abstractions.
8. Avoid additional npm dependencies when the functionality can be implemented with Next.js, React, CSS, or native browser APIs.
9. Keep the site mobile-first and responsive.
10. Prioritize performance, accessibility, and SEO.
11. Use semantic HTML and appropriate `alt` attributes for images.
12. Do not invent copy, prices, availability, or commercial terms.
13. Do not automatically add stock or external images without authorization.
14. Approved project images are stored in `public/images`; do not add other images without authorization.
15. Keep the design elegant, clean, and oriented toward premium tourism in Tuscany; avoid generic or excessively artificial templates.
16. Prepare booking buttons for Bókun integration, but do not invent URLs or product IDs.
17. Do not implement databases, authentication, Supabase, or Make without an explicit request.
18. Do not change Vercel, DNS, Stripe, or Bókun configuration without an explicit request.
19. Before considering a significant change complete, run at least:
    - TypeScript checking.
    - ESLint on the modified files.
    - `npm run build`.
20. If a command fails, clearly describe the error without attempting unrequested invasive changes.
21. Before every important change, briefly explain what will be modified.
22. At completion, summarize the modified files and the checks performed.

## Git rules

- Do not commit or push without an explicit request.
- Before a commit, always show the modified files.
- Use short, descriptive commit messages.
- Do not modify Git history.
