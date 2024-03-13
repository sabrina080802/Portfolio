import Link from "next/link";
import Image from "next/image";
import ProjectPage from "@/components/project-page";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div className="flex">
          <div className="mr-8 flex-1">
            <div className="flex flex-col gap-4"></div>
            <h4> Application de bureau • Mai-Juin 2022</h4>
            <Link
              href="https://github.com/sabrina080802/Espard"
              className="text-purple-600 hover:text-purple-400"
              target="blank"
            >
              Github
            </Link>
            <div>
              <p>
                Concevoir une application proposant une initiation à la langue
                espagnole au travers d’une série d’exercices, articulés autour
                de trois formules : - des fiches « vocabulaire » - des phrases à
                trous à compléter - des phrases dans le désordre, à
                reconstituer.
              </p>
              <Image
                src="/photo/Espagnol.webp"
                width={300}
                height={300}
                alt="image"
                className="rounded-xl m-auto"
              />
            </div>
          </div>
          <div className="flex flex-05 flex-col justify-start items-center mt-0">
            <h3 className="text-left">Langage et outils utilisés</h3>
            <p className="w-full m-0">Langages : .NET/C#</p>
          </div>
        </div>
        <p>
          J'ai conçu et développé personnellement tous les éléments visuels à
          l'aide de contrôles utilisateur créés sur mesure, du début à la fin.
          Dans le but de susciter l'envie d'apprendre, j'ai veillé à créer une
          ambiance estivale et accueillante dans la conception de ces visuels.
        </p>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          autoplaySpeed={3000}
          slidesToShow={1}
          slidesToScroll={1}
          className="h-400"
        >
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
        </Slider>
        <p>
          J'ai pris en charge l'intégralité de la conception visuelle de
          l'application, en élaborant chaque aspect du début à la fin. Par
          ailleurs, j'ai également accompli une grande partie des exercices
          proposés. Cette expérience m'a permis non seulement de développer mes
          compétences en design, mais aussi de renforcer mes connaissances
          pratiques à travers une application concrète et variée des concepts
          appris.
        </p>
      </div>
      <div className="about-me">
        <div className="Source"></div>
      </div>
    </ProjectPage>
  );
}
