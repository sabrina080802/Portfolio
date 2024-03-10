import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import ProjectPage from "@/components/project-page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Policloud() {
  return (
    <ProjectPage
      project={{
        name: "Policloud",
        image: "/photo/Policloud.png",
        tags: ["C#", "HTML", "CSS", "IUT"],
      }}
    >
      <div className="article-container">
        <div className="flex">
          <div className="mr-8 flex-1">
            <div className="flex flex-col gap-4">
              <h4>Site Web • Nov-Janv.2022</h4>
            </div>

            <Link
              href="https://github.com/sabrina080802/Policloud"
              className="text-purple-600 hover:text-purple-400"
              target="blank"
            >
              Github
            </Link>
            <p className="text-justify">
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

          <div className="flex flex-05 flex-col justify-start items-center mt-0">
            <h3 className="text-left">Langage et outils utilisés</h3>
            <p className="w-full m-0">Langages : Polynésien / Chinois</p>
            <p className="w-full m-0">Serveur : Jean-Yves</p>
            <p className="w-full m-0">Framework : Tous</p>
            <p className="w-full m-0">Authentification : Paul le videur</p>
          </div>
        </div>
        <div>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            autoplay={true}
            autoplaySpeed={3000}
            slidesToShow={1}
            slidesToScroll={1}
            className="h-400"
          >
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
          </Slider>
        </div>
        <p className="text-justify">
          J'ai mené à bien ce projet en autonomie, en gérant la récupération du
          texte des discours à partir des vidéos en C#. Par la suite, j'ai
          extrait les mots les plus cités et pris en charge la partie visuelle,
          en tenant compte des contraintes graphiques.
        </p>
      </div>

      <div className="about-me">
        <div className="Source"></div>
      </div>
    </ProjectPage>
  );
}
