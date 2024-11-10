import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const UnderTextSection = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);
  const star1 = useRef(null);
  const star2 = useRef(null);

  useGSAP(
    () => {
      gsap.from(star1.current, {
        scrollTrigger: {
          trigger: star1.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: "-=300",
      });
      gsap.from(star2.current, {
        scrollTrigger: {
          trigger: star2.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: "-=200",
      });
    },
    { scope: container }
  );

  return (
    <section
      className="relative min-h-[60vh] sm:min-h-[80vh] md:min-h-screen flex flex-col items-center bg-white pt-16"
      ref={container}
    >
      <Image
        className="w-[60%] md:w-[50%] h-auto"
        src="/sous texte.png"
        width="800"
        height="800"
        alt="Saint Amaury"
      />
      <Image
        ref={star1}
        className="absolute w-[40%] top-[60%] left-0 -translate-y-1/2"
        src="/background/étoile.png"
        width="800"
        height="800"
        alt="étoile"
      />
      <Image
        ref={star2}
        className="absolute w-[60%] bottom-0 right-0 translate-y-1/2"
        src="/background/étoile droite.png"
        width="800"
        height="800"
        alt="étoile"
      />
    </section>
  );
};

export default UnderTextSection;
