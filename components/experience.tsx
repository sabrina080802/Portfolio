import Image from "next/image";
import Link from "next/link";

export type ExperienceInfo = {
  name: string;
  lines: Array<ExperienceLine>;
  startYear: string;
  endYear: string;
};
export type ExperienceLine = {
  links: Array<ExperienceProjectLink>;
  description: string;
};
export type ExperienceProjectLink = {
  name: string;
  link: string;
};

export default function Experience(infos: ExperienceInfo) {
  return (
    <>
      <div className="experience-container">
        <div className="year-end">{infos.startYear}</div>
        <div className="year-begin">{infos.endYear}</div>
        <Image
          src="/photo/ImageExp.svg"
          alt="Décoration"
          width={50}
          height={800}
        />
        <div className="experience-content">
          <h4>{infos.name}</h4>
          {infos.lines.map((x, index) => (
            <div key={index} className="mb-8">
              <p>{x.description}</p>
              {x.links.length > 0 && (
                <>
                  <h5>Projets liés</h5>
                  {x.links.map((y) => (
                    <>
                      <Link
                        className="btn-type-more btn-type-more-2"
                        href={y.link}
                      >
                        {y.name}
                      </Link>
                    </>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
