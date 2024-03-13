import Link from "next/link";
import Experience from "@/components/experience";
import Image from "next/image";

export default function Experiences() {
  return (
    <>
      <section className="w-[700px]">
        <div className="flex flex-col align-center items-center text-center m-auto">
          <h3>Mes expériences</h3>
          <p className="max-w-prose">
            Découvrez mon parcours, où chaque expérience scolaire et
            professionnelle ont forgé ma passion pour l'informatique.
          </p>
        </div>

        <Experience
          name={"BTS SIO"}
          lines={[
            {
              links: [],
              description:
                "Durant mon BTS SIO, j'ai significativement élargi mes compétences en développement, notamment à travers des projets concrets qui m'ont permis de me familiariser avec de nouveaux langages et de renforcer mes compétences pour le développement backend. Un de mes projets phares a été la création de mon propre portfolio, une expérience enrichissante qui m'a permis de consolider mes compétences en design et en programmation front-end. ",
            },
            {
              links: [
                {
                  name: "Mon portfolio",
                  link: "/projet/Sabrina",
                },
                {
                  name: "Mediatek Formation",
                  link: "/projet/MediatekFormation",
                },
              ],
              description:
                "Par ailleurs, j'ai également travaillé sur un projet ambitieux en PHP en utilisant le framework Symfony, ce qui m'a confronté au challenge de développer une application complexe tout en maîtrisant les nuances du langage. Le déploiement de ce projet m'a offert une compréhension pratique des environnements de production et des processus de mise en ligne. Cette formation m'a ainsi permis d'acquérir une maîtrise approfondie de nouveaux langages de programmation et de confirmer mon intérêt et mes compétences en backend, me préparant efficacement pour une carrière dans le développement de logiciels.",
            },
          ]}
          startYear="2022"
          endYear="2024"
        />

        <Experience
          name={"Stage chez Numérize"}
          lines={[
            {
              links: [],
              description:
                "Depuis sa fondation en 2008, la société s'est imposée comme un leader dans les domaines de la numérisation de documents et de l'archivage électronique. Mon immersion en tant que stagiaire dans cette entreprise innovante m'a permis de prendre part à des projets cruciaux, notamment le développement et l'optimisation d'une Gestion Électronique de Documents (GED). Au sein d'une équipe dynamique et avant-gardiste, j'ai eu l'opportunité d'exploiter et d'élargir mes compétences techniques en me consacrant aussi bien au développement backend qu'au développement frontend.",
            },
            {
              links: [],
              description:
                "Cette expérience m'a permis de me perfectionner dans l'utilisation de technologies de pointe telles que React pour le frontend, ainsi que PHP pour le backend, en plus de maîtriser des outils essentiels comme Docker et AWS pour la conteneurisation et le déploiement cloud. Ma contribution a été significative dans la réalisation et la performance de la GED, impliquant une immersion profonde dans le HTML et le CSS pour assurer une interface utilisateur intuitive et réactive. Mon engagement dans ce projet m'a non seulement permis de renforcer mes compétences en développement web, mais aussi de comprendre l'importance de la synergie entre les différentes technologies pour mener à bien des projets d'envergure. ",
            },
            {
              links: [
                {
                  name: "Voir rapport de stage",
                  link: "/Cned/E4",
                },
              ],
              description:
                "Cette expérience a été une véritable aventure professionnelle, me permettant de contribuer activement à la digitalisation et à l'efficacité des processus d'archivage, tout en naviguant à travers un environnement technologique riche et varié.",
            },
          ]}
          startYear="15/01/2024"
          endYear="11/04/2024"
        />
        <Experience
          name={"Stage chez Alsace Digitale"}
          lines={[
            {
              links: [
                {
                  name: "Voir rapport de stage",
                  link: "/Cned/E4",
                },
              ],
              description:
                "Association ayant pour ambition d’animer et de promouvoir la révolution numérique en Alsace. C’est une association qui vise à faciliter l'émergence de projets innovants dans le domaine de l'économie numérique dans la région Alsace. Ma participation en tant que stagiaire a été axée sur la création du site web de l'organisation, une expérience enrichissante qui m'a permis de peaufiner mes compétences en HTML/CSS ainsi qu'en SQL. Ce stage a été une opportunité précieuse d'appliquer mes connaissances théoriques dans un contexte professionnel, contribuant ainsi à l'épanouissement de ma passion pour le développement web et l'innovation numérique.",
            },
          ]}
          startYear="01/02/2023"
          endYear="28/02/2023"
        />
        <Experience
          name={"BUT INFORMATIQUE"}
          lines={[
            {
              links: [],
              description:
                "Dans le cadre de mon parcours en BUT Informatique j'ai énormément progressé tant dans la compréhension théorique que dans la pratique de l'informatique. J'ai appris à collaborer efficacement en équipe grâce aux SAE, des projets d'envergure qui simulent de véritables défis professionnels. Ces expériences m'ont permis de me familiariser avec le travail d'équipe et la gestion de projet, des compétences fondamentales dans le domaine du développement logiciel.",
            },
            {
              links: [],
              description:
                "Ma formation m'a équipée d'une solide connaissance en programmation orientée objet, notamment en C# et en Java, ce qui me permet de développer des applications structurées et performantes. En outre, les enseignements en réseau, comptabilité et droit m'ont donné une perspective plus large sur le monde informatique et son contexte entrepreneurial. Sans oublier l'anglais, qui est indispensable pour évoluer dans un contexte international; je me sens désormais à l'aise de communiquer et de travailler dans cette langue universelle du secteur.",
            },
            {
              links: [
                {
                  name: "Espard",
                  link: "/projet/Espard",
                },
                {
                  name: "PoliCloud",
                  link: "/projet/Policloud",
                },
                {
                  name: "Debian",
                  link: "/projet/Debian",
                },
              ],
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
              links: [
                {
                  name: "ProPotes",
                  link: "/projet/ProbPotes",
                },
              ],
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
              links: [],
              description:
                "Concepts avancés de mathématiques appliqués à l'économie et à la société, fournissant une base solide en analyse, probabilités et statistiques, essentielle pour développer des compétences analytiques et de résolution de problèmes en ingénierie informatique. ",
            },
          ]}
          startYear="2020"
          endYear="2019"
        />

        <div className="mt-24 mb-24 flex items-center justify-center w-full">
          <div className="img-dl-container">
            <Image src="/photo/sabrina.jpeg" alt="" width={100} height={100} />
          </div>
          <Link href="/photo/CV.pdf" download className="btn">
            Télécharger mon CV
          </Link>
        </div>
      </section>
    </>
  );
}
