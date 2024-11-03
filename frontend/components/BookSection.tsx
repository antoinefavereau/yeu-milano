import Image from "next/image";
import Book from "./ui/Book";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BookSection = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const images = [
    "/book/page1.jpg",
    "/book/page2.jpg",
    "/book/page3.jpg",
    "/book/page4.jpg",
    "/book/page5.jpg",
    "/book/page6.jpg",
    "/book/page7.jpg",
    "/book/page8.jpg",
  ];

  const container = useRef<SVGSVGElement | null>(null);
  const arch = useRef<SVGPathElement | null>(null);
  const archPathTo =
    "M0 1553.45C0 1353.51 0 730.5 0 500C0 0 0 0 500 0L1000 0L1500 0C2000 0 2000 0 2000 500C2000 830.5 2000 1353.51 2000 1553.46V1931.47H0V1553.45Z";
  // M0 1553.45C0 1353.51 42.3942 1155.83 124.386 973.465C288.133 609.263 551.34 298.668 883.744 77.3903L1000 0L1116.26 77.3902C1448.66 298.667 1711.87 609.263 1875.61 973.465C1957.61 1155.83 2000 1353.51 2000 1553.46V1931.47H0V1553.45Z
  // M0 1553.45C0 1353.51 5.57327e-06 730.5 3.8147e-06 500C0 0 0 0 500 1.92826e-10H1000H1500C2000 -1.66982e-09 2000 0 2000 500C2000 830.5 2000 1353.51 2000 1553.46V1931.47H0V1553.45Z

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 40%",
            end: "top 0%",
            scrub: true,
          },
        })
        .to(arch.current, {
          ease: "none",
          attr: { d: archPathTo },
        });
    },
    { scope: arch }
  );

  return (
    <section className="relative">
      <Image
        className="absolute w-8/12 h-auto start-1/2 -translate-x-1/2 pt-16 select-none"
        src="/background/élément 1.png"
        width="1000"
        height="1000"
        alt=""
      />
      <svg
        className="absolute w-full h-auto mt-[calc(4rem+16vw)]"
        width="2000"
        height="1932"
        viewBox="0 0 2000 1932"
        ref={container}
      >
        <path
          d="M0 1553.45C0 1353.51 42.3942 1155.83 124.386 973.465C288.133 609.263 551.34 298.668 883.744 77.3903L1000 0L1116.26 77.3902C1448.66 298.667 1711.87 609.263 1875.61 973.465C1957.61 1155.83 2000 1353.51 2000 1553.46V1931.47H0V1553.45Z"
          fill="white"
          ref={arch}
        />
      </svg>
      <div className="relative flex flex-col items-center mt-[calc(10rem+16vw)]">
        <div className="absolute w-full -bottom-[1rem] h-[calc(100%-96vw+8rem)] bg-white"></div>
        <Image
          className="relative max-w-[50%] h-auto"
          src="/logo.png"
          width="250"
          height="250"
          alt="logo"
        />
        <div className="relative w-full flex justify-center">
          <Image
            className="relative opacity-50 w-96 max-w-[60%] h-auto"
            src="/background/fenetre.png"
            width="500"
            height="500"
            alt="fenêtre"
          />
          <div className="absolute w-full h-full flex justify-center items-center overflow-hidden">
            <Book images={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
