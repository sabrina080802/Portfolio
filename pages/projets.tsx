import RootLayout from "./layout";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Identity from "@/components/identity";

export default function Projets() {
  return (
    <>
      <RootLayout>
        <Header />
        <section>
          <div className="mosaic">
            PROJETS
          </div>
          <Footer />
        </section>
      </RootLayout>
    </>
  );
}
