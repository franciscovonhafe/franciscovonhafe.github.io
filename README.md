# Francisco von Hafe — personal academic website

Live site: https://franciscovonhafe.github.io

Built with [Astro](https://astro.build) as a static site. The published files are in `docs/`,
which GitHub Pages serves directly (Settings → Pages → Deploy from branch `main`, folder `/docs`).

## Where to edit content

| What | File |
|---|---|
| Publications (add, edit, remove) | `src/data/publications.ts` |
| Name, roles, biography, interests, affiliations, profile links | `src/data/site.ts` |
| Research topics and filter labels | `src/data/topics.ts` |
| CV (replace the PDF, keep the file name) | `public/cv/Francisco-von-Hafe-CV.pdf` |
| Photograph | `public/images/` |
| Colours and typography | `src/styles/global.css` |

## Rebuild

```
npm install
npm run build      # writes the site to docs/
```

Then upload the changed files (including the new `docs/` folder) to the repository.

## Custom domain (optional)

Change `site` in `astro.config.mjs` and the Sitemap line in `public/robots.txt`,
add a `public/CNAME` file containing the domain, rebuild, and set the domain in
GitHub → Settings → Pages.
