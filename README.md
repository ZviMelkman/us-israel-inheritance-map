# US-Israel Inheritance content site

A small static site built with Eleventy (a tool that turns these source files
into plain HTML). You do not need to learn Eleventy. There are three things you
ever touch, all described below.

## 1. Make the email capture live (do this once)

Open `src/_data/site.json`. Find the `mailerlite` block and replace the three
`REPLACE_WITH_...` values with your real MailerLite values:

- `accountId`  your MailerLite account number
- `formId`     the embedded form id you want submissions to go to
- `groupId`    the subscriber group that triggers the PDF automation (optional)

That is the only place the form lives. Every page uses it.

Prefer your existing working form instead? Paste its markup into
`src/_includes/capture.njk`, replacing the `<form>` there. Same result, and
again it updates every page at once.

## 2. Put it online (simplest path, no git needed)

The `_site` folder is the finished website. To publish it:

1. Go to Cloudflare Pages, "Create a project", "Direct Upload".
2. Drag the contents of the `_site` folder in.
3. Add your custom domain `USIsraelInheritanceMap.com`.
4. For `USIsraelEstate.com`, add it as a second domain and set a Cloudflare
   Redirect Rule to 301 it to the primary. (Domain-level redirect, done in the
   Cloudflare dashboard, not in these files.)

When we add articles later, I rebuild and hand you a fresh `_site` to drag in.

Want automatic publishing on every change instead? Connect this project to a
git repository in Cloudflare Pages with build command `npx @11ty/eleventy` and
output directory `_site`. We can set that up when you want it.

## 3. Add an article (the production line)

Drop a new Markdown file into `src/reactive/` or `src/proactive/`. Copy
`src/reactive/bank-froze-account.md` as the template. Fill the front matter at
the top (`title`, `query`, `sub`, `order`, `description`, `sources`), write the
body, and it automatically appears on the home page and in the sitemap. No other
file needs editing.

To rebuild after any change: `npm run build` (output lands in `_site`).

## What is here now

- Home hub + email capture
- How this works (orientation-not-advice, how the introduction works)
- Reactive article #1 (frozen Israeli bank account), as the proven template
- Reference: US vs Israel comparison table, term dictionary, document checklist
- robots.txt and sitemap.xml

## Guardrails baked in

- Every page carries the orientation-not-advice footer.
- Articles carry a "checked on" date and a named primary source for each figure.
- The site uses USIsraelInheritanceMap.com only, never the old domain.
- Proactive articles (the 2026 oleh tax pieces) are intentionally not built yet,
  pending re-verification against the Israel Tax Authority and Knesset.
