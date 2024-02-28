import RootLayout from "./../layout";
import Image from "next/image";
import Stage, { StageInfo } from "@/components/stage";

export default function Stages() {
  return (
    <>
      <RootLayout>
        <h2 className="title">Stages</h2>
        <section className="border">
          <div className="stage-container">
            <p>Alsace Digitale</p>
            <div className="stage-item">
              <div className="identity daily">
                <div className="stage-image">
                  <Image
                    src="/photo/AlsaceDigitale.jpeg"
                    width={300}
                    height={300}
                    alt={"image"}
                    className="daily-img"
                  />
                </div>
              </div>
            </div>
            <div className="stage-description">
              <h2>Stage 1ère année</h2>
              <p>Description du stage...</p>
              <a href="/photo/CompteRendue1.pdf" download>
                <button className="btn">
                  Télécharger le compte rendue 1 ere années
                </button>
              </a>
            </div>
          </div>
          <div className="stage-container">
            <p>Numerize</p>
            <div className="stage-item">
              <div className="identity daily">
                <div className="stage-image">
                  <Image
                    src="/photo/Numerize.png"
                    width={300}
                    height={300}
                    alt={"image"}
                    className="daily-img"
                  />
                </div>
              </div>
            </div>
            <div className="stage-description">
              <h2>Stage 2ème année</h2>
              <p>Description du stage...</p>
              <a href="/photo/CompteRendue2.pdf" download>
                <button className="btn">
                  Télécharger le compte rendue 2 ème années
                </button>
              </a>
            </div>
          </div>

          <p>Les compétences validées</p>
        </section>
      </RootLayout>
    </>
  );
}
