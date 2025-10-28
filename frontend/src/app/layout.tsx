import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
});

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Cuentos con Pictogramas",
  description: "Aplicación de aprendizaje con pictogramas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}