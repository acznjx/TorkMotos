import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tork Motos",
  description: "A melhor manutenção e os melhores acessórios para sua moto. Especialistas em alta performance e confiança sobre duas rodas.",
  keywords: "oficina de motos, mecânica de motos, venda de motos, acessórios para motos, Tork Motos",
  authors: [{ name: "Tork Motos" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}