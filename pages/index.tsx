import Link from "next/link";
import Identity from "@/components/identity";
import Project from "@/components/project";
import "@/pages/styles/globals.css";

export default function Home() {
  return (
    <section className="border">
      <Identity />

      <div className="about-me flex flex-col gap-10">
        <article>
          <h2>Bonjour !</h2>
          <p>
            Ce portfolio incarne un voyage de 4 ans en informatique, marqué par
            la persévérance et enrichi de créativité ainsi que la passion.{" "}
          </p>
          <p>
            À chaque projet, un nouveau défi à surmonter, une nouvelle histoire
            à écrire
          </p>
          <div className="flex gap-2 flex-wrap">
            <Link className="btn" href={"/contact-me"}>
              Me contacter →{" "}
            </Link>
            <Link className="btn-type-1" href={"/projets"}>
              Découvrir mes projets
            </Link>
          </div>
        </article>

        <article>
          <h3>Mes expériences</h3>
          <p>
            Découvrez mon parcours, où chaque expérience scolaire et
            professionnelle m'ont forger ma passion pour l'informatique.
          </p>
          <div className="section-container">
            <div className="icon-container">
              <img src={"/photo/cned.png"} alt={"Cned"} />
            </div>

            <div className="section-container-name">
              <h5>BTS SIO</h5>
              <span>L'école du BTS, Strasbourg</span>
            </div>
            <div className="date">2022-2024</div>
          </div>

          <div className="mt-8">
            <Link className="btn-type-1" href={"/experiences"}>
              Découvrir la suite →
            </Link>
          </div>
        </article>

        <article>
          <h3>Mes projets préférés</h3>
          <p>
            Voici un projet qui me tient à cœur. N'hésitez pas à découvrir aussi
            mes autres travaux.
          </p>
          <Project
            name="Le jeu"
            tags={[
              "PHP",
              "C#",
              "JavaScript",
              "HTML",
              "Projet personnel",
              "CSS",
            ]}
            description="Site web qui permet de réunir les fans de jeu video afin de se lancer des tournois ensemble"
            image="/photo/LeJeu.webp"
            pageLink="/PageProjet/Lejeu"
          />
          <div className="mt-8">
            <Link className="btn-type-1" href={"/projets"}>
              Découvrir la suite →
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
