import Link from "next/link";
import Image from "next/image";

export default function PingPong() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>PingPong</h2>
          <h4>Déc.2023</h4>
          <Link
            href="https://github.com/sabrina080802/PingPong"
            className="text-purple-600 hover:text-purple-400"
            target="blank"
          >
            Github
          </Link>
          <div>
            <h3>Objectif :</h3>
            <p>
              Réalisation d'un ping pong en Java avec des effets de particules.
            </p>
          </div>
          <Image
            src="/photo/PingPong.webp"
            width={300}
            height={300}
            alt="image"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="about-me">
        <div className="Source"></div>
      </div>
    </>
  );
}
