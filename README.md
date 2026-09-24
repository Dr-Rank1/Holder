# Developer Portfolio and App Showcase

A modern, responsive personal portfolio built with Next.js and Tailwind CSS. It serves as a central hub for showcasing mobile applications, providing details about their features, and hosting their privacy policies for Google Play Store compliance.

## Features

- **App Showcase:** Display multiple applications with details such as name, tagline, description, features, and direct links to the Google Play Store.
- **Privacy Policies:** Dedicated routes for hosting app-specific privacy policies.
- **Responsive Design:** Fully responsive layout built with Tailwind CSS, ensuring a great experience on desktop and mobile devices.
- **Modern Tech Stack:** Built using Next.js 15, React 19, TypeScript, and Lucide React icons.

## Project Structure

- `src/app/page.tsx`: The main landing page displaying the developer profile and a grid of showcased apps.
- `src/components/AppCard.tsx`: A reusable component for displaying individual app details.
- `src/data/apps.ts`: Centralized data structure containing the details of all apps featured on the site.
- `src/app/privacy/`: Contains privacy policy pages for individual apps.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Customization

To add a new app to the showcase:
1. Open `src/data/apps.ts`.
2. Add a new object to the `apps` array with the required fields (slug, name, tagline, description, features, playStoreUrl, playStorePackage, and icon).
3. If the app requires a privacy policy, create a new folder under `src/app/privacy/[slug]` and add a `page.tsx` file.

## License

All rights reserved by the developer.
