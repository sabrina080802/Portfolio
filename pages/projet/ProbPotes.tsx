import Link from "next/link";
import Image from "next/image";

export default function ProbPotes() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2>ProbPotes</h2>
          <h4>Application de bureau • Mai-Juin 2021</h4>
          <Link
            href=""
            className="text-purple-600 hover:text-purple-400"
            target="blank"
          >
            Github
          </Link>
          <div>
            <h3>Objectif :</h3>
            <p>
              Réalisation d'une application afin de créez des événements,
              ajoutez des dépenses, indiquez qui a payé et pour qui, puis
              générez des rapports pour savoir qui doit quoi à qui.
            </p>
          </div>
          <Image
            src="/photo/ProbPotes.webp"
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
