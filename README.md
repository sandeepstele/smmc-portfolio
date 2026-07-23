# Sandeep Satheesh — SMMC Portfolio

A focused, single-page portfolio connecting Sandeep’s experience in teaching,
data analysis, course operations, budgeting, and student leadership to work in
student financial education.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm test
npm run test:e2e
npm run build
```

The Vite base path is `/smmc-portfolio/` so the production build works at:

`https://sandeepstele.github.io/smmc-portfolio/`

Deployment runs through the workflow in `.github/workflows/deploy.yml` after a
push to `main`.
