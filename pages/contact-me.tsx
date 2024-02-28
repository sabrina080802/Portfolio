import RootLayout from "./layout";

import Contact from "@/components/contact";
import Identity from "@/components/identity";

import "./styles/globals.css";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactMe() {
  return (
    <>
      <RootLayout>
        <section>
          <Identity />
          <div className="about-me">
            <h3>Contactez moi</h3>
            <Contact />
          </div>
        </section>
      </RootLayout>
    </>
  );
}
