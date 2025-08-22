import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "../ui/Navbar";
import Footer from "@/ui/Footer";
import { montserrat } from "@/ui/fonts";
import { OrderModalProvider } from "@/ui/components/OrderModalContext";
import OrderModal from "@/ui/components/OrderModal";

export const metadata: Metadata = {
  title: "Pasteleria",
  description: "Wep app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Pasteleria Alarcon</title>
        <link rel="icon" href="/isologo.png" sizes="any"></link>
      </head>

      <body className={`${montserrat.className} antialiased`}>
        <OrderModalProvider>
          <Navbar locale="" />
          <main>
            {children}
          </main>
          <OrderModal/>
        </OrderModalProvider>


        <Footer />
      </body>
    </html>
  );
}
