import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Refaz | Reformas e Construção de Lojas em Shopping Centers", description:"Empreiteira especializada em construção, reforma e manutenção de lojas e ambientes comerciais, com experiência em obras dentro de shopping centers.", keywords:["reforma de lojas","construção de lojas","obras em shopping","empreiteira comercial","manutenção predial","Jundiaí"], icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
