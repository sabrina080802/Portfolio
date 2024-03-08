import Link from "next/link";
import Image from "next/image";

export default function Policloud() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>Policloud</h2>
          <h4>Site Web • Nov-Janv.2022</h4>
          <Link
            href="https://github.com/sabrina080802/Policloud"
            className="text-purple-600 hover:text-purple-400"
            target="blank"
          >
            Github
          </Link>
          <div>
            <h3>Objectif :</h3>
            <p>
              Dire quels sont les thèmes majeurs, quelles sont les idées
              dominantes, dans les messages de vœux de Nouvel An adressés aux
              Français par les présidents de la République chaque année. A cette
              fin, on produira un nuage de mots pour l’ensemble. Mais, pour les
              étudiants volontaires, il est également possible d’introduire un
              paramètre de temps : un nuage de mots par période, ou un seul
              nuage de mots qui se modifie automatiquement pour refléter
              l’évolution temporelle.
            </p>
          </div>
          <div>
            <Image
              src="/photo/Policloud.png"
              width={300}
              height={300}
              alt="image"
              className="rounded-xl"
            />
            <Image
              src="/photo/NuageDeMots.png"
              width={300}
              height={300}
              alt="image"
              className="rounded-xl"
            />
          </div>
          <p>
            {" "}
            J'ai mené à bien ce projet en autonomie, en gérant la récupération
            du texte des discours à partir des vidéos en C#. Par la suite, j'ai
            extrait les mots les plus cités et pris en charge la partie
            visuelle, en tenant compte des contraintes graphiques.
          </p>
        </div>
      </div>

      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
