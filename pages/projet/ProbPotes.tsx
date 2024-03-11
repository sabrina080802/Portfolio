import Link from "next/link";
import Image from "next/image";
import ProjectPage from "@/components/project-page";

export default function ProbPotes() {
  return (
    <>
      <ProjectPage
        project={{
          image: "/photo/ProbPotes.webp",
          name: "ProbPotes",
          tags: ["C#", ".NET", "IUT"],
        }}
      >
        <div className="article-container">
          <div className="flex">
            <div className="mr-8 flex-1">
              <div className="flex flex-col gap-4">
                <h4>Application de bureau • Mai-Juin 2021</h4>
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
                  Réalisation d'une application afin de créez des événements,
                  ajoutez des dépenses, indiquez qui a payé et pour qui, puis
                  générez des rapports pour savoir qui doit quoi à qui.
                </p>
              </div>
            </div>

            <div className="flex flex-05 flex-col justify-start items-center mt-0">
              <h3 className="text-left">Langage et outils utilisés</h3>
              <p className="w-full m-0">Langages : .NET/C#/SQL</p>
            </div>
          </div>
          <div>
            <Image
              src="/photo/ProbPotes.webp"
              width={300}
              height={300}
              alt="image"
              className="rounded-xl"
            />
          </div>
          <div>
            <Image
              src="/photo/imageProb.webp"
              width={300}
              height={300}
              alt="image"
              className="rounded-xl"
            />
          </div>
        </div>
        <p>
          Notre application a été développée en collaboration au sein d'un
          groupe de quatre personnes, dans le cadre d'un projet
          interdisciplinaire associant deux modules d'étude : "Développement
          d'Applications" et "Bases de Données". Ce projet nous a permis de
          concrétiser nos connaissances en concevant une base de données
          fonctionnelle, pour laquelle nous avons employé le langage SQL. Cette
          expérience collaborative a non seulement renforcé nos compétences
          techniques dans ces domaines clés de l'informatique, mais a également
          souligné l'importance du travail d'équipe dans la réussite d'un projet
          informatique complexe.
        </p>
        <div className="about-me">
          <div className="Source"></div>
        </div>
      </ProjectPage>
    </>
  );
}
