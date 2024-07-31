import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";

interface TopSectionProps {
    scrollRef: RefObject<HTMLDivElement>;
}

const TopSection: React.FC<TopSectionProps> = ({ scrollRef }) => {
    const scrollToContent = () => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative h-screen flex flex-col justify-around items-center px-[10%]">
            <Image className="absolute w-full h-full object-cover object-center select-none" src="/background image.png" width={1920} height={1080} alt="image de fond" />
            <div className="relative w-full flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo band 3.png" width={80} height={80} alt="logo" />
                </Link>
            </div>
            <div className="relative w-full flex justify-between items-center">
                <Image className="hidden lg:block" src="/logo 2.png" width={100} height={100} alt="logo gauche" />
                <Image className="shrink mx-auto" src="/name1.png" width={600} height={400} alt="name" />
                <Image className="hidden lg:block" src="/logo band 5.png" width={100} height={100} alt="logo droite" />
            </div>
            <div className="relative flex flex-col justify-center items-center max-w-80">
                <p className="text-sm font-light">Oluptatiur? Obistotatis aut lab illandu ntotatatem ressunt iuntia voluptam fugitinusae. Nam eumquamust ma dolorrovid et quam unt, tem. Rae pratet quid quiam aut hilitatem conet explictam endenis volentur? Qui int.</p>
                <button type="button" className="" title="voir" onClick={scrollToContent}>
                    <svg width="70" height="70" strokeWidth=".8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9l6 6 6-6" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default TopSection;
