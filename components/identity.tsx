import SocialNetworks from "@/components/social-networks";
import Image from 'next/image';


export default function Identity(){
    return (
      <>
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
            Il me faut une petite phrase de présentation
            <br />
            qui respire la <span>qualité</span> que je placerai juste ici afin
            <br />
            d'avoir un vrai site de filou.
          </p>
          <SocialNetworks />
        </div>
      </>
    );
}