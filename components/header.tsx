import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header>
        <Head>
          <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <nav className="Header">
          <Link
            href={"/"}
            className={
              "disable-hover " + (router.pathname === "/" ? "active" : "")
            }
          >
            Accueil
          </Link>
          <Link
            href={"/projets"}
            className={
              "disable-hover " +
              (router.pathname === "/projets" ? "active" : "")
            }
          >
            Projets
            <div className="sub-menu">
              <Link href={"/projets/CNED"}>Projets CNED</Link>
              <Link href={"/projets/others"}>Autres Projets</Link>
            </div>
          </Link>
          <Link
            href={"/experiences"}
            className={
              "disable-hover " +
              (router.pathname === "/experiences" ? "active" : "")
            }
          >
            Expériences
            <div className="sub-menu">
              <Link href={"/experiences/CV"}>CV</Link>
              <Link href={"/experiences/Stages"}>Stages</Link>
            </div>
          </Link>
          <Link
            href={"/Cned"}
            className={
              "disable-hover " + (router.pathname === "/Cned" ? "active" : "")
            }
          >
            Cned
            <div className="sub-menu">
              <Link href={"/Cned/E4"}>Épreuve E4</Link>
              <Link href={"/Cned/VeilleTechnologique"}>
                Veille Technologique
              </Link>
              <Link href={"/Cned/Tableau"}>Compétences</Link>
            </div>
          </Link>
        </nav>
        <Link
          href={"/contact-me"}
          className={
            router.pathname === "/contact-me" ? "contact-active" : "go-contact"
          }
        >
          Me contacter
        </Link>
      </header>
    </>
  );
}
