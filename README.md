# Personal Academic Research Portfolio 

My research portfolio is deployed and managed in this webpage in order to explain academic pursuit and further scientific contribution (workshops, hackathons, articles). Our template is mainly based on a React + Next.js template meant for research websites, with a [demo of the template here](https://tovacinni.github.io/research-website-template/). My own [personal website](https://tovacinni.github.io) is also built in the focus of blockchain full researcher target with the future teaching work after the PhD pursuit.

> [!NOTE]
> Our customizeable websites are implemented through 5 main sections (general information, research contribution, scientific engagement, teaching materials, contact), all my work contained in the `src/data` folder with the teaching will be updated after my PhD research. For example, `src/data/publication.ts` contains an array like:

```typescript
export const publicationData: Publication[] = [
  {
    year: "2023",
    conference: "International Conference on Machine Learning (ICML)",
    title: "Robust Causal Discovery Under Distribution Shift",
    authors: "Jane Smith, Xue Chen, Sarah Johnson",
    paperUrl: "https://arxiv.org/abs/2302.13095",
    codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
];
```

## Prerequisites

First, install Node.js and npm through the [Node.js official website](https://nodejs.org/).

Verify installation by running:

```bash
node --version
npm --version
```

## Installation

1. Fork the repository

2. Clone the repository

   ```bash
   git clone [your-repository-url]
   cd [repository-name]
   ```

3. Install dependencies

   Inside the repository, run:

   ```bash
   pnpm install
   ```

## Running the Application

1. To start the development server, run (in the repository directory):

   ```bash
   pnpm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying onto GitHub Pages

1. Fork or clone this repo and push to your own repository at `[your-github-username].github.io`.

2. In your repository settings, ensure the repository name matches `[your-github-username].github.io` if you want it to be your main GitHub Pages site.

3. Push your changes to the main branch.

4. Go to the GitHub page for your repository and go to `Settings` then `Pages`. If you set Source to be `GitHub Actions`, it should suggest you a build script for Next.js.

5. Commit the build script and see things building.

Your site should now be live at `https://[your-github-username].github.io/`.

