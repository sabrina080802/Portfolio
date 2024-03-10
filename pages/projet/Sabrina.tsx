import Link from "next/link";
import Image from "next/image";
import ProjectPage from "@/components/project-page";

export default function Sabrina() {
  return (
    <>
      <ProjectPage
        project={{
          image: "/photo/Sabrina.png",
          name: "Sabrina",
          tags: [
            "NextJS",
            "React",
            "Projet personnel",
            "CNED",
            "TypeScript",
            "JavaScript",
            "CSS",
          ],
        }}
      >
        <div className="article-container">
          <div className="flex">
            <div className="mr-8 flex-1">
              <div className="flex flex-col gap-4">
                <h4>Site Web • Déc - Janv 2024</h4>
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
                  J'ai récemment pris l'initiative de développer un site web
                  personnel afin de présenter mes projets et expériences
                  professionnelles. Pour ce faire, j'ai choisi d'utiliser
                  Next.js, un framework que je n'avais jamais expérimenté
                  auparavant. Malgré la courbe d'apprentissage initiale,
                  l'attrait d'acquérir de nouvelles compétences a largement
                  compensé les défis rencontrés. Ce choix s'est avéré
                  particulièrement judicieux, car Next.js offre des avantages
                  significatifs en termes de rapidité de déploiement, ce qui m'a
                  permis d'optimiser la mise en ligne de mon site. L'expérience
                  a été enrichissante, me permettant non seulement d'élargir mon
                  éventail de compétences techniques mais aussi d'améliorer la
                  visibilité de mes réalisations de manière efficace et
                  professionnelle.
                </p>
              </div>
            </div>

            <div className="flex flex-05 flex-col justify-start items-center mt-0">
              <h3 className="text-left">Langage et outils utilisés</h3>
              <p className="w-full m-0">
                Langages : .NEXT.JS/REACT/CSS/TYPE SCRIPT
              </p>
            </div>
          </div>
          <div>
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
      </ProjectPage>
    </>
  );
}
