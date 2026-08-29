import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD
import { SiteLoader } from "@/components/SiteLoader";

export const metadata: Metadata = {
  title: "Tech Vision",
  description: "Project-based technology training, mentorship, and career-focused learning in Ethiopia.",
  icons: { icon: "/brand/techvision-mark.svg" },
=======

export const metadata: Metadata = {
  title: "TechVision",
  description: "Project-based technology training, mentorship, and career-focused learning in Ethiopia.",
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
<<<<<<< HEAD
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('techvision-theme')||'system';var d=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light';document.documentElement.dataset.themeMode=m;document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
        <SiteLoader />
        {children}
      </body>
=======
    <html lang="en" className="antialiased">
      <body>{children}</body>
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
    </html>
  );
}
