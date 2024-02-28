import Image from "next/image";

export type StageInfo = {
  image: string;
};

export default function Stage(infos: StageInfo) {
  return (
    <>
      <div className="stage-container">
        <div className="identity daily">
          <Image
            src="/photo/AlsaceDigitale.jpeg"
            width={300}
            height={300}
            alt={"image"}
            className="daily-img"
          />
        </div>
        <div className="stage-container">
          <p>Alsace Digitale</p>
        </div>
      </div>
      <div className="stage-description">
        <h2>Stage 1ère année</h2>
        <p>Description du stage...</p>
        <a href="/photo/CompteRendue1.pdf" download>
          <button className="btn">
            Télécharger le compte rendue 1 ère années
          </button>
        </a>
      </div>
      <div className="stage-container">
        <div className="identity daily">
          <Image
            src="/photo/Numerize.png"
            width={300}
            height={300}
            alt={"image"}
            className="daily-img"
          />
        </div>
        <div className="stage-container">
          <p>Numérize</p>
        </div>
      </div>
      <div className="stage-description">
        <h2>Stage 2ème année</h2>
        <p>Description du stage...</p>
        <a href="/photo/CompteRendue1.pdf" download>
          <button className="btn">
            Télécharger le compte rendue 2 ème années
          </button>
        </a>
      </div>
    </>
  );
}
