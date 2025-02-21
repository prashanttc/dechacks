import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], preload: true });
const jetBrainsMono = JetBrains_Mono({ weight: ["400", "700"], subsets: ["latin"], preload: true });


export const metadata: Metadata = {
  title: "Devhacks",
  description: "by echelon dev society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.className} ${jetBrainsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
