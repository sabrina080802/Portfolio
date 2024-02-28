import SocialNetworks from "@/components/social-networks";
import Image from "next/image";

export default function Identity() {
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
          Plongez dans le monde de l'informatique
          <br />à travers mon regard : <br />
          <b>un espace où l'impossible devient réalité.</b>
        </p>
        <p>
          Ce portfolio est une fenêtre sur ma passion,
          <br /> un lieu où le code rencontre la créativité
          <br />
          et où ma détermination transforme
          <br />
          les idées en projets concrets et captivants.
        </p>
        <div className="gps">
          <Image
            src={"/photo/gps.webp"}
            width={15}
            height={15}
            alt={"location"}
            className="location-icon"
          />
          <span>Strasbourg</span>
        </div>
        <SocialNetworks />
      </div>
    </>
  );
}
