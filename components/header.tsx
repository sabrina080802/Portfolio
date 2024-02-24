import Head from "next/head";
import Link from "next/link";
import {useRouter } from 'next/router';

export default function Header(){
  const router = useRouter();
    return (
      <>
        <header>
          <Head>
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          </Head>
          <nav className="Header">
            <Link href={"/"} aria-active={router.pathname === '/'}>
              Accueil
            </Link>
            <Link href={"/projets"} aria-active={router.pathname === '/projets'}>Projets</Link>
            <Link href={"/experiences"} aria-active={router.pathname === '/experiences'}>Expériences</Link>
          </nav>
          <Link href={"/contact-me"} className={router.pathname === '/contact-me' ? 'contact-active' : 'go-contact'}>
            Me contacter
          </Link>
        </header>
      </>
    );
}