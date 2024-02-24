import Link from "next/link";
import Image from "next/image";

export default function SocialNetworks() {
  return (
    <>
      <div className="social-networks">
        <Link href={""}>
          <Image src={"/photo/mail.svg"} width={30} height={30} alt={"Email"} />
        </Link>
        <Link href={""}>
          <Image
            src={"/photo/linkedin.svg"}
            width={30}
            height={30}
            alt={"Linkedin"}
          />
        </Link>
        <Link href={""}>
          <Image
            src={"/photo/github.svg"}
            width={30}
            height={30}
            alt={"Github"}
          />
        </Link>
      </div>
    </>
  );
}
