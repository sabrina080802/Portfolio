import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/header";
import Footer from "@/components/footer";

class PortfolioDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="stylesheet" href="/styles/globals.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default PortfolioDocument;
/*export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
*/
