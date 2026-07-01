import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MinGyu Jin | AI & Data Science Builder",
  description:
    "Portfolio for MinGyu Jin, a Computational and Data Sciences student at George Mason Korea building practical AI systems, data tools, and workflow automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
