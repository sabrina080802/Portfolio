import RootLayout from "./../layout";

import Footer from "@/components/footer";
import Image from "next/image";

export default function E4() {
  return (
    <>
      <RootLayout>
        <h2 className="title">Epreuve E4</h2>
        <section className="border">
          <h3>Les stages</h3>
          <div className="stage1">
            <p>Stage 1 ère années</p>
            <div className="identity daily">
              <Image
                src="/photo/AlsaceDigitale.jpeg"
                width={300}
                height={300}
                alt={"image"}
                className="daily-img"
              />
            </div>
            <p>Alsace Digitale</p>
            <a href="/photo/CompteRendue1.pdf" download>
              <button> Télécharger le compte rendue 1 ere années </button>
            </a>
          </div>
          <div className="stage2">
            <p>Stage 2 ème années</p>
            <div className="identity daily">
              <Image
                src="/photo/Numerize.png"
                width={300}
                height={300}
                alt={"image"}
                className="daily-img"
              />
            </div>
            <p>Numerize</p>

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
