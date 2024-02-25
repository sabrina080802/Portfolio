import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import RootLayout from "./layout";
import Footer from "@/components/footer";
import Identity from "@/components/identity";
import Project from "@/components/project"
import "./styles/globals.css"; 

export default function Home() {
  return (
    <>
      <RootLayout>
        <section className="border">
          <Identity/>

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
              <Project name="La jolie cathédrale" tags={["C#", "JS"]} description="Croyez le ou non mais c'est bel et bien moi qui ait construit ce fameux édifice. Quel accomplissement !"/>

              <button className="btn-type-1">Découvrir la suite -></button>
            </article>
            <Footer/>
          </div>
        </section>
      </RootLayout>
    </>
  );
}
