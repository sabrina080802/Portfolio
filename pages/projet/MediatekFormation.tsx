import Link from "next/link";
import Image from "next/image";

export default function MediatekFormation() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>MediatekFormation</h2>
          <h4>Application Web • Déc - Fév 2023</h4>
          <Link
            href="https://github.com/sabrina080802/cnedProjet1"
            className="text-purple-600 hover:text-purple-400"
            target="blank"
          >
            Github
          </Link>
          <Link href="/photo/cahier_des_charges.pdf" download className="btn">
            Cahier des charges
          </Link>
          <Link href="/photo/dossierDoc.pdf" download className="btn">
            Dossier documentaire
          </Link>
        </div>
        <p>
          Pour mon projet de BTS, j'ai développé une application web nommée
          MediaTek86. Cette plateforme innovante représente un réseau de
          médiathèques dans la Vienne, offrant un accès à une vaste collection
          de documents et à divers services numériques via un portail web
          intuitif. MediaTek86 est dédié à enrichir l'expérience des
          utilisateurs en intégrant la vidéo à la demande (VOD) et des
          programmes de formation sur les outils numériques. L'application
          assure également la gestion technique des médiathèques à travers une
          équipe spécialisée et le soutien de partenaires stratégiques, visant
          ainsi à optimiser l'accès et l'utilité des ressources proposées.
        </p>
        <p>Ici mettre un relier au cned</p>
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

      <Image
        src="/photo/LeJeu.webp"
        width={300}
        height={300}
        alt="image"
        className="rounded-xl"
      />
      <div className="mt-24">
        <h3>Ma vidéo de présentation</h3>
        <br />
        <Link href="" className="btn">
          Vidéo de présentation{" "}
        </Link>
      </div>
      <div>
        <Link href="/photo/RapportApp.pdf" download className="btn">
          Télécharger le compte-rendu d'activité{" "}
        </Link>
      </div>
      <div>
        <h3>Compétences visées</h3>
        <p></p>
      </div>
      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
