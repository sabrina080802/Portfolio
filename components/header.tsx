import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header>
        <div className="inner-container">
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
            </Link>
            <Link
              href={"/Cned/E4"}
              className={
                "disable-hover " +
                (router.pathname === "/Cned/E4" ? "active" : "")
              }
            >
              Cned
              <div className="sub-menu">
                <Link href={"/Cned/E4"}>Épreuve E4</Link>
                <Link href={"/Cned/VeilleTechnologique"}>
                  Veille Technologique
                </Link>
              </div>
            </Link>
          </nav>
          <Link
            href={"/contact-me"}
            className={
              router.pathname === "/contact-me"
                ? "contact-active"
                : "go-contact"
            }
          >
            Me contacter
          </Link>
        </div>
      </header>
    </>
  );
}
