import RootLayout from "./../layout";
import Image from "next/image";

export default function VeilleTechnologique() {
  return (
    <>
      <RootLayout>
        <h2 className="title">Veille Technologie</h2>
        <section className="border">
          <div className="identity daily">
            <Image
              src="/photo/DailyDev.jpeg"
              width={300}
              height={300}
              alt="image"
              className="daily-img"
            />
            <h3>Daily.dev</h3>
            <p>
              {" "}
              Pour mon projet de formation en informatique, j'ai choisi de me
              concentrer sur Daily.dev comme sujet principal de veille
              technologique. Daily.dev est une plateforme de veille
              technologique qui agrège les derniers articles, nouvelles et
              tutoriels du développement web et de la programmation. En tant
              qu'étudiante en informatique, je trouve que Daily.dev est un outil
              qui représente parfaitement le moyen de rester à jour avec les
              dernières avancées technologiques et des failles de sécurité.
            </p>
          </div>
        </section>
        <h3>Article</h3>
        <p>
          L'article présente un guide complet sur les outils et bibliothèques
          incontournables pour développer des applications React en 2024. Etant
          moi même fan de React et l’utilisant pour mes projets personnels ou
          professionnels c’est une obligation de me tenir informer constamment.
          Pour commencer, il nous recommande d'utiliser Vite pour les projets
          rendus côté client, en nous disant que Next.js est idéal pour les
          applications serveur ou full-stack. Remix et Astro sont aussi
          mentionnés comme alternatives selon les besoins spécifiques du projet.
        </p>
        <br />
        <p>
          Pour la gestion des packages, NPM est suggéré, avec Bun comme une
          option émergente pour sa rapidité. En termes de style, Tailwind CSS
          est favorisé pour son approche utilitaire, avec d'autres bibliothèques
          comme Material UI, Mantine, et Chakra UI pour l'intégration de
          composants UI.
        </p>
        <br />
        <p>
          Pour la gestion d'État, l'article recommande Zustand, Recoil, et
          Jotai. Tanstack Query (anciennement React Query) et SWR sont suggérés
          pour la récupération de données. On nous explique que React Router et
          Tant Stack Router sont les choix pour le routage, et que Supa Base est
          mis en avant pour l'authentification.
        </p>
        <br />
        <p>
          Pour interagir avec les bases de données, Supa Base, Firebase, Prisma,
          et Drizzle sont mentionnés. date-fns et day.js sont recommandés pour
          la manipulation des dates. Pour la gestion de formulaires, React Hook
          Form est conseillé. DnD Kit est suggéré pour les fonctionnalités de
          glisser-déposer.
        </p>
        <br />
        <p>
          Enfin, pour le développement mobile, React Native et Expo sont
          conseillés, et pour le déploiement, Vercel et Netlify sont
          recommandés. L'article offre ainsi une vue d'ensemble des outils
          modernes pour le développement React, adaptés aux exigences actuelles
          en matière de développement web et mobile.
        </p>
        <br />
        <p>
          Et pour le déploiement de l’application ou du site, on met en avant
          l'accessibilité des plateformes comme Vercel et netfly pour une
          solution simple et efficace.
        </p>
        <div className="about-me">
          <div className="Source">
            <p>
              L'article :
              https://www.freecodecamp.org/news/react-libraries-to-use-in-your-projects/?ref=dailydev{" "}
            </p>
          </div>
        </div>
      </RootLayout>
    </>
  );
}
