import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { Providers } from "@/components/Providers";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description = profile.intro;

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: title, template: `%s · ${profile.handle}` },
  description,
  keywords: [
    "Anthony Ogunleye",
    "DprinceDeveloper",
    "Full-Stack Developer Nigeria",
    "React developer Lagos",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "React Native",
  ],
  authors: [{ name: profile.name, url: profile.site }],
  openGraph: {
    type: "website",
    url: profile.site,
    title,
    description,
    siteName: profile.handle,
    images: [{ url: "/images/hero.jpg", width: 592, height: 592, alt: profile.name }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/hero.jpg"] },
  icons: { icon: "/images/logo-modern.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: [profile.handle, "Dprince"],
  url: profile.site,
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  address: { "@type": "PostalAddress", addressCountry: "NG" },
  alumniOf: "Ekiti State University",
  sameAs: Object.values(profile.socials),
  knowsAbout: ["TypeScript", "React", "Next.js", "React Native", "Node.js", "Python", "FastAPI"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${instrument.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <Providers>{children}</Providers>
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
