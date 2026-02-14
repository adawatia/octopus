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

This site is configured for automatic deployment to GitHub Pages. 

### Initial Setup (One-time)

1. Go to your GitHub repository: https://github.com/adawatia/octopus
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The site will automatically deploy on every push to the `main` branch

### Deployment

The site automatically deploys when you push to the `main` branch. The GitHub Actions workflow will:
- Build the static site using `npm run generate`
- Deploy to GitHub Pages

Your site will be available at: **https://adawatia.github.io/octopus/**

### Manual Deployment

You can also trigger a manual deployment:
1. Go to **Actions** tab in your GitHub repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

