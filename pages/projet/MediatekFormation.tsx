import Link from "next/link";
import Image from "next/image";

export default function MediatekFormation() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>MediatekFormation</h2>
          <h4>Nov.2023</h4>
          <Link
            href=""
            className="text-purple-600 hover:text-purple-400"
            target="blank"
          >
            Github
          </Link>
          <div>
            <h3>Contexte</h3>
            <div>
              <Link href="/photo/context.pdf" download className="btn">
                Télécharger le contexte détaillé{" "}
              </Link>
            </div>
            <h3>Mission</h3>
            <div>
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
            <Link href="/photo/cahier_des_charges.pdf" download className="btn">
              Cahier des charges
            </Link>
            <Link href="/photo/dossierDoc.pdf" download className="btn">
              Dossier documentaire
            </Link>
            <Link href="/photo/pv_recette.pdf" download className="btn">
              Pv de recette
            </Link>
            <Link href="/photo/plan_de_tests.pdf" download className="btn">
              Plan de Test
            </Link>
            <Link
              href="https://github.com/sabrina080802/cnedProjet1"
              className="btn"
            >
              Accès Github
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
        </div>

        <Image
          src="/photo/LeJeu.webp"
          width={300}
          height={300}
          alt="image"
          className="rounded-xl"
        />
      </div>
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
      </div>
      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
