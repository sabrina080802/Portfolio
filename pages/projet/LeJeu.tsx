import Link from "next/link";
import Image from "next/image";
import ProjectPage from "@/components/project-page";

export default function LeJeu() {
  return (
    <>
      <ProjectPage
        project={{
          image: "/photo/LeJeu.webp",
          name: "Le Jeu",
          tags: ["PHP", "C#", "JavaScript", "HTML", "Projet personnel", "CSS"],
        }}
      >
        <div className="article-container">
          <div className="flex">
            <div className="mr-8 flex-1">
              <div className="flex flex-col gap-4">
                <h4>Application Web/Mobile • Déc 2023 - en cours</h4>
              </div>
              <Link
                href=""
                className="text-purple-600 hover:text-purple-400"
                target="blank"
              >
                Github
              </Link>
              <div>
                <h3>Objectif :</h3>
                <p className="text-justify">
                  Concevoir une application proposant un lieu de rencontre pour
                  joueur de jeu vidéo. Le tout en implémentant mon propre
                  framework "Magy"
                </p>
              </div>
              <div className="flex flex-05 flex-col justify-start items-center mt-0">
                <h3 className="text-left">Langage et outils utilisés</h3>
                <p className="w-full m-0">
                  {" "}
                  "PHP", "C#", "JavaScript", "HTML", "CSS"{" "}
                </p>
                <p className="w-full m-0">Serveur : Xampp</p>
                <p className="w-full m-0">Framework : Magy </p>
              </div>
            </div>
          </div>

          <Image
            src="/photo/LeJeu.webp"
            width={300}
            height={300}
            alt="image"
            className="rounded-xl"
          />
          <p className="text-justify">
            Cette application est en cours de développement. Vous pouvez suivre
            mes avancer via GitHub
          </p>
        </div>

        <div className="about-me">
          <div className="Source"></div>
        </div>
      </ProjectPage>
    </>
  );
}
