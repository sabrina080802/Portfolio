import Link from "next/link";
import Image from "next/image";
import ProjectPage from "@/components/project-page";
import PDFPreview from "@/components/pdf-preview";

export default function Mediatek86() {
  return (
    <>
      <ProjectPage
        project={{
          image: "/photo/Mediatek86.png",
          name: "Mediatek86",
          tags: ["PHP", "C#", "CNED", ".NET", "WindowForm"],
        }}
      >
        <div className="article-container">
          <div className="flex">
            <div className="mr-8 flex-1">
              <div className="flex flex-col gap-4">
                <h4>Application Window • Avril - Mai 2024</h4>
              </div>

              <Link
                href="https://github.com/sabrina080802/cnedProjet2"
                className="text-purple-600 hover:text-purple-400 mr-4"
                target="blank"
              >
                Github
              </Link>
              <Link
                href="/photo/cahierChargesAP3.pdf"
                download
                className="text-purple-600 hover:text-purple-400 mr-4"
              >
                Cahier des charges
              </Link>
              <Link
                href="/photo/Doc.pdf"
                download
                className="text-purple-600 hover:text-purple-400 mr-4"
              >
                Dossier documentaire
              </Link>
              <p className="text-justify">
                Pour mon projet de BTS, j'ai développé une application Windows
                nommée MediaTek86. MediaTek86 est un réseau qui gère les
                médiathèques de la Vienne, et qui a pour rôle de fédérer les
                prêts de livres, DVD et CD et de développer la médiathèque
                numérique pour l’ensemble des médiathèques du département. Je
                devais travailler sur ce projet en tant que technicienne
                développeuse junior pour l’ESN InfoTech Services 86 qui vient de
                remporter le marché pour différentes interventions au sein du
                réseau MediaTek86, dont certaines dans le domaine du
                développement d'application.
              </p>
            </div>
            <div className="flex flex-05 flex-col justify-start items-center mt-0">
              <h3 className="text-left">Langage et outils utilisés</h3>
              <p className="w-full m-0">Langages : PHP/C#/.NET</p>
              <p className="w-full m-0">Serveur : WampServer</p>
              <p className="w-full m-0">Framework :Windows Form</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-24 flex flex-col gap-7 justify-start">
            <h3>Compétences visées</h3>
            <div>
              <h4>Bloc 1 : Services informatiques aux organisations</h4>
              <h6> Gérer le patrimoine informatique</h6>
              <ul> • Recenser et identifier les ressources numériques</ul>
              <ul>
                • Exploiter des référentiels, normes et standards adoptés par le
                prestataire informatique.
              </ul>
              <ul>
                • Vérifier les conditions de la continuité d’un service
                informatique
              </ul>
              <ul>
                • Mettre en place et vérifier les niveaux d’habilitation
                associés à un service
              </ul>
              <ul>• Gérer des sauvegardes </ul>
              <ul>
                • Vérifier le respect des règles d’utilisation des ressources
                numériques
              </ul>
              <h6>
                {" "}
                Répondre aux incidents et aux demandes d’assistance et
                d’évolution
              </h6>
              <ul>• Collecter, suivre et orienter des demandes</ul>
              <ul>• Traiter des demandes concernant les applications</ul>
              <h6>Développer la présence en ligne de l’organisation</h6>
              <ul>
                • Participer à l’évolution d’un site Web exploitant les données
                de l’organisation
              </ul>
              <ul>• Traiter des demandes concernant les applications</ul>
              <h6>Travailler en mode projet</h6>
              <ul>
                • Analyser les objectifs et les modalités d’organisation d’un
                projet
              </ul>
              <ul>• Planifier les activités</ul>
              <ul>
                • Évaluer les indicateurs de suivi d’un projet et analyser les
                écarts
              </ul>
              <h6>
                {" "}
                Mettre à disposition des utilisateurs un service informatique
              </h6>
              <ul>
                • Réaliser les tests d’intégration et d’acceptation d’un service
              </ul>
              <ul>• Déployer un service</ul>
              <ul>
                {" "}
                • Accompagner les utilisateurs dans la mise en place d’un
                service
              </ul>
            </div>
            <div>
              <h4>Bloc 2 : Conception et développement d'une application </h4>
              <h6>Concevoir et développer une application</h6>
              <ul>• Analyser un besoin exprimé et son contexte juridique</ul>
              <ul>
                • Participer à la conception de l’architecture d’une solution
                applicative
              </ul>
              <ul>• Modéliser une solution applicative </ul>
              <ul>
                • Identifier, développer, utiliser ou adapter des composants
                logiciels
              </ul>
              <ul>
                • Exploiter les ressources du cadre applicatif (framework){" "}
              </ul>
              <ul>• Utiliser des composants d’accès aux données</ul>
              <ul>
                • Réaliser les tests nécessaires à la validation ou à la mise en
                production d’éléments adaptés ou développés
              </ul>
              <h6> Gérer des données</h6>
              <ul>• Exploiter des données à l’aide d’un langage de requêtes</ul>
              <ul>
                • Développer des fonctionnalités applicatives au sein d’un
                système de gestion de base de données (relationnel ou non)
              </ul>
              <ul>• Concevoir ou adapter une base de données</ul>
            </div>

            <h3>Documents et ressources du projet</h3>
            <div className="flex overflow-auto mb-2">
              <div className="m-0 flex flex-col justify-start items-center mt-0">
                <PDFPreview
                  url="/photo/contexteMediatek.pdf"
                  downloadable={true}
                  downloadText={"Télécharger le contexte détaillé"}
                />
              </div>
              <div className="m-0 flex flex-col justify-start items-center mt-0">
                <PDFPreview
                  url="/photo/contratDevAP3.pdf"
                  downloadable={true}
                  downloadText={"Télécharger le contrat de développeur"}
                />
              </div>
              <div className="m-0 flex flex-1 flex-col justify-start items-center mt-0">
                <PDFPreview
                  url="/photo/pvRecette.pdf"
                  downloadable={true}
                  downloadText={"Télécharger le PV de recette"}
                />
              </div>
              <div className="m-0 flex flex-1 flex-col justify-start items-center mt-0">
                <PDFPreview
                  url="/photo/planDeTests.pdf"
                  downloadable={true}
                  downloadText={"Télécharger le plan de test"}
                />
              </div>
            </div>

            <div className="flex justify-center align-center">
              <Link
                href="https://index.html"
                download
                className="text-purple-600 hover:text-purple-400 mr-4"
              >
                Documentation
              </Link>
              <Link
                href="http://mediatek-document.rf.gd"
                target="blank"
                className="text-purple-600 hover:text-purple-400 mr-4"
              >
                Accès à l'api en ligne
              </Link>
              <Link
                href="/photo/AP3.pdf"
                download
                className="text-purple-600 hover:text-purple-400 mr-4"
              >
                Accès à la fiche descriptive de l'atelier
              </Link>
            </div>
          </div>
          <div className="about-me">
            <div className="Source"></div>
          </div>
        </div>
      </ProjectPage>
    </>
  );
}
