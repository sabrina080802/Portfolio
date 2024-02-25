import type { Metadata } from "next";
import Head from "next/head";
import Header from "@/components/header";
import "./styles/globals.css";

export default function RootLayout({
children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
}
