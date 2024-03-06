import Link from "next/link";
import Experience from "@/components/experience";

export default function Experiences() {
  return (
    <>
      <article>
        <h3>Mes expériences</h3>
        <p className="max-w-prose">
          Découvrez mon parcours, où chaque expérience scolaire et
          professionnelle m'ont forger ma passion pour l'informatique.
        </p>
      </article>
      <div className="bg-slate-300 w-px h-80 absolute left-1/2"></div>
      <Experience
        name={"BTS SIO"}
        description={"une description"}
        annee={"2022 - 2024"}
      />
      <section className="border">
        <div className="mt-24 flex flex-col gap-7 justify-start">
          <h3 className="mt-8">Mon cv</h3>
          <div className="mt-8">
            <Link href="/photo/CV.pdf" download className="btn">
              Télécharger mon CV
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
