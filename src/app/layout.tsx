import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import NetworkStatusBanner from "@/components/organisims/networkBanner/NetworkStatusBanner";
import ConsoleSilencer from "@/lib/closeConsole";
import AnimationWrapper from "@/lib/AnimationWrapper";
import Footer from "@/components/organisims/footer/footer";
import Navbar from "@/components/organisims/navbar/navbar";
import SplashScreen from "@/components/organisims/splashScreen/splashScreen";


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Galderglynn.variable} h-full antialiased`}
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