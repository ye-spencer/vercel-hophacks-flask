import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Inter, Anton } from "next/font/google";
import "./globals.css";

const vcr = localFont({
    src: "../public/VCR_OSD_MONO_1.001.ttf",
    variable: "--font-vcr",
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const anton = Anton({
    weight: "400",
    variable: "--font-anton",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "HopHacks 2026",
    description: "HopHacks 2026 - Illuminating Innovations",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${inter.variable} ${anton.variable} ${vcr.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
