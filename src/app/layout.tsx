import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8]">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left: Copyright */}
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                <p>
                  © {new Date().getFullYear()} {aboutMe.name}.
                </p>
                {aboutMe.secretDescription && (
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                    {aboutMe.secretDescription}
                  </p>
                )}
              </div>

              {/* Middle: Contact Info */}
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {aboutMe.phone && (
                  <p>Tel. {aboutMe.phone}</p>
                )}
                {aboutMe.workAddress && (
                  <p className="mt-2 text-xs leading-relaxed">
                    {aboutMe.workAddress}
                  </p>
                )}
              </div>

              {/* Right: Credits */}
              <div className="text-sm text-neutral-500 dark:text-neutral-500">
                <p>
                  Credits: {" "}
                  <a
                    href="https://github.com/tovacinni/research-website-template"
                    className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
                  >
                    research-website-template
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
