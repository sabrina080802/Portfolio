import Link from "next/link";
import Image from "next/image";
import ProjectPage from "@/components/project-page";

export default function Magy() {
  return (
    <>
      <ProjectPage
        project={{
          image: "/photo/github.svg",
          name: "Magy",
          tags: ["JS", "HTML", "PHP", "C#", "CSS"],
        }}
      >
        <div className="article-container">
          <div className="flex">
            <div className="mr-8 flex-1">
              <div className="flex flex-col gap-4"></div>
              <h4>Framework • Déc.2023</h4>
            </div>
            <Link
              href="https://github.com/sabrina080802/Magy"
              className="text-purple-600 hover:text-purple-400"
              target="blank"
            >
              Github
            </Link>
            <div>
              <h3>Objectif :</h3>
              <p className="text-justify">
                Conception d'un framework dans le but d'approfondir mes
                connaissances en web.
              </p>
            </div>
            <div className="flex flex-05 flex-col justify-start items-center mt-0">
              <h3 className="text-left">Langage et outils utilisés</h3>
              <p className="w-full m-0">Langages :JS/HTML/PHP/C#/CSS</p>
              <p className="w-full m-0">Serveur : Xampp</p>
            </div>
          </div>
          <Image
            src="/photo/"
            width={300}
            height={300}
            alt="image"
            className="rounded-xl"
          />
        </div>
        <p>
          Se lancer dans la création de mon propre framework a été un défi
          personnel stimulant. Passionnée par l'apprentissage, l'idée de
          développer un outil sur mesure pour approfondir mes connaissances en
          programmation m'a particulièrement motivée. Cette démarche,
          ambitieuse, m'a permis de pousser mes limites et d'enrichir mon
          expertise technique de manière significative.
        </p>{" "}
        <div className="about-me">
          <div className="Source"></div>
        </div>
      </ProjectPage>
    </>
  );
}
