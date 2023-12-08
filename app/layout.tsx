import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabine Kokot | Softwareentwicklerin",
  description: "Portfolio of Sabine Kokot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          raleway.className + " bg-cBlack w-screen h-screen overflow-hidden"
        }
      >
        {children}
      </body>
    </html>
  );
}
