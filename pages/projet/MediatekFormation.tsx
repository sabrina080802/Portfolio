import Link from "next/link";
import Image from "next/image";
import ProjectPage from "@/components/project-page";
import PDFPreview from "@/components/pdf-preview";

export default function MediatekFormation() {
  return (
    <>
      <ProjectPage
        project={{
          image: "/photo/MediatekFormation.png",
          name: "MediatekFormation",
          tags: ["PHP", "CSS", "CNED", "TWIG"],
        }}
      >
        <div className="article-container">
          <div className="flex">
            <div className="mr-8 flex-1">
              <div className="flex flex-col gap-4">
                <h4>Application Web • Déc - Fév 2023</h4>
              </div>

              <Link
                href="https://github.com/sabrina080802/cnedProjet1"
                className="text-purple-600 hover:text-purple-400 mr-4"
                target="blank"
              >
                Github
              </Link>
              <Link
                href="/photo/cahier_des_charges.pdf"
                download
                className="text-purple-600 hover:text-purple-400 mr-4"
              >
                Cahier des charges
              </Link>
              <Link
                href="/photo/dossierDoc.pdf"
                download
                className="text-purple-600 hover:text-purple-400 mr-4"
              >
                Dossier documentaire
              </Link>
              <p className="text-justify">
                Pour mon projet de BTS, j'ai développé une application web
                nommée MediaTek86. Cette plateforme innovante représente un
                réseau de médiathèques dans la Vienne, offrant un accès à une
                vaste collection de documents et à divers services numériques
                via un portail web intuitif. MediaTek86 est dédié à enrichir
                l'expérience des utilisateurs en intégrant la vidéo à la demande
                (VOD) et des programmes de formation sur les outils numériques.
                L'application assure également la gestion technique des
                médiathèques à travers une équipe spécialisée et le soutien de
                partenaires stratégiques, visant ainsi à optimiser l'accès et
                l'utilité des ressources proposées.
              </p>
            </div>
            <div className="flex flex-05 flex-col justify-start items-center mt-0">
              <h3 className="text-left">Langage et outils utilisés</h3>
              <p className="w-full m-0">Langages : PHP/TWIG/CSS</p>
              <p className="w-full m-0">Serveur : Xampp</p>
              <p className="w-full m-0">Framework : Symfony</p>
              <p className="w-full m-0">Authentification : Keycloak</p>
            </div>
          </div>
          <div className="flex flex-05 flex-col justify-start">
            <h3>Mission : </h3>
            <p className="text-justify">
              Un développeur avait précédemment élaboré une application destinée
              à présenter le site "mediatek formation", lequel offre diverses
              formations à ses membres. Cependant, le chef de projet a identifié
              plusieurs écarts par rapport aux standards de qualité de codage
              attendus. De plus, il a remarqué l'absence d'une fonctionnalité
              spécifiée dans le cahier des charges. Ma première tâche consistait
              à rectifier ces défauts. Par la suite, d'autres responsabilités
              m'ont été attribuées, notamment le développement du "back-office".
              Ces missions supplémentaires visaient à peaufiner et déployer le
              site web.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3>Ma vidéo de présentation</h3>
            <iframe
              className="rounded-xl overflow-hidden"
              width="600"
              height="337"
              src="https://www.youtube.com/embed/OchD7-gEDRg?si=_9mqAEll_EBRj2Ai"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className="mt-24 flex flex-col gap-7 justify-start">
            <h3>Compétences visées</h3>
            <div>
              <h4>Bloc 1 : Services informatiques aux organisations</h4>
              <h6> Gérer le patrimoine informatique</h6>
              <ul>
                • Exploiter des référentiels, normes et standards adoptés par le
                prestataire informatique.
              </ul>
              <ul>
                • Vérifier les conditions de la continuité d’un service
                informatique
              </ul>
              <ul>• Gérer des sauvegardes </ul>
              <h6>
                {" "}
                Répondre aux incidents et aux demandes d’assistance et
                d’évolution
              </h6>
              <ul>• Collecter, suivre et orienter des demandes</ul>
              <ul>
                {" "}
                • Traiter des demandes concernant les services réseau et
                système, applicatifs
              </ul>
              <ul>• Traiter des demandes concernant les applications</ul>
              <h6>Développer la présence en ligne de l’organisation</h6>
              <ul>
                • Participer à la valorisation de l’image de l’organisation sur
                les médias numériques en tenant compte du cadre juridique et des
                enjeux économiques
              </ul>
              <ul>
                • Participer à l’évolution d’un site Web exploitant les données
                de l’organisation
              </ul>
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
                  url="/photo/context.pdf"
                  downloadable={true}
                  downloadText={"Télécharger le contexte détaillé"}
                />
              </div>
              <div className="m-0 flex flex-1 flex-col justify-start items-center mt-0">
                <PDFPreview
                  url="/photo/contratDev.pdf"
                  downloadable={true}
                  downloadText={"Télécharger le contrat de développement"}
                />
              </div>
              <div className="m-0 flex flex-1 flex-col justify-start items-center mt-0">
                <PDFPreview
                  url="/photo/RapportAP1.pdf"
                  downloadable={true}
                  downloadText={"Télécharger le compte-rendu d'activité"}
                />
              </div>
              <div className="m-0 flex flex-1 flex-col justify-start items-center mt-0">
                <PDFPreview
                  url="/photo/pv_recette.pdf"
                  downloadable={true}
                  downloadText={"Télécharger le PV de recette"}
                />
              </div>
              <div className="m-0 flex flex-1 flex-col justify-start items-center mt-0">
                <PDFPreview
                  url="/photo/plan_de_tests.pdf"
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
                href="http://mediatekformation.great-site.net"
                target="blank"
                className="text-purple-600 hover:text-purple-400 mr-4"
              >
                Accès à l'application en ligne
              </Link>
              <Link
                href="/photo/Annexe.pdf"
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
