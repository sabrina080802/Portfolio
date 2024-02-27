import Head from "next/head";
import Link from "next/link";
import {useRouter } from 'next/router';

export default function Header(){
  const router = useRouter();

    function handleMenuClick(event){
      event.preventDefault();
      router.push(event.target.getAttribute("href"));
    }

    return (
      <>
        <header>
          <Head>
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          </Head>
          <nav className="Header">
            <Link onClick={handleMenuClick} href={"/"} aria-active={router.pathname === '/'}>
              Accueil
            </Link>
            <Link onClick={handleMenuClick} href={"/projets"} aria-active={router.pathname === '/projets'} aria-disable-hover>
              Projets
              <div className="sub-menu">
                <Link onClick={handleMenuClick} href={"/projets/CNED"}>Projets CNED</Link>
                <Link onClick={handleMenuClick} href={"/projets/others"}>Autres Projets</Link>
              </div>
            </Link>
            <Link onClick={handleMenuClick} href={"/experiences"} aria-active={router.pathname === '/experiences'} aria-disable-hover>
            Expériences
            <div className="sub-menu">
                <Link onClick={handleMenuClick} href={"/experiences/CV"}>CV</Link>
                <Link onClick={handleMenuClick} href={"/experiences/Stages"}>Stages</Link>
              </div>
            </Link>
            <Link onClick={handleMenuClick} href={"/Cned"} aria-active={router.pathname === '/Cned'} aria-disable-hover>
              Cned
              <div className="sub-menu">
                <Link onClick={handleMenuClick} href={"/Cned/E4"}>Épreuve E4</Link>
                <Link onClick={handleMenuClick} href={"/Cned/VeilleTechnologique"}>Veille Technologique</Link>
                <Link onClick={handleMenuClick} href={"/Cned/Tableau"}>Compétences</Link>

              </div>
            </Link>
          </nav>
          <Link onClick={handleMenuClick} href={"/contact-me"} className={router.pathname === '/contact-me' ? 'contact-active' : 'go-contact'}>
            Me contacter
          </Link>
        </header>
      </>
    );
}