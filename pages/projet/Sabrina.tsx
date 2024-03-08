import Link from "next/link";
import Image from "next/image";

export default function Sabrina() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>Sabrina</h2>
          <h4>Site Web • Déc - Janv 2024</h4>
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
              Réalisation d'un site web pour mettre en ligne mes projets et mes
              expériences.
            </p>
          </div>
          <Image
            src="/photo/Sabrina.png"
            width={300}
            height={300}
            alt="image"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
