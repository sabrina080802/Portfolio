import "./styles/globals.css";
import { AppProps } from "next/app";
import Layout from "./layout";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Main } from "next/document";

const NoSSRWrapper = dynamic(() => import("./layout"), {
  ssr: false,
});

function Portfolio({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NoSSRWrapper>
      <Component {...pageProps} />
    </NoSSRWrapper>
  );
}

export default Portfolio;
