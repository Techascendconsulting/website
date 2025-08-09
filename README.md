# Tech Ascend Consultancy Website

## Local Development
- Install: `npm ci`
- Develop: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Deployment (GitHub Pages)
This repo is configured to deploy to GitHub Pages via GitHub Actions.

- Base path is set to `/website/` in `vite.config.ts`
- Router `basename` uses `import.meta.env.BASE_URL`
- Workflow file: `.github/workflows/deploy.yml`

To deploy:
1. Ensure your default branch is `main`.
2. Push to `main` to trigger deployment.
3. In GitHub, go to Settings → Pages and set “Build and deployment” to “GitHub Actions”.

The site will be available at: `https://<your-org-or-user>.github.io/website/`
