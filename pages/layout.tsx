import { TransitionGroup, CSSTransition } from "react-transition-group";
import type { Metadata } from "next";
import React, {
  PropsWithChildren,
  useRef,
  useEffect,
  ForwardedRef,
} from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./styles/globals.css";
import { useRouter } from "next/router";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const nodeRef: ForwardedRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (nodeRef.current) {
      nodeRef.current.classList.add("mounted");
    }
  }, []);

  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={router.asPath}
          nodeRef={nodeRef}
          timeout={150}
          className="page-transition"
          unmountOnExit
        >
          <main ref={nodeRef}>{children}</main>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
};
export default Layout;
