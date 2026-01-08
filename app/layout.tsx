import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
// import Footer from "@/components/Home/Footer/Footer";

const font = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Responsive Accordion",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
