import Link from "next/link";
import Image from "next/image";
import ProjectPage from "@/components/project-page";

export default function Espard() {
  return (
    <ProjectPage
      project={{
        image: "/photo/Quitter.png",
        name: "Espard",
        tags: ["C#", ".NET", "IUT"],
      }}
    >
      <div className="article-container">
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
            trois formules : - des fiches « vocabulaire » - des phrases à trous
            à compléter - des phrases dans le désordre, à reconstituer.
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
          J'ai conçu et développé personnellement tous les éléments visuels à
          l'aide de contrôles utilisateur créés sur mesure, du début à la fin.
          Dans le but de susciter l'envie d'apprendre, j'ai veillé à créer une
          ambiance estivale et accueillante dans la conception de ces visuels.
        </p>
        <Image
          src="/photo/Quitter.png"
          width={300}
          height={300}
          alt="image"
          className="rounded-xl"
        />
        <Image
          src="/photo/Progression.png"
          width={300}
          height={300}
          alt="image"
          className="rounded-xl"
        />
        <Image
          src="/photo/prochaine.png"
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

      <div className="about-me">
        <div className="Source"></div>
      </div>
    </ProjectPage>
  );
}
