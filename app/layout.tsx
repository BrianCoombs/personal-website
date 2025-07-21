import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollToSection } from "@/components/scroll-to-section";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Coombs - AI Engineer",
  description: "AI engineer passionate about helping companies and non-profits use AI to automate monotony and create wow moments. Currently at Malleable AI.",
  keywords: ["AI Engineer", "Machine Learning", "Automation", "Austin, TX", "Malleable AI", "Brian Coombs"],
  authors: [{ name: "Brian Coombs" }],
  creator: "Brian Coombs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://briancoombs.com",
    siteName: "Brian Coombs",
    title: "Brian Coombs - AI Engineer",
    description: "AI engineer passionate about helping companies and non-profits use AI to automate monotony and create wow moments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Coombs - AI Engineer",
    description: "AI engineer passionate about helping companies and non-profits use AI to automate monotony and create wow moments.",
    creator: "@briancoombs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
