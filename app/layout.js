import { Inter } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react"
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {

  const session=await auth()

  return (
   
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <SessionProvider session={session}>
      {children}
      </SessionProvider>
      </Providers>
      </body>
      
    </html>
   
  
  );
}
