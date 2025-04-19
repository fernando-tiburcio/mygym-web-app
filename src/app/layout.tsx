import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gym Dashboard",
  description: "Gym Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="min-h-screen">
          {children}
        </div>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1F2937',
              color: '#fff',
              border: '1px solid #374151',
            },
            success: {
              style: {
                background: '#059669',
                color: '#fff',
              },
            },
            error: {
              style: {
                background: '#DC2626',
                color: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
