// app/layout.tsx
import "./globals.css";
import { MonteCarlo } from "next/font/google";

const monteCarlo = MonteCarlo({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monteCarlo.className}>{children}</body>
    </html>
  );
}
