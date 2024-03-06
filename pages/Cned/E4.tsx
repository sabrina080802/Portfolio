import Link from "next/link";
import Stage from "@/components/stage";

export default function E4() {
  return (
    <>
      <h2 className="title">Epreuve E4</h2>
      <h3>Les stages </h3>
      <Stage
        stage="Stage de 1ère année"
        description={"une description"}
        image={"/photo/AlsaceDigitale.jpeg"}
        name="Alsace Digitale"
        link={"/photo/CompteRendue1.pdf"}
        descriptionlink="Télécharger le compte rendue 1ère année"
      />
      <Stage
        stage="Stage de 2ème année"
        description={"une description"}
        image={"/photo/Numerize.png"}
        link={"/photo/CompteRendue2.pdf"}
        descriptionlink="Télécharger le compte rendue 2ème année"
        name="Numérize"
      />
      <div className="mt-24 flex flex-col gap-7 justify-start">
        <h4>Les compétences validées</h4>
        <p className="">compétences</p>
      </div>

      <div className="mt-24 flex flex-col gap-7 justify-start">
        <h3>Tableau de Compétences</h3>
        <div>
          <Link href="/photo/Competence.pdf" download className="btn">
            Télécharger le tableau de compétences{" "}
          </Link>
        </div>
      </div>

      <div className="mt-24">
        <h3>Ma vidéo de présentation</h3>
        <br />
        <iframe
          width="560"
          height="315"
          src="/photo/Compétences.mp4"
          allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
}
