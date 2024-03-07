import Link from "next/link";
import Image from "next/image";

export default function LeJeu() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>Le Jeu</h2>
          <h4>Déc.2023</h4>
          <Link
            href=""
            className="text-purple-600 hover:text-purple-400"
            target="blank"
          >
            Github
          </Link>
          <div>
            <h3>Objectif :</h3>
            <p>
              Concevoir une application proposant un lieu de rencontre pour
              joueur de jeu vidéo. Le tout en implémentant mon propre framework
              "Magy"
            </p>
          </div>
          <Image
            src="/photo/LeJeu.webp"
            width={300}
            height={300}
            alt="image"
            className="rounded-xl"
          />
          <p>
            Cette application est en cours de développement. Vous pouvez suivre
            nos avancer via GitHub
          </p>
        </div>
      </div>

      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
