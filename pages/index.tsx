import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import RootLayout from "./layout";
import "./styles/globals.css"; 

export default function Home() {
  return (
    <>
      <RootLayout>
        <header>
          <Head>
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          </Head>
          <nav className="Header">
            <Link href={""} aria-active>
              Accueil
            </Link>
            <Link href={""}>Projets</Link>
            <Link href={""}>Expériences</Link>
          </nav>
          <Link href={""} className="ContactMe">
            Me contacter
          </Link>
        </header>
        <section className="border">
          <div className="identity">
            <Image
              src="/photo/sabrina.jpeg"
              width={150}
              height={150}
              alt="image"
              className="index-img"
            />
            <h1>Sabrina Al Hammuti</h1>
            <p>Étudiante en informatique de 21 ans.</p>
            <p>
              Il me faut une petite phrase de présentation<br/>qui respire la{" "}
              <span>qualité</span> que je placerai juste ici afin<br/>d'avoir un
              vrai site de filou.
            </p>
            <div className="social-networks">
              <Link href={""}>
                <Image
                  src={"/photo/mail.svg"}
                  width={30}
                  height={30}
                  alt={"Email"}
                />
              </Link>
              <Link href={""}>
                <Image
                  src={"/photo/linkedin.svg"}
                  width={30}
                  height={30}
                  alt={"Linkedin"}
                />
              </Link>
              <Link href={""}>
                <Image
                  src={"/photo/github.svg"}
                  width={30}
                  height={30}
                  alt={"Github"}
                />
              </Link>
            </div>
          </div>
          <div className="about-me">
            <article>
              <h2>Bonjour !</h2>
              <p>Je vous accueille chaleureusement sur ce petit<br/>site pour me présenter.</p>
              <p>J'adore la lecture, les séries Netflix, le cinéma, les<br/>bons restaurants, mais avant tout l'informatique !</p>
              <div className="grid grid-cols-2 gap-4">
                <button className="btn">Me contacter -></button>
                <button className="btn-type-1">Découvrir mes projets</button>
              </div>
            </article>
            <article>
              <h3>Mes expériences</h3>
              <p>J'adore être expérimentées ! J'irais même jusqu'à dire que<br/>c'est une des principales qualité de l'homme.</p>
              <div className="section-container">
                <div className="icon-container">
                  <img
                    src={"/photo/cned.png"}
                    alt={"Cned"}
                  />    
                </div>
                 
                <div className="section-container-name">             
                <h6>BTS SIO</h6>
                  <span>L'école du BTS, Strasbourg</span>
                </div>
                <div className="date">2022-2024</div>
              </div>

              <button className="btn-type-1">Découvrir la suite -></button>
            </article>
            <article>
              <h3>Mes projets préférés</h3>
              <p>J'adore être expérimentée ! J'irais même jusqu'à dire que c'est une des principales qualité de l'homme.</p>
              <div className="section-container">
                <div className="img-container relative">
                  <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}/>
                </div>
                <div className="tags">Web Application PC</div>
                <h4>La cathédrale de Strasbourg</h4>
                <p>Croyez le ou non mais c'est bel et bien moi qui ait construit ce fameux édifice. Quel accomplissement !</p>
                <div className="align-right">
                  <button className="btn-type-more">Découvrir -></button>
                </div>
              </div>

              <button className="btn-type-1">Découvrir la suite -></button>
            </article>
            <article>
              <h4>Merci pour votre visite &lt;3</h4>
            </article>
          </div>
        </section>
      </RootLayout>
    </>
  );

}
