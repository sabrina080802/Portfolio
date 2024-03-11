import Link from "next/link";
import Experience from "@/components/experience";
import Image from "next/image";

export default function Experiences() {
  return (
    <>
      <section className="w-[700px]">
        <div className="flex flex-col align-center items-center text-center w-full">
          <h3>Mes expériences</h3>
          <p className="max-w-prose">
            Découvrez mon parcours, où chaque expérience scolaire et
            professionnelle m'ont forger ma passion pour l'informatique.
          </p>
        </div>

        <Experience
          name={"BTS SIO"}
          lines={[
            {
              name: "Mon portfolio",
              link: "/projet/Sabrina",
              description:
                "Durant mon BTS SIO, j'ai significativement élargi mes compétences en développement, notamment à travers des projets concrets qui m'ont permis de me familiariser avec de nouveaux langages et de renforcer mes compétences pour le développement backend. Un de mes projets phares a été la création de mon propre portfolio, une expérience enrichissante qui m'a permis de consolider mes compétences en design et en programmation front-end. ",
            },
            {
              name: "Mediatek Formation",
              link: "/projet/MediatekFormation",
              description:
                "Par ailleurs, j'ai également travaillé sur un projet ambitieux en PHP en utilisant le framework Symfony, ce qui m'a confronté au challenge de développer une application complexe tout en maîtrisant les nuances du langage. Le déploiement de ce projet m'a offert une compréhension pratique des environnements de production et des processus de mise en ligne. Cette formation m'a ainsi permis d'acquérir une maîtrise approfondie de nouveaux langages de programmation et de confirmer mon intérêt et mes compétences en backend, me préparant efficacement pour une carrière dans le développement de logiciels.",
            },
          ]}
          startYear="2022"
          endYear="2024"
        />
        <Experience
          name={"BUT INFORMATIQUE"}
          lines={[
            {
              name: "Espard",
              link: "/projet/Espard",
              description:
                "Dans le cadre de mon parcours en BUT Informatique j'ai énormément progressé tant dans la compréhension théorique que dans la pratique de l'informatique. J'ai appris à collaborer efficacement en équipe grâce aux SAE, des projets d'envergure qui simulent de véritables défis professionnels. Ces expériences m'ont permis de me familiariser avec le travail d'équipe et la gestion de projet, des compétences fondamentales dans le domaine du développement logiciel.",
            },
            {
              name: "PoliCloud",
              link: "/projet/Policloud",
              description:
                "Ma formation m'a équipée d'une solide connaissance en programmation orientée objet, notamment en C# et en Java, ce qui me permet de développer des applications structurées et performantes. En outre, les enseignements en réseau, comptabilité et droit m'ont donné une perspective plus large sur le monde informatique et son contexte entrepreneurial. Sans oublier l'anglais, qui est indispensable pour évoluer dans un contexte international; je me sens désormais à l'aise de communiquer et de travailler dans cette langue universelle du secteur.",
            },
            {
              name: "Debian",
              link: "/projet/Debian",
              description:
                "Durant ma formation en réseau, j'ai appris à gérer les adresses IP de diffusion en C, créé ma propre VM et étudié le comportement des trames de broadcast. Cette expérience m'a offert une compréhension concrète de la communication dans les réseaux.",
            },
          ]}
          startYear="2021"
          endYear="2022"
        />
        <Experience
          name={"DUT INFORMATIQUE"}
          lines={[
            {
              name: "ProPotes",
              link: "/projet/ProbPotes",
              description:
                "Au cours de ma formation en informatique, j'ai acquis des compétences avancées en mathématiques et en informatique, en me concentrant sur la programmation, tant sur le plan théorique que pratique. J'ai aussi développé des compétences en programmation orientée objet, en conception d'interfaces utilisateur, et en architecture logicielle, en utilisant des outils tels que les patrons de conception et la modélisation UML. J'ai renforcé ma compréhension de l'architecture des systèmes informatiques et de la programmation système, et j'ai appris les principes de la programmation web et des bases de données. La conception de réseaux et la programmation de services réseau ont également été une partie importante de mon apprentissage. En plus des compétences techniques, j'ai étudié les mathématiques appliquées, notamment la théorie des graphes et l'analyse numérique, et des disciplines complémentaires telles que la communication, l'économie, le droit et la comptabilité, essentielles pour une approche holistique de la gestion de projet et de la production de logiciels. Enfin, l'anglais a renforcé mon profil international dans le domaine de l'informatique.",
            },
          ]}
          startYear="2020"
          endYear="2021"
        />
        <Experience
          name={"TERMINALE ES spécialité Mathématiques"}
          lines={[
            {
              name: "",
              link: "",
              description:
                "Concepts avancés de mathématiques appliqués à l'économie et à la société, fournissant une base solide en analyse, probabilités et statistiques, essentielle pour développer des compétences analytiques et de résolution de problèmes en ingénierie informatique. ",
            },
          ]}
          startYear="2020"
          endYear="2019"
        />

        <div className="mt-24 flex flex-col items-center justify-start w-full">
          <Link href="/photo/CV.pdf" download className="btn">
            Télécharger mon CV
          </Link>
        </div>
      </section>
    </>
  );
}
