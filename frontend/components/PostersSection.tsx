"use client";

import Image from "next/image";
import { useState, RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Poster {
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
            title: "Poster 1",
            description: "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
            images: ["/tmp images/N°11.jpg", "/tmp images/N°11 1.jpg", "/tmp images/N°11 2.jpg"],
        },
        {
            title: "Poster 2",
            description: "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
            images: ["/tmp images/N°11.jpg", "/tmp images/N°11 1.jpg", "/tmp images/N°11 2.jpg"],
        },
        {
            title: "Poster 3",
            description: "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
            images: ["/tmp images/N°11.jpg", "/tmp images/N°11 1.jpg", "/tmp images/N°11 2.jpg"],
        },
        {
            title: "Poster 4",
            description: "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
            images: ["/tmp images/N°11.jpg", "/tmp images/N°11 1.jpg", "/tmp images/N°11 2.jpg"],
        },
        {
            title: "Poster 5",
            description: "Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int. Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.",
            images: ["/tmp images/N°11.jpg", "/tmp images/N°11 1.jpg", "/tmp images/N°11 2.jpg"],
        },
    ];

    const [activePoster, setActivePoster] = useState<Poster>(posters[0]);

    return (
        <section className="relative" ref={scrollRef}>
            <Image className="absolute w-full h-full object-contain object-center select-none" src="/background/name.png" width={1920} height={1080} alt="" />
            <div className="relative h-screen flex justify-around align-start gap-20 px-20 py-16">
                <div className="max-w-[30%] shrink-0">
                    <Image src={activePoster.images[0]} width={500} height={1000} alt={activePoster.title} />
                </div>
                <div className="flex flex-col gap-8 shrink">
                    <h2 className="text-4xl font-bold uppercase mt-8">{activePoster.title}</h2>
                    <p className="grow overflow-auto">{activePoster.description}</p>
                    <div className="flex gap-4">
                        {activePoster.images.slice(1).map((image, index) => (
                            <Image key={index} src={image} width={100} height={100} alt={activePoster.title} />
                        ))}
                    </div>
                </div>
                <Swiper className="relative h-full shrink-0 w-32" spaceBetween={16} slidesPerView={3} direction="vertical" grabCursor mousewheel navigation modules={[Mousewheel, Navigation]}>
                    {posters.map((poster, index) => (
                        <SwiperSlide key={index} className="cursor-pointer" onClick={() => setActivePoster(poster)}>
                            <Image src={poster.images[0]} width={200} height={400} alt={poster.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PostersSection;
