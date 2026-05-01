import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ahmad Raza | Frontend Developer",
  description: "Frontend Developer specializing in React.js and Next.js. Crafting fast, responsive & beautiful web interfaces.",
  keywords: ["Frontend Developer", "React.js", "Next.js", "Portfolio", "Web Developer"],
  author: "Ahmad Raza",
  openGraph: {
    title: "Ahmad Raza | Frontend Developer",
    description: "Crafting fast, responsive & beautiful web interfaces.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#0a0a0a] text-white font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
