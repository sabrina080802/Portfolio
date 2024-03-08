import Link from "next/link";
import Image from "next/image";

export default function MediatekFormation() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>MediatekFormation</h2>
          <h4>Application Web • Déc - Fév 2023</h4>
        </div>

        <Link
          href="https://github.com/sabrina080802/cnedProjet1"
          className="text-purple-600 hover:text-purple-400"
          target="blank"
        >
          Github
        </Link>
        <Link
          href="/photo/cahier_des_charges.pdf"
          download
          className="text-purple-600 hover:text-purple-400"
        >
          Cahier des charges
        </Link>
        <Link
          href="/photo/dossierDoc.pdf"
          download
          className="text-purple-600 hover:text-purple-400"
        >
          Dossier documentaire
        </Link>
      </div>

      <p>
        Pour mon projet de BTS, j'ai développé une application web nommée
        MediaTek86. Cette plateforme innovante représente un réseau de
        médiathèques dans la Vienne, offrant un accès à une vaste collection de
        documents et à divers services numériques via un portail web intuitif.
        MediaTek86 est dédié à enrichir l'expérience des utilisateurs en
        intégrant la vidéo à la demande (VOD) et des programmes de formation sur
        les outils numériques. L'application assure également la gestion
        technique des médiathèques à travers une équipe spécialisée et le
        soutien de partenaires stratégiques, visant ainsi à optimiser l'accès et
        l'utilité des ressources proposées.
      </p>
      <p>Ici mettre un relier au cned</p>
      <h3>Ma vidéo de présentation</h3>
      <div className="flex-1">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OchD7-gEDRg?si=_9mqAEll_EBRj2Ai"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div>
        <h3>Contexte</h3>
        <Link href="/photo/context.pdf" download className="btn">
          Télécharger le contexte détaillé{" "}
        </Link>
      </div>
      <div>
        <h3>Mission</h3>
        <Link href="/photo/contratDev.pdf" download className="btn">
          Télécharger le contrat de développement{" "}
        </Link>
      </div>
      <div>
        <h3>Langage et outils utilisés</h3>
        <ul>
          <li>Langages : PHP/TWIG/CSS</li>
          <li>Serveur : Xampp</li>
          <li>Framework : Symfony</li>
          <li>Authentification : Keycloak</li>
        </ul>
      </div>

      <div className="mt-24 flex flex-col gap-7 justify-start">
        <Link href="/photo/pv_recette.pdf" download className="btn">
          Pv de recette
        </Link>
        <Link href="/photo/plan_de_tests.pdf" download className="btn">
          Plan de Test
        </Link>
        <Link href="https://index.html" download className="btn">
          Documentation
        </Link>
        <Link href="" download className="btn">
          Accès à la BDD
        </Link>
        <Link href="" download className="btn">
          Accès à l'application en ligne
        </Link>
        <Link href="" download className="btn">
          Accès à la fiche descriptive de l'atelier
        </Link>
      </div>
      <div className="mt-24 mb-12 flex justify-center items-center">
        <Image
          src="/photo/MediatekFormation.png"
          width={300}
          height={300}
          alt="image"
          className="w-72 h-72 rounded-xl"
        />
      </div>
      <div className="justify-centerr ">
        <Link href="/photo/RapportApp.pdf" download className="btn">
          Télécharger le compte-rendu d'activité{" "}
        </Link>
      </div>
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
        <h6>Travailler en mode projet</h6>
        <ul>
          • Analyser les objectifs et les modalités d’organisation d’un projet
        </ul>
        <ul>• Planifier les activités</ul>
        <ul>
          • Évaluer les indicateurs de suivi d’un projet et analyser les écarts
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
          • Identifier, développer, utiliser ou adapter des composants logiciels
        </ul>
        <ul>• Exploiter les ressources du cadre applicatif (framework) </ul>
        <ul>• Utiliser des composants d’accès aux données</ul>
        <ul>
          • Réaliser les tests nécessaires à la validation ou à la mise en
          production d’éléments adaptés ou développés
        </ul>
        <h6> Gérer des données</h6>
        <ul>• Exploiter des données à l’aide d’un langage de requêtes</ul>
        <ul>
          • Développer des fonctionnalités applicatives au sein d’un système de
          gestion de base de données (relationnel ou non)
        </ul>
        <ul>• Concevoir ou adapter une base de données</ul>
      </div>
      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
