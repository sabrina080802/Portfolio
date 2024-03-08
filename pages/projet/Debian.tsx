import Link from "next/link";
import Image from "next/image";

const iframeSrc =
  "https://docs.google.com/presentation/d/e/2PACX-1vR-cRAU-ljNJfiOfXYe-qVPmNwWBKjBP3mCTRRn1-rwuuA_qB1suweiiBTOESRXr_R0mPmaXOJnveR7/pub?start=false&loop=false&delayms=5000";

export default function Debian() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>Installation d'un poste pour développement</h2>
          <h4> Oct-Nov 2021</h4>
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
      </div>
      <a href={iframeSrc} target="_blank" rel="noopener noreferrer">
        Ouvrir la présentation
      </a>

      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
