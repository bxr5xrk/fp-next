'use client'; // Error components must be Client Components
 
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return redirect('/'); // Redirect to the home page
}