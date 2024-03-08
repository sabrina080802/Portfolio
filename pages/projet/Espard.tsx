import Link from "next/link";
import Image from "next/image";

export default function Espard() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>Espard</h2>
          <h4> Application de bureau • Mai-Juin 2022</h4>
          <Link
            href="https://github.com/sabrina080802/Espard"
            className="text-purple-600 hover:text-purple-400"
            target="blank"
          >
            Github
          </Link>
          <div>
            <h3>Objectif :</h3>
            <p>
              Concevoir une application proposant une initiation à la langue
              espagnole au travers d’une série d’exercices, articulés autour de
              trois formules : - des fiches « vocabulaire » - des phrases à
              trous à compléter - des phrases dans le désordre, à reconstituer.
            </p>
          </div>
          <Image
            src="/photo/Espagnol.webp"
            width={300}
            height={300}
            alt="image"
            className="rounded-xl"
          />
          <p>
            J'ai réalisé tout le visuel de A à Z de l'application. Et j'ai
            réaliser beaucoup des exercices proposés.
          </p>
        </div>
      </div>

      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
