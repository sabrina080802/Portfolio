import Link from "next/link";
import Image from "next/image";
import ProjectPage from "@/components/project-page";

export default function PingPong() {
  return (
    <>
      <ProjectPage
        project={{
          image: "/photo/PingPong.webp",
          name: "PingPong",
          tags: ["Java", "IUT"],
        }}
      >
        <div className="article-container">
          <div className="flex">
            <div className="mr-8 flex-1">
              <div className="flex flex-col gap-4">
                <h4>Jeu PC • Déc.2023</h4>
              </div>
              <Link
                href="https://github.com/sabrina080802/PingPong"
                className="text-purple-600 hover:text-purple-400"
                target="blank"
              >
                Github
              </Link>
              <div>
                <h3>Objectif :</h3>
                <p className="text-justify">
                  Ce projet, qui consiste en la création d'un jeu de ping-pong
                  en Java agrémenté d'effets de particules, avait pour objectif
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
            <div className="flex flex-05 flex-col justify-start items-center mt-0">
              <h3 className="text-left">Langage et outils utilisés</h3>
              <p className="w-full m-0">Langages : Java</p>
            </div>
          </div>

          <p>
            Voici les effets de particules. J'ai entamé ce projet en utilisant
            du code très simplifié, dans le but de me réaccoutumer en douceur au
            Java tout en réapprenant les méthodes orientées objet.
          </p>

          <div className="about-me">
            <div className="Source"></div>
          </div>
        </div>
      </ProjectPage>
    </>
  );
}
