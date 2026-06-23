import { Cairo, Tajawal, Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Mohammed Younes — Full-Stack Developer",
  description:
    "Full-stack developer from Benghazi, Libya. Building web apps, mobile products, and APIs for real markets. Next.js, React Native, PostgreSQL.",
  keywords: ["Full-Stack Developer", "Next.js", "React Native", "Libya", "Benghazi", "Web Development", "Mobile Apps"],
  authors: [{ name: "Mohammed Younes" }],
  creator: "Mohammed Younes",
  metadataBase: new URL("https://maededev.online"), // swap in your real domain

  openGraph: {
    title: "Mohammed Younes — Full-Stack Developer",
    description:
      "Building product-ready web apps and APIs. Currently targeting product manager and project lead roles.",
    url: "https://yoursite.com",
    siteName: "Mohammed Younes",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    title: "Mohammed Younes — Full-Stack Developer",
    description:
      "Full-stack developer from Benghazi. Next.js, React Native, PostgreSQL, and more.",
    
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}