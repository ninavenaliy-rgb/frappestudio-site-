import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FRAPPÉSTUDIO — Дизайнерская одежда",
  description:
    "Уникальные авторские изделия, которые не просто носят — в них живут. Дизайнерская одежда с 2018 года. Производство, мерч, капсулы.",
  keywords: ["frappe studio", "дизайнерская одежда", "авторская одежда", "пошив", "мерч"],
  openGraph: {
    title: "FRAPPÉSTUDIO",
    description: "Дизайнерская одежда — Екатеринбург",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
