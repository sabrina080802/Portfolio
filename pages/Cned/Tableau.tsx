import RootLayout from "./../layout";
import Image from "next/image";

export default function Tableau() {
  return (
    <>
      <RootLayout>
        <h2 className="title">Compétences</h2>
        <section className="border">
          <p>Mon tableau de Compétences</p>
          <div className="identity daily">
            <iframe
              src="/photo/Competence.pdf"
              width="500"
              height="600"
            ></iframe>
            <a href="/photo/Competence.pdf" download>
              <button> Télécharger le PDF </button>
            </a>
          </div>
        </section>
      </RootLayout>
    </>
  );
}
