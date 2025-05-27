# Next.js Timestamp Example with On-Demand Revalidation

This is a simple Next.js application that demonstrates static site generation (SSG) with Incremental Static Regeneration (ISR) and on-demand revalidation.

## Features

- Home page displays a timestamp when it was last rendered
- Automatic revalidation every 60 seconds (configurable)
- API route for on-demand revalidation

## Getting Started

First, install the dependencies:

```bash
npm install
```

Create a `.env.local` file in the root directory with the following content:

```
# This token is used to secure the revalidation API route
# In production, use a strong, randomly generated string
REVALIDATION_TOKEN=your-secret-token
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build and Start

To build the application:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Triggering Revalidation

You can trigger revalidation of the home page by making a request to the revalidation API endpoint:

```
http://localhost:3000/api/revalidate?secret=your-secret-token
```

Replace `your-secret-token` with the value you set in your `.env.local` file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [On-Demand Revalidation](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation) - learn about on-demand revalidation in Next.js.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
