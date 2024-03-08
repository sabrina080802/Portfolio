import Link from "next/link";
import Image from "next/image";

export default function PingPong() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>PingPong</h2>
          <h4>Jeu PC • Déc.2023</h4>
          <Link
            href="https://github.com/sabrina080802/PingPong"
            className="text-purple-600 hover:text-purple-400"
            target="blank"
          >
            Github
          </Link>
          <div>
            <h3>Objectif :</h3>
            <p>
              Ce projet, qui consiste en la création d'un jeu de ping-pong en
              Java agrémenté d'effets de particules, avait pour objectif
              principal de me permettre de renouer avec le langage Java.
            </p>
          </div>
          <Image
            src="/photo/PingPong.webp"
            width={300}
            height={300}
            alt="image"
            className="rounded-xl"
          />
        </div>
        <p>
          Voici les effets de particules. J'ai entamé ce projet en utilisant du
          code très simplifié, dans le but de me réaccoutumer en douceur au Java
          tout en réapprenant les méthodes orientées objet.
        </p>
      </div>

      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
