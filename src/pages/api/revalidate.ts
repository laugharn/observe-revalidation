import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  revalidated?: boolean;
  error?: string;
};

// This API route will revalidate the home page
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ 
      message: 'Invalid token',
      revalidated: false
    });
  }

  try {
    // This should be the actual path of your page
    await res.revalidate('/');
    return res.status(200).json({ 
      message: 'Home page revalidated successfully',
      revalidated: true
    });
  } catch (err) {
    // If there was an error, Next.js will continue to show the last successfully generated page
    return res.status(500).json({ 
      message: 'Error revalidating',
      error: err instanceof Error ? err.message : String(err)
    });
  }
} 