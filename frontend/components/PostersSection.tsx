"use client";

import Image from "next/image";
import { useState, RefObject, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Poster {
  id: number;
  title: string;
  description: string;
  images: string[];
}

interface PostersSectionProps {
  scrollRef: RefObject<HTMLDivElement>;
}

const PostersSection: React.FC<PostersSectionProps> = ({ scrollRef }) => {
  const posters: Poster[] = [
    {
      id: 1,
      title: "Me On Drugs",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/Me On Drugs.jpg",
        "/affiches/Me On Drugs1.jpg",
        "/affiches/Me On Drugs2.jpg",
      ],
    },
    {
      id: 2,
      title: "N°10",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/N°10.jpg",
        "/affiches/N°10 1.jpg",
        "/affiches/N°10 2.jpg",
      ],
    },
    {
      id: 3,
      title: "N°11",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/N°11.jpg",
        "/affiches/N°11 1.jpg",
        "/affiches/N°11 2.jpg",
      ],
    },
    {
      id: 4,
      title: "N°12",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/N°12.jpg",
        "/affiches/N°12 1.jpg",
        "/affiches/N°12 2.jpg",
      ],
    },
    {
      id: 5,
      title: "N°13",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/N°13.jpg",
        "/affiches/N°13 1.jpg",
        "/affiches/N°13 2.jpg",
      ],
    },
    {
      id: 6,
      title: "N°14",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/N°14.jpg",
        "/affiches/N°14 1.jpg",
        "/affiches/N°14 2.jpg",
      ],
    },
    {
      id: 7,
      title: "N°15",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/N°15.jpg",
        "/affiches/N°15 1.jpg",
        "/affiches/N°15 2.jpg",
      ],
    },
    {
      id: 8,
      title: "N°16",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/N°16.jpg",
        "/affiches/N°16 1.jpg",
        "/affiches/N°16 2.jpg",
      ],
    },
    {
      id: 9,
      title: "N°17",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/N°17.jpg",
        "/affiches/N°17 1.jpg",
        "/affiches/N°17 2.jpg",
      ],
    },
    {
      id: 10,
      title: "N°18",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/N°18.jpg",
        "/affiches/N°18 1.jpg",
        "/affiches/N°18 2.jpg",
      ],
    },
    {
      id: 11,
      title: "N°19",
      description:
        "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
      images: [
        "/affiches/N°19.jpg",
        "/affiches/N°19 1.jpg",
        "/affiches/N°19 2.jpg",
      ],
    },
  ];

  const [activePoster, setActivePoster] = useState<Poster>(posters[0]);

  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMd(window.matchMedia("(min-width: 768px)").matches);

      const handleResize = () => {
        setIsMd(window.matchMedia("(min-width: 768px)").matches);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section className="relative" ref={scrollRef}>
      <Image
        className="absolute w-full h-full object-contain object-center select-none pointer-events-none"
        src="/background/name.png"
        width={1920}
        height={1080}
        alt=""
      />
      <div className="relative md:h-screen flex flex-col-reverse md:flex-row justify-around align-start gap-8 md:gap-20 px-8 md:px-20 py-16">
        <div className="hidden lg:block max-w-[30%] shrink-0">
          <Image
            src={activePoster.images[0]}
            width={500}
            height={1000}
            alt={activePoster.title}
          />
        </div>
        <div className="flex flex-col gap-8 shrink">
          <h2 className="text-4xl font-bold mt-8">{activePoster.title}</h2>
          <p className="grow overflow-auto font-light">
            {activePoster.description}
          </p>
          <div className="flex gap-4 max-w-full overflow-auto">
            {activePoster.images.map((image) => (
              <Image
                key={image}
                className="lg:first:hidden"
                src={image}
                width={100}
                height={100}
                alt={activePoster.title}
              />
            ))}
          </div>
        </div>
        <Swiper
          className="relative h-auto md:h-full shrink-0 w-full md:w-32"
          spaceBetween={16}
          slidesPerView={3}
          direction={isMd ? "vertical" : "horizontal"}
          grabCursor
          mousewheel
          navigation
          modules={[Mousewheel, Navigation]}
        >
          {posters.map((poster) => (
            <SwiperSlide
              key={poster.id}
              className="cursor-pointer"
              onClick={() => setActivePoster(poster)}
            >
              <Image
                src={poster.images[0]}
                width={200}
                height={400}
                alt={poster.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PostersSection;
