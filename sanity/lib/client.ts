// sanityClient.js
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-13',
  useCdn: true, // Enables the use of Sanity’s CDN for faster responses
  // Do not include the token here
});
