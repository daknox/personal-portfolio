import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Data Portfolio - Data Storyteller",
  description: "Transforming complex datasets into meaningful insights through visualization, analysis, and machine learning",
  keywords: ["Data Science", "Machine Learning", "Data Visualization", "Analytics", "Portfolio"],
  authors: [{ name: "Data Portfolio" }],
  openGraph: {
    title: "Data Portfolio - Data Storyteller",
    description: "Transforming complex datasets into meaningful insights through visualization, analysis, and machine learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
