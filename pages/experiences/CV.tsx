import RootLayout from "./../layout";

import Footer from "@/components/footer";
import Image from 'next/image';

export default function CV() {
  return (
    <>
      <RootLayout>
      <h2 className='title'>Mes Expériences & CV</h2>
      <section className="border">

      <p>Mon parcours </p>
      <div className="Parcours">
        
      </div>
      <p>Mon cv</p>
        <div className="">
        <iframe src="/photo/CV.pdf" width="500" height="600"></iframe>
          <a href="/photo/CV.pdf" download>
              <button> Télécharger le PDF </button>
          </a>
        </div>
      <Footer />
      </section>
      </RootLayout>
    </>
  );
}
