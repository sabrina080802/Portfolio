import RootLayout from "./../layout";

import Footer from "@/components/footer";
import Image from "next/image";

export default function E4() {
  return (
    <>
      <RootLayout>
        <h2 className="title"> Epreuve E4</h2>
        <section className="border">
          <div className="stage1">
            <p>Stage 1 ère années</p>
            <iframe
              src="/photo/CompteRendue1.pdf"
              width="500"
              height="600"
            ></iframe>
            <a href="/photo/CompteRendue1.pdf" download>
              <button> Télécharger le compte rendue 1 ere années </button>
            </a>
          </div>
          <div className="stage2">
            <p>Stage 2 ème années</p>
            <iframe
              src="/photo/CompteRendue2.pdf"
              width="500"
              height="600"
            ></iframe>
            <a href="/photo/CompteRendue2.pdf" download>
              <button> Télécharger le compte rendue 2 ème années </button>
            </a>
          </div>

          <p>Les compétences validées</p>
          <Footer />
        </section>
      </RootLayout>
    </>
  );
}
