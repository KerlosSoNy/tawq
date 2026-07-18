import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import NetworkStatusBanner from "@/components/organisims/networkBanner/NetworkStatusBanner";
import ConsoleSilencer from "@/lib/closeConsole";
import AnimationWrapper from "@/lib/AnimationWrapper";
import Footer from "@/components/organisims/footer/footer";
import Navbar from "@/components/organisims/navbar/navbar";
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
  title: "Tawq",
  description: "Tawq",
};

const Galderglynn = localFont({
  src: [
    {
      path: '/fonts/Galderglynn-Titling-Bd.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/Galderglynn-Titling-Rg.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-Galderglynn',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // optional, if using as CSS variable
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Galderglynn.variable} ${inter.variable} font-inter h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-screen  overflow-x-hidden">
        {/* <SplashScreen /> */}
        <NetworkStatusBanner />
        <ConsoleSilencer />
        <Navbar />
        <AnimationWrapper>
          {children}
          <Footer />
        </AnimationWrapper>
      </body>
    </html>
  );
}