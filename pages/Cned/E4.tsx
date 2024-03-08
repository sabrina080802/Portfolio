import Link from "next/link";
import Stage from "@/components/stage";

export default function E4() {
  return (
    <>
      <h2 className="title">Epreuve E4</h2>
      <h3>Les stages </h3>
      <Stage
        stage="Stage de 1ère année"
        description={
          "Alsace Digitale est une association ayant pour ambition d’animer et de promouvoir la révolution numérique en Alsace. C’est une association qui vise à faciliter l'émergence de projets innovants dans le domaine de l'économie numérique dans la région Alsace. Elle tend à favoriser le coworking des indépendants, entrepreneurs, plateformes artistiques, lieux alternatifs, pôles de compétitivité, structures de soutien à l'innovation, laboratoires de recherche spécialisés, écoles et universités.Dans le cadre de ce stage j'ai du réaliser le site web de l'association"
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
        link={"/photo/RapportDeStage2.pdf"}
        descriptionlink="Télécharger le compte rendue 2ème année"
        name="Numérize"
      />
      <div className="mt-24 flex flex-col gap-7 justify-start">
        <h4>Les compétences validées</h4>
        <p className="">compétences</p>
        <h4>Bloc 1 : Services informatiques aux organisations</h4>
        <h5> Gérer le patrimoine informatique</h5>
        <li>
          <ul>
            • Exploiter des référentiels, normes et standards adoptés par le
            prestataire informatique.
          </ul>
          <ul>
            • Vérifier les conditions de la continuité d’un service informatique
            • Gérer des sauvegardes{" "}
          </ul>
        </li>
        <h5>Développer la présence en ligne de l’organisation</h5>
        <li>
          <ul>
            Participer à la valorisation de l’image de l’organisation sur les
            médias numériques en tenant compte du cadre juridique et des enjeux
            économiques
          </ul>
          <ul>
            Participer à l’évolution d’un site Web exploitant les données de
            l’organisation
          </ul>
        </li>
        <p>
          Travailler en mode projet Analyser les objectifs et les modalités
          d’organisation d’un projet Planifier les activités Évaluer les
          indicateurs de suivi d’un projet et analyser les écarts Bloc 2 :
          Conception et développement d'une application Concevoir et développer
          une application Analyser un besoin exprimé et son contexte juridique
          Participer à la conception de l’architecture d’une solution
          applicative Modéliser une solution applicative Identifier, développer,
          utiliser ou adapter des composants logiciels Exploiter les ressources
          du cadre applicatif (framework) Utiliser des composants d’accès aux
          données Réaliser les tests nécessaires à la validation ou à la mise en
          production d’éléments adaptés ou développés Gérer des données
          Exploiter des données à l’aide d’un langage de requêtes Développer des
          fonctionnalités applicatives au sein d’un système de gestion de base
          de données (relationnel ou non) Concevoir ou adapter une base de
          données
        </p>
      </div>

      <div className="mt-24 flex flex-col gap-7 justify-start">
        <h3>Tableau de Compétences</h3>
        <div>
          <Link href="/photo/Competence.pdf" download className="btn">
            Télécharger le tableau de compétences{" "}
          </Link>
        </div>
      </div>

      <div className="mt-24">
        <h3>Ma vidéo de présentation</h3>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zR_iStEf6J0?si=jJqhOhp7aPcEaNh6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
}
