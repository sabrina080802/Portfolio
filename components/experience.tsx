export type ExperienceInfo = {
  name: string;
  description: string;
  annee: string;
};

export default function Experience(infos: ExperienceInfo) {
  return (
    <>
      <div className="">
        <h4>{infos.name}</h4>
        <p>{infos.description}</p>
        <p>{infos.annee}</p>
      </div>
    </>
  );
}
