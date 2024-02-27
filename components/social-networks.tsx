import Link from "next/link";
import Image from "next/image";

export default function SocialNetworks() {
  return (
    <>
      <div className="social-networks">
        <Link href={"mailto:sabrina.alhammuti@hotmail.com"}>
          <Image src={"/photo/mail.svg"} width={30} height={30} alt={"Email"} />
        </Link>
        <Link href={"https://www.linkedin.com/in/sabrina-al-hammuti-1441632b7/"}>
          <Image
            src={"/photo/linkedin.svg"}
            width={30}
            height={30}
            alt={"Linkedin"}
          />
        </Link>
        <Link href={"https://github.com/sabrina080802"}>
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
