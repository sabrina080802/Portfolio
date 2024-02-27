import RootLayout from "./../layout";

import Footer from "@/components/footer";
import Image from 'next/image';

export default function VeilleTechnologique() {
  return (
    <>
      <RootLayout>
      <h2 className='title'>Veille Technologie</h2>
      <section className="border">
        <div className="identity daily">
            <Image
                src="/photo/DailyDev.jpeg"
                width={300}
                height={300}
                alt="image"
                className="daily-img"
            />
            <h3 className="subtitle">Daily.dev</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio, sed magnam eos asperiores qui maxime quas ea, vitae commodi placeat cumque. Obcaecati quidem numquam molestiae tempora sunt illo labore?</p>
        </div>
        <div className="about-me">
        </div>
      <Footer />
      </section>

      </RootLayout>
    </>
  );
}
