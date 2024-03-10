import type { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./styles/globals.css";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
