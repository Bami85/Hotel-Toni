import './globals.css'
import {Nunito} from "next/font/google"
import Navbar from './src/components/Appbar/Navbar';
import React from 'react';
import HeroSection from './src/app/home/shared/Hero-Section';
import AboutSection from './src/app/home/shared/About-Section';
import CheckoutSection from './src/app/home/shared/Checkout-Section';


export const metadata = {
  title: 'Hotel Toni ',
  description: 'Hotel Toni Bookning',
}

const font = Nunito ({
  subsets: ["latin"]
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= {font.className}>{children}
      <>
      <Navbar logoColor={`invert`} className={`bg-transparent p-3`} color={`text-white-50`} position={`absolute`}/>
        <HeroSection />
        <CheckoutSection />
        <AboutSection />
    </>
      </body>
    </html>
  )
}
