import Link from "next/link";
import Stage from "@/components/stage";

export default function E4() {
  return (
    <>
      <div className="article-container">
        <h2 className="title">Epreuve E4</h2>
        <h3>Les stages </h3>
        <Stage
          stage="Stage de 1ère année"
          description={
            "Association ayant pour ambition d’animer et de promouvoir la révolution numérique en Alsace. C’est une association qui vise à faciliter l'émergence de projets innovants dans le domaine de l'économie numérique dans la région Alsace. Dans le cadre de ce stage j'ai du réaliser le site web de l'association"
          }
          image={"/photo/AlsaceDigitale.jpeg"}
          name="Alsace Digitale"
          link={"/photo/RapportDeStage1.pdf"}
          descriptionlink="Télécharger le compte rendue 1ère année"
        />
        <Stage
          stage="Stage de 2ème année"
          description={
            "Société de numérisation de documents et d’archivage électronique depuis 2008. Dans le cadre de ce stage j'ai du réaliser et performer une GED."
          }
          image={"/photo/Numerize.png"}
          link={"/photo/RapportStage2.pdf"}
          descriptionlink="Télécharger le compte rendue 2ème année"
          name="Numérize"
        />

        <div className="mt-24 flex flex-col gap-7 justify-start">
          <h3>Compétences visées : </h3>
          <h5>Bloc 1 : Services informatiques aux organisations</h5>
          <h6> Gérer le patrimoine informatique</h6>
          <ul>
            • Exploiter des référentiels, normes et standards adoptés par le
            prestataire informatique.
          </ul>
          <ul>
            • Vérifier les conditions de la continuité d’un service informatique
          </ul>
          <ul>• Gérer des sauvegardes </ul>
          <h6>Développer la présence en ligne de l’organisation</h6>
          <ul>
            • Participer à la valorisation de l’image de l’organisation sur les
            médias numériques en tenant compte du cadre juridique et des enjeux
            économiques
          </ul>
          <ul>
            • Participer à l’évolution d’un site Web exploitant les données de
            l’organisation
          </ul>
          <h6>
            Répondre aux incidents et aux demandes d’assistance et d’évolution
          </h6>
          <ul>• Collecter, suivre et orienter des demandes</ul>
          <ul>• Traiter des demandes concernant les applications</ul>
          <h6>Travailler en mode projet</h6>
          <ul>
            • Analyser les objectifs et les modalités d’organisation d’un projet
          </ul>
          <ul>• Planifier les activités</ul>
          <ul>
            • Évaluer les indicateurs de suivi d’un projet et analyser les
            écarts
          </ul>
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
          <ul>• Exploiter les ressources du cadre applicatif (framework) </ul>
          <ul>• Utiliser des composants d’accès aux données</ul>
          <ul>
            • Réaliser les tests nécessaires à la validation ou à la mise en
            production d’éléments adaptés ou développés
          </ul>
          <h6>
            Assurer la maintenance corrective ou évolutive d’une solution
            applicative
          </h6>
          <ul>
            • Recueillir, analyser et mettre à jour les informations sur une
            version d’une solution applicative
          </ul>
          <ul>• Évaluer la qualité d’une solution applicative</ul>
          <ul>• Analyser et corriger un dysfonctionnement</ul>
          <ul>
            • Mettre à jour des documentations technique et d’utilisation d’une
            solution applicative
          </ul>
          <h6> Gérer des données</h6>
          <ul>• Exploiter des données à l’aide d’un langage de requêtes</ul>
          <ul>
            • Développer des fonctionnalités applicatives au sein d’un système
            de gestion de base de données (relationnel ou non)
          </ul>
          <ul>• Concevoir ou adapter une base de données</ul>
        </div>

        <div className="mt-24 flex flex-col gap-7 justify-start">
          <h3>Tableau de Compétences</h3>
          <div>
            <Link href="/photo/Competence.pdf" download className="btn">
              Télécharger le tableau de compétences{" "}
            </Link>
          </div>
        </div>

        {/* <div className="mt-24">
          <h3>Ma vidéo de présentation</h3>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zR_iStEf6J0?si=jJqhOhp7aPcEaNh6"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div> */}
      </div>
    </>
  );
}
