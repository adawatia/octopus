# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## GitHub Pages Deployment

This site is configured for automatic deployment to GitHub Pages using the `gh-pages` branch.

### Initial Setup (One-time)

1. Go to your GitHub repository: https://github.com/adawatia/octopus
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **gh-pages** and **/ (root)**, then click **Save**
5. The site will automatically deploy on every push to the `main` branch

### How It Works

- **Source Code**: Your source code stays in the `main` branch (clean and organized)
- **Built Files**: The GitHub Actions workflow builds your site and pushes the static files to the `gh-pages` branch
- **Deployment**: GitHub Pages serves the site from the `gh-pages` branch

### Deployment

The site automatically deploys when you push to the `main` branch. The GitHub Actions workflow will:
- Build the static site using `npm run generate`
- Push the built files to the `gh-pages` branch
- GitHub Pages automatically deploys from `gh-pages`

Your site will be available at: **https://adawatia.github.io/octopus/**

### Manual Deployment

You can also trigger a manual deployment:
1. Go to **Actions** tab in your GitHub repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


