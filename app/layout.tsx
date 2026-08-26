import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechVision",
  description: "Project-based technology training, mentorship, and career-focused learning in Ethiopia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
