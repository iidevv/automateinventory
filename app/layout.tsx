import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const RobotoRegular = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto-regular",
  weight: "400",
});
const RobotoMedium = localFont({
  src: "./fonts/Roboto-Medium.ttf",
  variable: "--font-roboto-medium",
  weight: "500",
});

const RobotoBold = localFont({
  src: "./fonts/Roboto-Bold.ttf",
  variable: "--font-roboto-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Automate Inventory",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RobotoRegular.variable} ${RobotoMedium.variable} ${RobotoBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
