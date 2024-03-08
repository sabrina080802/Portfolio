import Link from "next/link";
import Image from "next/image";

export default function Magy() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>Magy</h2>
          <h4>Framework • Déc.2023</h4>
          <Link
            href="https://github.com/sabrina080802/Magy"
            className="text-purple-600 hover:text-purple-400"
            target="blank"
          >
            Github
          </Link>
          <div>
            <h3>Objectif :</h3>
            <p>
              Conception d'un framework dans le but d'approfondir mes
              connaissances en web.
            </p>
          </div>
          <Image
            src="/photo/"
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
