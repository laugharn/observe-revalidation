import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js Timestamp Example',
  description: 'Example with Pages and App Router',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 