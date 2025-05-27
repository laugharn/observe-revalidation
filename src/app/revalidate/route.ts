import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// This route handler will revalidate the home page using App Router's revalidatePath
export async function GET(request: NextRequest) {
  // Get the secret token from the request URL
  const secret = request.nextUrl.searchParams.get('secret');

  // Check if the secret is valid
  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json(
      { 
        message: 'Invalid token',
        revalidated: false
      },
      { status: 401 }
    );
  }

  try {
    // Revalidate the home page
    revalidatePath('/');
    
    // Return a success response
    return NextResponse.json(
      { 
        message: 'Home page revalidated successfully',
        revalidated: true
      },
      { status: 200 }
    );
  } catch (err) {
    // If there was an error, return an error response
    return NextResponse.json(
      { 
        message: 'Error revalidating',
        error: err instanceof Error ? err.message : String(err)
      },
      { status: 500 }
    );
  }
} 