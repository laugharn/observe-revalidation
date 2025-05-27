import Head from "next/head";

// Define the type for our props
interface HomeProps {
  timestamp: string;
}

export default function Home({ timestamp }: HomeProps) {
  return (
    <>
      <Head>
        <title>Next.js Timestamp Example</title>
        <meta name="description" content="Page with timestamp from getStaticProps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Next.js Timestamp Example</h1>
        <p>This page was rendered at: {timestamp}</p>
      </div>
    </>
  );
}

// Use getStaticProps to generate the timestamp at build time
export async function getStaticProps() {
  const timestamp = new Date().toISOString();
  
  return {
    props: {
      timestamp,
    },
    // Enable ISR (Incremental Static Regeneration)
    // This will regenerate the page after the specified number of seconds
    revalidate: 60 * 60 * 24 * 365,
  };
}
