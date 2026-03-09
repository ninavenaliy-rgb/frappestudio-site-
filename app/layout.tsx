import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FRAPPE STUDIO — Экосистема стиля и лидерства",
  description:
    "Развитие личности через стиль, имидж и предпринимательство. Платформа для предпринимателей и экспертов.",
  keywords: ["frappe studio", "имидж лидера", "личный бренд", "стиль", "предпринимательство"],
  openGraph: {
    title: "FRAPPE STUDIO",
    description: "Экосистема стиля и лидерства",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-white text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
