import Link from "next/link";
import Image from "next/image";

export default function Debian() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>Installation d'un poste pour développement</h2>
          <h4>Oct.2021</h4>
          <Link
            href="/photo/RapportSAE-OFFERLE-ALHAMMUTI.pdf"
            download
            className="btn"
          >
            Rapport projet
          </Link>
          <div>
            <h3>Objectif :</h3>
            <p>
              Concevoir une VM avec gestion de l'interface réseau et
              configuration de la VM, installation d'un serveur web.
            </p>
          </div>
          <Image
            src="/photo/debian.jpeg"
            width={300}
            height={300}
            alt="image"
            className="rounded-xl"
          />
        </div>
        <Link href="/photo/Presentation1.pptx" download className="btn">
          Diaporama du projet
        </Link>
      </div>

      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
