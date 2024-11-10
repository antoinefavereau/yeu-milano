import Image from "next/image";
import Marquee from "@/components/magicui/marquee";

const LogosSection = () => {
  const logos = [
    {
      id: 1,
      src: "/tmp images/logo band 1.png",
      alt: "Logo 1",
    },
    {
      id: 2,
      src: "/tmp images/logo band 2.png",
      alt: "Logo 2",
    },
    {
      id: 3,
      src: "/tmp images/logo band 3.png",
      alt: "Logo 3",
    },
    {
      id: 4,
      src: "/tmp images/logo band 4.png",
      alt: "Logo 4",
    },
    {
      id: 5,
      src: "/tmp images/logo band 5.png",
      alt: "Logo 5",
    },
    {
      id: 6,
      src: "/tmp images/logo band 6.png",
      alt: "Logo 6",
    },
    {
      id: 7,
      src: "/tmp images/logo band 7.png",
      alt: "Logo 7",
    },
    {
      id: 8,
      src: "/tmp images/logo band 8.png",
      alt: "Logo 8",
    },
  ];

  return (
    <section className="relative w-full border-y-2 border-light">
      <Marquee pauseOnHover className="[--duration:20s]">
        {logos.map((logo) => (
          <Image
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            className="w-24 h-24"
            width={100}
            height={100}
          />
        ))}
      </Marquee>
    </section>
  );
};

export default LogosSection;
