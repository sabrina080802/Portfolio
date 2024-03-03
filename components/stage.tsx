import Image from "next/image";
import Link from "next/link";

export type StageInfo = {
  image: string;
  name: string;
  stage: string;
  description: string;
  link: string;
  descriptionlink: string;
};

export default function Stage(infos: StageInfo) {
  return (
    <div className="flex gap-6 items-center">
      <div className="">
        <p>{infos.stage}</p>
        <Image
          src={infos.image}
          width={300}
          height={300}
          alt={"image"}
          className="bg-white rounded-xl shadow aspect-square max-w-48 object-contain p-2"
        />
      </div>
      <div className="flex-1">
        <h4>{infos.name}</h4>

        <p>{infos.description}</p>
        <Link href={infos.link} download className="btn">
          {infos.descriptionlink}
        </Link>
      </div>
    </div>
  );
}
