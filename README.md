# KwikMart Web Showcase

## Project Overview

This repository contains the source for the KwikMart marketing site. It showcases the brand story, featured products, and customer experience offered by KwikMart. The application is built with Vite, React, TypeScript, Tailwind CSS, and shadcn-ui.

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (comes bundled with Node.js)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd kwirkmart-web-showcase

# Install dependencies
npm install
```

### Development Server

```sh
npm run dev
```

The development server starts on [http://localhost:5173](http://localhost:5173) by default. Any changes to the source files will trigger instant hot reloading in the browser.

### Production Build

```sh
npm run build
```

The optimized production-ready build will be output to the `dist` directory.

### Preview Production Build

```sh
npm run preview
```

This command serves the files from the `dist` directory locally so you can validate the production bundle before deploying.

## Project Structure

- `src/` — React application source code
- `public/` — Static assets copied as-is to the final build
- `index.html` — Entry HTML file used by Vite during bundling

## Deployment

You can deploy the production build to any static hosting provider (such as Netlify, Vercel, or GitHub Pages). Upload the contents of the `dist` directory after running `npm run build`.

## Contributing

1. Create a feature branch for your changes.
2. Commit updates with clear, descriptive messages.
3. Open a pull request for review before merging to the main branch.

## Support

For questions or support related to this project, reach out to the KwikMart engineering team.
